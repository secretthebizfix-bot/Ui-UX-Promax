"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { usePrefersReducedMotion } from "@/hooks/use-media-query";

/**
 * Vanilla Three.js hero visual: a distorted, iridescent gradient sphere
 * (a "3D gradient orb") with floating glass shards and mouse parallax.
 * Kept framework-free for a clean, dependency-light install and fine control.
 */
export function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // ----- Central gradient orb -------------------------------------------
    const geometry = new THREE.IcosahedronGeometry(1.9, 20);
    const uniforms = {
      uTime: { value: 0 },
      uColorA: { value: new THREE.Color("#2563EB") },
      uColorB: { value: new THREE.Color("#06B6D4") },
      uColorC: { value: new THREE.Color("#14B8A6") },
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      transparent: true,
      vertexShader: /* glsl */ `
        uniform float uTime;
        varying vec3 vPosition;
        varying vec3 vNormal;

        // classic simplex-ish noise via sines (cheap, smooth, good enough)
        float noise(vec3 p) {
          return sin(p.x * 1.5 + uTime) * 0.5
               + sin(p.y * 1.8 + uTime * 0.8) * 0.5
               + sin(p.z * 1.6 + uTime * 1.1) * 0.5;
        }

        void main() {
          vNormal = normal;
          float displacement = noise(position * 1.1) * 0.22;
          vec3 newPosition = position + normal * displacement;
          vPosition = newPosition;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        uniform vec3 uColorA;
        uniform vec3 uColorB;
        uniform vec3 uColorC;
        varying vec3 vPosition;
        varying vec3 vNormal;

        void main() {
          float mixA = smoothstep(-1.0, 1.0, vPosition.y);
          float mixB = smoothstep(-1.0, 1.0, vPosition.x);
          vec3 color = mix(uColorA, uColorB, mixA);
          color = mix(color, uColorC, mixB * 0.6);

          // fresnel rim light
          vec3 viewDir = normalize(-vPosition);
          float fresnel = pow(1.0 - max(dot(viewDir, normalize(vNormal)), 0.0), 2.2);
          color += fresnel * 0.55;

          gl_FragColor = vec4(color, 0.92);
        }
      `,
    });

    const orb = new THREE.Mesh(geometry, material);
    scene.add(orb);

    // wireframe halo shell
    const shell = new THREE.Mesh(
      new THREE.IcosahedronGeometry(2.55, 1),
      new THREE.MeshBasicMaterial({ color: "#06B6D4", wireframe: true, transparent: true, opacity: 0.12 }),
    );
    scene.add(shell);

    // ----- Floating glass shards ------------------------------------------
    const shards = new THREE.Group();
    const shardGeo = new THREE.OctahedronGeometry(0.16, 0);
    const shardMat = new THREE.MeshBasicMaterial({ color: "#14B8A6", transparent: true, opacity: 0.55 });
    for (let i = 0; i < 26; i++) {
      const shard = new THREE.Mesh(shardGeo, shardMat.clone());
      const radius = 3 + Math.random() * 2.4;
      const angle = Math.random() * Math.PI * 2;
      const yy = (Math.random() - 0.5) * 5;
      shard.position.set(Math.cos(angle) * radius, yy, Math.sin(angle) * radius - 1);
      shard.scale.setScalar(0.5 + Math.random() * 1.4);
      (shard.material as THREE.MeshBasicMaterial).color = new THREE.Color(
        ["#2563EB", "#06B6D4", "#14B8A6"][i % 3],
      );
      shards.add(shard);
    }
    scene.add(shards);

    // ----- Interaction & resize -------------------------------------------
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
    const onPointerMove = (e: PointerEvent) => {
      pointer.tx = (e.clientX / window.innerWidth - 0.5) * 2;
      pointer.ty = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", onPointerMove);

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // ----- Animation loop --------------------------------------------------
    const clock = new THREE.Clock();
    let frameId = 0;
    let visible = true;
    const io = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting), {
      threshold: 0,
    });
    io.observe(container);

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      if (!visible) return;

      const elapsed = clock.getElapsedTime();
      uniforms.uTime.value = reducedMotion ? 0 : elapsed * 0.5;

      pointer.x += (pointer.tx - pointer.x) * 0.05;
      pointer.y += (pointer.ty - pointer.y) * 0.05;

      if (!reducedMotion) {
        orb.rotation.y = elapsed * 0.15 + pointer.x * 0.4;
        orb.rotation.x = pointer.y * 0.3;
        shell.rotation.y = -elapsed * 0.08;
        shell.rotation.z = elapsed * 0.04;
        shards.rotation.y = elapsed * 0.06 + pointer.x * 0.3;
        shards.children.forEach((shard, i) => {
          shard.position.y += Math.sin(elapsed + i) * 0.0016;
          shard.rotation.x = elapsed * 0.4;
          shard.rotation.y = elapsed * 0.3;
        });
      }

      camera.position.x += (pointer.x * 0.6 - camera.position.x) * 0.05;
      camera.position.y += (-pointer.y * 0.4 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      io.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      shardGeo.dispose();
      shards.children.forEach((s) => (s as THREE.Mesh).geometry.dispose());
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [reducedMotion]);

  return <div ref={containerRef} className="size-full" aria-hidden />;
}

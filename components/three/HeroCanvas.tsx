"use client";

import dynamic from "next/dynamic";
import { Component, type ReactNode, useEffect, useState } from "react";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => <SceneFallback />,
});

/** Static gradient fallback shown while 3D loads, on error, or when motion is reduced. */
function SceneFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative h-64 w-64 animate-float-slow">
        <div className="absolute inset-0 rounded-full bg-brand-gradient opacity-80 blur-2xl" />
        <div className="absolute inset-6 rounded-full bg-gradient-to-br from-brand-500 to-cyanic opacity-90" />
        <div className="absolute inset-16 rounded-full bg-white/30 blur-md" />
      </div>
    </div>
  );
}

/** Prevents any WebGL / 3D runtime failure from crashing the page. */
class SceneErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch() {
    /* swallow — fallback is rendered instead */
  }
  render() {
    if (this.state.hasError) return <SceneFallback />;
    return this.props.children;
  }
}

export function HeroCanvas() {
  const [allow3D, setAllow3D] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasWebGL = (() => {
      try {
        const canvas = document.createElement("canvas");
        return !!(
          window.WebGLRenderingContext &&
          (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
        );
      } catch {
        return false;
      }
    })();
    setAllow3D(!reduced && hasWebGL);
  }, []);

  return (
    <div className="absolute inset-0" aria-hidden="true">
      {allow3D ? (
        <SceneErrorBoundary>
          <HeroScene />
        </SceneErrorBoundary>
      ) : (
        <SceneFallback />
      )}
    </div>
  );
}

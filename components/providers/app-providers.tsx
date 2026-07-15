"use client";

import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { ScrollProgress } from "@/components/common/scroll-progress";
import { Cursor } from "@/components/common/cursor";
import { BackToTop } from "@/components/common/back-to-top";
import { FloatingCta } from "@/components/common/floating-cta";
import { LoadingScreen } from "@/components/common/loading-screen";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <SmoothScrollProvider>
        <LoadingScreen />
        <ScrollProgress />
        <Cursor />
        {children}
        <BackToTop />
        <FloatingCta />
        <Toaster
          position="bottom-center"
          toastOptions={{
            classNames: {
              toast:
                "!rounded-2xl !border !border-border/70 !bg-card/95 !text-foreground !backdrop-blur-xl !shadow-premium",
            },
          }}
        />
      </SmoothScrollProvider>
    </ThemeProvider>
  );
}

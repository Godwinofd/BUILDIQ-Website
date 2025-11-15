"use client";

import dynamic from "next/dynamic";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Spline = dynamic(
  () => import("@splinetool/react-spline").then((m) => m.default),
  { ssr: false }
);

interface SplineSceneProps {
  scene?: string;
  className?: string;
}

/**
 * Forces the Spline <canvas> to be interactive by setting pointer-events/z-index on mount.
 */
export function SplineScene({
  scene = "/scene.splinecode",
  className = "",
}: SplineSceneProps) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [loaded, setLoaded] = useState(false);

  // Safety: when loaded, force the inner canvas to accept pointer events and sit above bg layers
  useEffect(() => {
    if (!loaded || !wrapRef.current) return;
    const canvas = wrapRef.current.querySelector("canvas");
    if (canvas) {
      canvas.style.pointerEvents = "auto";
      canvas.style.position = "relative";
      canvas.style.zIndex = "20"; // above typical z-10 content, below headers if needed
    }
  }, [loaded]);

  return (
    <div ref={wrapRef} className={`absolute inset-0 ${className}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="size-full"
      >
        {/* @ts-ignore */}
        <Spline
          scene={scene}
          onLoad={() => setLoaded(true)}
        />
      </motion.div>
    </div>
  );
}

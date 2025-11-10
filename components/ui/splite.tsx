'use client'

import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

// Dynamically import Spline only on the client
const Spline = dynamic(() => import("@splinetool/react-spline").then(mod => mod.default), {
  ssr: false,
});

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className = "" }: SplineSceneProps) {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Optional: log load attempts for debugging
    console.log("Loading Spline scene:", scene);
  }, [scene]);

  return (
    <div className={className}>
      {error ? (
        <div className="text-red-400 text-sm text-center mt-10">
          Failed to load 3D scene. Check your Spline URL.
        </div>
      ) : (
        // @ts-ignore: Spline types are incomplete
        <Spline
          scene={scene}
          onError={(e: any) => {
            console.error("Spline load error:", e);
            setError("Spline scene could not be loaded.");
          }}
          onLoad={() => console.log("Spline scene loaded successfully.")}
        />
      )}
    </div>
  );
}


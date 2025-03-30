// ShaderScene.tsx
'use client';
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Mesh } from "three";
import shaderMaterial from "./ShaderMaterial";

function AnimatedMesh() {
  const meshRef = useRef<Mesh>(null);
  const { viewport, gl } = useThree();
  const { width, height } = viewport;

  useFrame(({ clock }) => {
    shaderMaterial.uniforms.u_time.value = clock.getElapsedTime();
  });

  useEffect(() => {
    // 初期画面サイズ
    shaderMaterial.uniforms.u_resolution.value.set(
      gl.domElement.width,
      gl.domElement.height
    );

    // マウス追跡
    const handleMouseMove = (e: MouseEvent) => {
      shaderMaterial.uniforms.u_mouse.value.set(
        e.clientX,
        gl.domElement.height - e.clientY
      );
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [gl]);

  return (
    <mesh ref={meshRef} material={shaderMaterial}>
      <planeGeometry args={[width, height]} />
    </mesh>
  );
}

export default function ShaderScene() {
  return (
    <Canvas className="w-full h-screen absolute top-0 left-0 z-0">
      <AnimatedMesh />
    </Canvas>
  );
}

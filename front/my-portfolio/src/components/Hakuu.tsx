import { MeshBasicMaterial } from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky, Cloud, Clouds } from "@react-three/drei";

export default function Hakuu() {
    return (
        <Canvas>
            <ambientLight />
            <OrbitControls />
            <Sky />
            <Clouds material={MeshBasicMaterial}>
                <Cloud
                    position={[10, 2, 0]} // 雲のポジショニング
                    opacity={0.5} // 不透明度
                    speed={.4} // 回転速度
                    segments={20} // パーティクルの数
                    color={"white"}
                />
            </Clouds>
            <mesh>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial color="white" />
            </mesh>

        </Canvas>
    );
}
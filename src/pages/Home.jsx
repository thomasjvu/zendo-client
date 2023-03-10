import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
    Html,
    useProgress,
    OrbitControls,
    ContactShadows,
} from "@react-three/drei";
import MeditationDiorama from "../components/MeditationDiorama";

function Loader() {
    const { progress } = useProgress();
    console.log(progress, "% loaded");
    return <Html center>{progress} % loaded</Html>;
}

function Home() {
    return (
        <div>
            <Canvas
                style={{ background: "#e6cca1" }}
                camera={{ rotation: [0, 0, 0], position: [0, 0, 5] }}
            >
                <Suspense fallback={Loader}>
                    <ambientLight intensity={1.5} />
                    <MeditationDiorama
                        scale={[0.45, 0.45, 0.45]}
                        position={[-0.75, -3.0, 0]}
                        rotation={[0, 6.75, 0]}
                    />
                    <Html distanceFactor={15}>
                        <div className="canvas-html-content">
                            <h3 className="canvas-html-content-heading">
                                Zendō (禅堂)
                            </h3>
                            <p className="canvas-html-content-text">
                                a spiritual dōjō where <br /> meditation is
                                practiced
                            </p>
                            {/*
                            <a className="canvas-html-content-enter" href="/dashboard">
                                - Enter -
                            </a>
                            */}
                        </div>
                    </Html>
                    <OrbitControls
                        enableDamping
                        rotateSpeed={1.1}
                        enableZoom={false}
                    />
                    <ContactShadows
                        frames={1}
                        rotation-x={[Math.PI / 2]}
                        position={[0, -0.33, 0]}
                        far={0.4}
                        width={2}
                        height={2}
                        blur={4}
                    />
                </Suspense>
            </Canvas>
        </div>
    );
}

export default Home;

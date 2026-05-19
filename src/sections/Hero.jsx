
import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Astronaut } from "../components/Astronaut";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "../components/Loader";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isSmallMobile = useMediaQuery({ maxWidth: 480 });

  return (
    <section id="home" className="relative flex flex-col items-center md:items-start justify-center min-h-screen overflow-hidden c-space pt-28 md:pt-0">
      <div className="z-10 w-full md:pl-10 lg:pl-20">
        <HeroText />
      </div>
      <ParallaxBackground />
      <figure
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={<Loader />}>
            <Float>
              <Astronaut
                scale={isSmallMobile ? 0.12 : isMobile ? 0.15 : 0.23}
                position={isMobile ? [0, -0.6, 0] : [0.8, -0.8, 0]}
              />
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Hero;

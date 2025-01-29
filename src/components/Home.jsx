import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";
import { Link } from "react-scroll";

function StarBackground(props) {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.5 });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="black"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

const Home = () => {
  return (
    <div
      name="home"
      className="relative h-screen w-screen overflow-hidden bg-gradient-to-b from-stone-100 to-stone-200"
    >
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <StarBackground />
        </Canvas>
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative z-[2] max-w-[1600px] w-full px-8 text-center mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 2xl:mb-16"
          >
            <h1 className="mb-4 text-6xl sm:text-7xl xl:text-8xl 3xl:text-[12rem] font-bold text-gray-800 tracking-tight">
              Welcome
            </h1>
            <div className="relative">
              <h2 className="text-4xl sm:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-2 text-gray-800">
                I'm Andreas Høgh
              </h2>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg sm:text-xl xl:text-2xl 2xl:text-3xl text-[#464e64] max-w-[900px] 2xl:max-w-[1200px] mx-auto mb-12 2xl:mb-16"
          >
            Currently, I'm focused on building responsive web applications,
            while I'm looking for a company to kickstart my career as a software
            developer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center gap-6 2xl:gap-8"
          >
            <Link
              to="work"
              smooth={true}
              duration={500}
              className="px-8 py-3 xl:px-12 xl:py-4 2xl:px-16 2xl:py-6 2xl:text-2xl bg-gray-800 text-white rounded-full 
                         hover:bg-opacity-90 transition-all duration-300 
                         transform hover:scale-105 cursor-pointer"
            >
              View My Work
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="px-8 py-3 xl:px-12 xl:py-4 2xl:px-16 2xl:py-6 2xl:text-2xl border-2 border-gray-800 text-gray-800 
                         rounded-full transition-all duration-300 
                         transform hover:scale-105 cursor-pointer"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;

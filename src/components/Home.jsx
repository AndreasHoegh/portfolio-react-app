import React, { useRef, useState } from "react";
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
        <div className="relative z-[2] max-w-[1000px] px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="mb-4 text-6xl sm:text-8xl font-bold text-gray-800">
              Welcome
            </h1>
            <div className="relative">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-[2px] bg-gray-800 absolute bottom-0 left-0"
              />
              <h2 className="text-4xl sm:text-6xl font-bold mb-2 text-gray-800">
                I'm Andreas Høgh
              </h2>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg sm:text-xl text-[#464e64] max-w-[700px] mx-auto mb-8"
          >
            Currently, I'm focused on building responsive web applications,
            while I'm looking for a company to kickstart my career as a software
            developer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center gap-4"
          >
            <Link
              to="work"
              smooth={true}
              duration={500}
              className="px-8 py-3 bg-gray-800 text-white rounded-full 
                         hover:bg-opacity-90 transition-all duration-300 
                         transform hover:scale-105 cursor-pointer"
            >
              View My Work
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="px-8 py-3 border-2 border-gray-800 text-gray-800 
                         rounded-full  
                         transition-all duration-300 transform hover:scale-105 cursor-pointer"
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

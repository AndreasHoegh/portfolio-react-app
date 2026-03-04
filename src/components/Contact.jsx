import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-gray-800 text-gray-300 py-20"
    >
      <div className="max-w-[1400px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="max-w-[1200px] mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="pb-12"
          >
            <p className="text-4xl font-bold inline border-b-4 border-gray-600">
              Contact
            </p>
            <p className="py-6 text-gray-400">Get in touch with me</p>
          </motion.div>

          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col gap-10 max-w-[600px] w-full"
            >
              <div>
                <h3 className="text-3xl font-bold mb-4">Let's Connect</h3>
                <p className="text-gray-400 leading-relaxed">
                  I'm currently looking for new opportunities. Whether you have
                  a question or just want to say hi, I'll try my best to get
                  back to you!
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href="mailto:Ahoegh2602@gmail.com"
                  className="flex items-center justify-center gap-4 p-5 bg-gray-700 rounded-2xl hover:bg-gray-600 transition-all duration-300 hover:scale-[1.02] shadow-md"
                >
                  <HiMail size={24} />
                  <span className="text-lg">Ahoegh2602@gmail.com</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/andreashogh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-4 p-5 bg-gray-700 rounded-2xl hover:bg-gray-600 transition-all duration-300 hover:scale-[1.02] shadow-md"
                >
                  <FaLinkedin size={24} />
                  <span className="text-lg">LinkedIn Profile</span>
                </a>

                <a
                  href="https://github.com/AndreasHoegh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-4 p-5 bg-gray-700 rounded-2xl hover:bg-gray-600 transition-all duration-300 hover:scale-[1.02] shadow-md"
                >
                  <FaGithub size={24} />
                  <span className="text-lg">GitHub Profile</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-gray-800 text-gray-300 py-16"
    >
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="pb-8"
        >
          <p className="text-4xl font-bold inline border-b-4 border-gray-600">
            Contact
          </p>
          <p className="py-6">Get in touch with me</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            method="POST"
            action="https://getform.io/f/YOUR-FORM-ID"
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-customPurple"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-customPurple"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Message"
              className="p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-customPurple resize-none"
            ></textarea>
            <button className="text-white border-2 hover:bg-customPurple hover:border-customPurple px-6 py-3 my-2 flex items-center justify-center rounded-lg duration-300 group">
              Send Message
              <span className="group-hover:rotate-90 duration-300">
                <HiMail className="ml-3" />
              </span>
            </button>
          </motion.form>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center gap-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <p className="text-gray-400 mb-6">
                I'm currently looking for new opportunities. Whether you have a
                question or just want to say hi, I'll try my best to get back to
                you!
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:Ahoegh2602@gmail.com"
                className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300"
              >
                <HiMail size={24} className="text-gray-300" />
                <span>Ahoegh2602@gmail.com</span>
              </a>

              <a
                href="https://www.linkedin.com/in/andreashogh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300"
              >
                <FaLinkedin size={24} className="text-gray-300" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href="https://github.com/AndreasHoegh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300"
              >
                <FaGithub size={24} className="text-gray-300" />
                <span>GitHub Profile</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

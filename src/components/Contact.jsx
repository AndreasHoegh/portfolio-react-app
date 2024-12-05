import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full md:h-screen min-h-[1024px] bg-stone-100 flex justify-center items-center pt-16 px-8"
    >
      <form
        method="POST"
        action="https://getform.io/f/pbnvnokb"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-customPurple">
            Contact
          </p>
          <p className=" py-4">
            {" "}
            Submit the form below or write me an email - ahoegh2602@gmail.com
          </p>
        </div>
        <input
          className="bg-black p-2 text-white"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-black text-white"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-black p-2 text-white"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-black border-2 border-black hover:bg-customPurple px-4 py-3 my-8 mx-auto flex items-center">
          Let's collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;

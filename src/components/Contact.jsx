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
          className="  border-2 border-black p-1"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4  border-2 border-black p-1"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className=" border-2 border-black p-1"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-black border-2 border-black hover:bg-customPurple px-4 py-3 my-8 mx-auto flex items-center">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;

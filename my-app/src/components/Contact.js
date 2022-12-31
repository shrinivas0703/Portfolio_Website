import React, { useState } from "react";

const FORM_ENDPOINT = ""; // TODO - fill on the later step

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <section id="contact" className="mt-6 md:mt-12">
        <div className="items-center text-center flex flex-col">
            <br className="sm:hidden md:block"></br>
            <br className="sm:hidden md:block"></br>
            <br className="sm:hidden md:block"></br>
            <br className="sm:hidden md:block"></br>
            <div className="text-2xl">Thank you for reaching out!</div>
            <div className="text-md mt-2">I will get back to you soon.</div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact">
        <br className="sm:hidden md:block"></br>
        <br className="sm:hidden md:block"></br>
        <br className="sm:hidden md:block"></br>
        <br className="sm:hidden md:block"></br>
        <div className="container mt-6 md:mt-12 mx-auto items-center">
        <div className="items-center flex flex-col mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
            </svg>
            <div className="mt-5 text-gray-300 text-3xl text-center mb-5">
                Contact Me
            </div>
        </div>
        <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div className="mb-3 pt-0 shadow-2xl">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="px-3 py-3 placeholder-gray-400 text-gray-300 relative bg-gray-600 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0 shadow-2xl">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="px-3 py-3 placeholder-gray-400 text-gray-300 relative bg-gray-600 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0 shadow-2xl">
        <input
          type="phone number"
          placeholder="Phone Number (Optional)"
          name="phone number"
          className="px-3 py-3 placeholder-gray-400 text-gray-300 relative bg-gray-600 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
        />
      </div>
      <div className="mb-3 pt-0 shadow-2xl">
        <textarea
          placeholder="Your message"
          name="message"
          className="px-3 py-3 placeholder-gray-400 text-gray-300 relative bg-gray-600 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0 shadow-2xl">
        <button
          className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
        >
          Send a message
        </button>
      </div>
    </form>
    </div>
    </section>
  );
};

export default Contact;
"use client";

import React, { useRef } from "react";
import "animate.css";
import emailjs from "@emailjs/browser";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_50kkxqo", "template_9k4swg8", form.current, {
        publicKey: "AjvxKixLiV2IdLdxX",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Failed to send message.");
        }
      );
  };
  return (
    <div className="pt-20 px-5 md:pt-32 md:px-10 lg:pt-36 pb-[307px] md:pb-[535px] xl:pb-[144px] lg:px-40 xl:px-60 flex gap-5 lg:gap-10 bg-[#111111] bg-opacity-95">
      <div>
        <Toaster toastOptions={{ duration: 6000 }} />
      </div>
      <div className="w-1/2 flex flex-col gap-2 lg:gap-5 justify-center">
        <h3 className="text-3xl md:text-5xl xl:text-5xl text-white">
          Let's chat.
        </h3>
        <h3 className="text-3xl md:text-5xl xl:text-5xl text-white">
          Tell me about your<br></br> project.
        </h3>
        <h5 className="text-white mt-5">Let's create something together🤘🏻</h5>

        <div className="flex gap-5 mt-10">
          <a
            href="https://github.com/nitika-jain04?tab=repositories"
            target="_blank"
          >
            <FaGithub
              size={25}
              className="text-gray-200 hover:scale-105 transition-transform duration-200 ease-in hover:shadow-md hover:shadow-gray-200"
            />
          </a>
          <a href="https://www.linkedin.com/in/nitika-jain04/" target="_blank">
            <FaLinkedin
              size={25}
              className="text-gray-200 hover:scale-105 transition-transform duration-200 ease-in hover:shadow-md hover:shadow-gray-200"
            />
          </a>
        </div>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="px-5 py-9 w-1/2 flex flex-col gap-5 h-full bg-white drop-shadow-xl shadow-lg rounded-md shadow-gray-500 animate__animated animate__tada animate__slower"
      >
        <h2 className="text-xl">Send me a message🚀</h2>
        <input
          type="text"
          required
          name="sender_name"
          placeholder="Full name*"
          className="border-2 border-gray-400 px-5 py-2 placeholder:text-gray-500 focus:border-gray-800 focus:border-2 focus:outline-none transition-all duration-500 rounded-lg"
        />
        <input
          type="email"
          required
          name="sender_email"
          placeholder="Email address*"
          className="border-2 border-gray-400 px-5 py-2 placeholder:text-gray-500 focus:border-gray-800 focus:border-2 focus:outline-none transition-all duration-500 rounded-lg"
        />
        <textarea
          name="message"
          required
          cols="30"
          rows="5"
          placeholder="Your message*"
          className="border-2 border-gray-400 px-5 py-2 placeholder:text-gray-500 focus:border-gray-800 focus:border-2 focus:outline-none transition-all duration-500 rounded-lg"
        ></textarea>
        <input
          type="submit"
          value="Send Message"
          className="bg-[#111111] text-white py-2 rounded-md outline-slate-900 bg-opacity-95"
        />
      </form>
    </div>
  );
}

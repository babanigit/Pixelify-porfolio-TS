"use client";

import Image from "next/image";
import meImg from "@/assets/png/pngegg.png";
import iconImg from "@/assets/png/star.png";
import SocialLinks from "@/components/SocialLinks";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const ContactMe = () => {
  const resumeLabel = "<Resume/>";
  const sendLabel = "<Send/>";
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_zq23cub_bab", // Your Service ID
        "template_j2prnxo",     // Your Template ID
        form.current,
        "lXAwRsELGYP-raRkV"          // Your Public Key (not secret key)
      )
      .then(
        (result: { text: any; }) => {
          alert("Email sent successfully!");
          console.log(result.text);
          form.current?.reset();
        },
        (error: { text: any; }) => {
          alert("Something went wrong. Try again!");
          console.error(error.text);
        }
      );
  };

  return (
    <div className="min-h-screen w-full grid grid-cols-1 md:grid-cols-3 place-items-center p-3 bg-gray-50 gap-6">
      {/* Contact Form Section */}
      <div className="col-span-2 w-full h-auto border-2 border-purple-500/50 rounded-xl p-6 grid gap-6 bg-white shadow-md max-w-2xl mx-auto">
        {/* Title */}
        <div className="flex items-center justify-center gap-4 text-3xl font-semibold">
          <span>Contact</span>
          <Image className="w-16" src={iconImg} alt="icon" width={64} height={64} loading="lazy" />
        </div>

        {/* Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="grid gap-4 w-full max-w-xl mx-auto"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full px-4 py-2 h-28 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button
            type="submit"
            className="w-fit px-6 py-2 border border-purple-400 text-purple-700 font-semibold rounded-md hover:bg-purple-100 transition"
          >
            {sendLabel}
          </button>
        </form>

        {/* Social Links */}
        <div className="flex justify-center w-full max-w-xl mx-auto">
          <SocialLinks />
        </div>
      </div>

      {/* Profile Image Section */}
      <div className="h-full w-full hidden md:flex justify-center items-center bg-purple-400/50 rounded-full p-6 max-w-xs mx-auto">
        <Image className="rounded-full" src={meImg} alt="profile img" width={156} height={156} />
      </div>
    </div>
  );
};

export default ContactMe;

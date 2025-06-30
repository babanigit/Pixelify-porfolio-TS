"use client";

import Image from "next/image";

import meImg from "@/assets/png/pngegg.png";
import iconImg from "@/assets/png/star.png";
import SocialLinks from "@/components/SocialLinks";

const ContactMe = () => {
  const resumeLabel = "<Resume/>";
  const sendLabel = "<Send/>";

  return (
    <div className="min-h-screen w-full grid grid-cols-3 place-items-center p-3 bg-gray-50 gap-3">
      {/* Contact Form Section */}
      <div className="col-span-2 w-full h-auto border-4 border-purple-300 rounded-xl p-6 gap-3 grid bg-white shadow-md">
        {/* Title */}
        <div className="flex items-center justify-center gap-4 text-3xl font-semibold">
          <span>Contact</span>
          <Image
            className="w-16"
            src={iconImg}
            alt="icon"
            width={64}
            height={64}
          />
        </div>

        {/* Form */}
        <form
          action=""
          className="grid gap-4 w-full max-w-xl mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
            // TODO: Handle form submission
            alert("Message sent (not actually handled)");
          }}
        >
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-2 h-28 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
          <button
            type="submit"
            className="w-fit px-6 py-2 border border-purple-400 text-purple-700 font-semibold rounded-md hover:bg-purple-100 transition"
          >
            {sendLabel}
          </button>
        </form>

        {/* Social Links */}
        <div className="flex justify-center">
          <SocialLinks />
        </div>
      </div>

      {/* Profile Image Section */}
      <div className="h-full w-full flex justify-center items-center bg-purple-400/50 rounded-full p-6">
        <Image
          className="rounded-full"
          src={meImg}
          alt="profile img"
          width={156}
          height={156}
        />
      </div>
    </div>
  );
};

export default ContactMe;

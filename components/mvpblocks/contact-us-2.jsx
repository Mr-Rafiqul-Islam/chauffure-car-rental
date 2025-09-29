"use client";
import React, { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Send } from "lucide-react"; // This is fine to keep
import Link from "next/link";
import { toast } from "sonner";

export default function ContactUs() {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
    errors: {},
    submitting: false,
    submitted: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState((prevState) => ({ ...prevState, submitting: true }));

    // Simulate submission (e.g., API call)
    setTimeout(() => {
      console.log("Form submitted:", {
        name: state.name,
        email: state.email,
        message: state.message,
      });

      // Clear form after submit
      setState({
        name: "",
        email: "",
        message: "",
        errors: {},
        submitting: false,
        submitted: true,
      });

      // Notify user
      toast.success("Message sent successfully!");
    }, 1000);
  };

  return (
    <section className="w-full max-w-screen-md px-2 mx-auto py-5 xl:py-10">
      <h2 className="mt-4 mb-5 bg-gradient-to-br from-gray-300 via-blue-300 to-gray-700 bg-clip-text text-center text-4xl font-bold text-transparent md:text-6xl">
        Let&apos;s Get in Touch
      </h2>
      <p className="text-muted-ivory mb-6 text-center">
        Fill out the form below and we&apos;ll get back to you as soon as possible.
      </p>

      <div
        className="bg-opacity-10 mx-auto mb-6 grid w-full items-start gap-12 rounded-lg border bg-white px-4 pt-10 pb-6 shadow shadow-slate-800 md:grid-cols-2 lg:px-12"
        style={{
          backgroundImage:
            "radial-gradient(164.75% 100% at 50% 0,#272f3c 0,#0b1224 48.73%)",
        }}
      >
        {/* FORM */}
        <form className="space-y-8 text-slate-300" onSubmit={handleSubmit}>
          <div className="space-y-4 text-lg">
            <label htmlFor="name" />
            Name
            <input
              id="name"
              type="text"
              required
              name="name"
              value={state.name}
              onChange={handleChange}
              className="bg-background flex h-10 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm shadow-inner shadow-slate-800 outline-none hover:border-slate-600 hover:transition-all hover:outline-none focus:border-slate-500 focus:outline-none"
              placeholder="Enter your name"
            />
          </div>

          <div className="space-y-4 text-lg">
            <label htmlFor="email" /> Email
            <input
              id="email"
              type="email"
              required
              name="email"
              value={state.email}
              onChange={handleChange}
              className="hover:transition-al bg-background placeholder:text-muted-foreground flex h-10 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm shadow-inner shadow-slate-800 outline-none file:text-sm file:font-medium hover:border-slate-400 hover:outline-none focus:border-slate-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Enter your email"
            />
          </div>

          <div className="space-y-4 text-lg">
            <label htmlFor="message" className="text-lg" />
            Message
            <textarea
              id="message"
              name="message"
              required
              value={state.message}
              onChange={handleChange}
              placeholder="Enter your message"
              className="bg-background ring-offset-background placeholder:text-muted-foreground mb-5 flex min-h-[100px] w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white shadow-inner shadow-slate-800 outline-none hover:border-slate-400 hover:transition-all hover:outline-none focus:border-slate-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-slate-800 to-slate-700 py-2 text-center font-medium text-white shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] transition-all duration-300 ease-in-out hover:from-slate-700 hover:to-slate-800 hover:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          >
            {state.submitting ? "Sending..." : "Send"}
            <Send className="mx-2 inline h-4" />
          </button>
        </form>

        {/* SOCIAL INFO */}
        <div>
          <h3 className="mb-10 text-2xl font-semibold text-slate-300">
            Connect with Us
          </h3>

          <div className="mb-12 flex gap-8">
            <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-600 shadow-inner shadow-gray-800 hover:shadow-md hover:shadow-slate-500 hover:transition hover:duration-300 hover:ease-in-out">
              <FaEnvelope className="h-5 w-5 text-white" />
            </Link>
            <div className="text-md text-slate-300">
              <p>Email to us at</p>
              <p>mr.rafiqulthedev@gmail.com</p>
            </div>
          </div>

          <div className="mb-12 flex gap-8">
            <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-600 shadow-inner shadow-gray-800 hover:shadow-md hover:shadow-slate-500 hover:transition hover:duration-300 hover:ease-in-out">
              <FaPhone className="h-5 w-5 text-white" />
            </Link>
            <div className="text-md text-slate-300">
              <p>Call us at</p>
              <p>XXXXX XXXXX</p>
            </div>
          </div>

          <div className="mb-12 flex gap-8">
            <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-600 px-2 shadow-inner shadow-gray-800 hover:shadow-md hover:shadow-slate-500 hover:transition hover:duration-300 hover:ease-in-out">
              <FaMapMarkerAlt className="h-5 w-5 text-white" />
            </Link>
            <div className="text-md text-slate-300">
              <p>Location at</p>
              <p>Techno Main Salt Lake, Sector-V, Kolkata-700091</p>
            </div>
          </div>

          <div className="flex space-x-12 py-7">
            <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-600 bg-gray-800 hover:shadow-md hover:shadow-slate-500 hover:transition hover:duration-300 hover:ease-in-out">
              <FaTwitter className="h-5 w-5 text-white" />
            </Link>
            <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-600 bg-gray-800 hover:shadow-md hover:shadow-slate-500 hover:transition hover:duration-300 hover:ease-in-out">
              <FaFacebook className="h-5 w-5 text-white" />
            </Link>
            <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-gray-800 hover:shadow-md hover:shadow-slate-500 hover:transition hover:duration-300 hover:ease-in-out">
              <FaInstagram className="h-5 w-5 text-white" />
            </Link>
            <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-gray-800 hover:shadow-md hover:shadow-slate-500 hover:transition hover:duration-300 hover:ease-in-out">
              <FaLinkedin className="h-5 w-5 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

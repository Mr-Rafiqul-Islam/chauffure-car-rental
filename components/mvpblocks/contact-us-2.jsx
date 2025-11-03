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
import { Send } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { submitContact } from "@/lib/submitContact";

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
    // clear a field-specific error when the user edits it
    setState((prev) => ({
      ...prev,
      [name]: value,
      errors: {
        ...prev.errors,
        [name]: undefined,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // basic client-side validation (optional)
    const errors = {};
    if (!state.name.trim()) errors.name = "Name is required";
    if (!state.email.trim()) errors.email = "Email is required";
    if (!state.message.trim()) errors.message = "Message is required";

    if (Object.keys(errors).length) {
      setState((prev) => ({ ...prev, errors }));
      return;
    }

    setState((prev) => ({ ...prev, submitting: true, errors: {} }));

    const data = {
      name: state.name,
      email: state.email,
      message: state.message,
    };

    try {
      const res = await submitContact(data);

      // If your API returns validation errors in a specific format, handle them:
      // e.g. { errors: { email: "invalid email" } }
      if (res && res.errors && typeof res.errors === "object") {
        setState((prev) => ({
          ...prev,
          submitting: false,
          errors: res.errors,
        }));
        toast.error("Please correct the highlighted fields.");
        return;
      }

      // success
      setState({
        name: "",
        email: "",
        message: "",
        errors: {},
        submitting: false,
        submitted: true,
      });
      console.log(res);
      
      toast.success(res?.message || "Message sent successfully!");
    } catch (error) {
      console.error("Submit contact error:", error);
      setState((prev) => ({ ...prev, submitting: false }));
      toast.error(error?.message || "Failed to send message. Please try again.");
    }
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
            {state.errors?.name && (
              <p className="mt-1 text-sm text-rose-400">{state.errors.name}</p>
            )}
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
            {state.errors?.email && (
              <p className="mt-1 text-sm text-rose-400">{state.errors.email}</p>
            )}
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
            {state.errors?.message && (
              <p className="mt-1 text-sm text-rose-400">{state.errors.message}</p>
            )}
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
            <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-600 shadow-inner shadow-gray-800 hover:shadow-md hover:shadow-slate-500 hover:transition hover:duration-300 hover:ease-in-out flex-shrink-0">
              <FaEnvelope className="h-5 w-5 text-white" />
            </Link>
            <div className="text-md text-slate-300">
              <p>Email to us at</p>
              <p>info@luxurychauffeurcar.com.au</p>
            </div>
          </div>

          <div className="mb-12 flex gap-8">
            <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-600 shadow-inner shadow-gray-800 hover:shadow-md hover:shadow-slate-500 hover:transition hover:duration-300 hover:ease-in-out">
              <FaPhone className="h-5 w-5 text-white" />
            </Link>
            <div className="text-md text-slate-300">
              <p>Call us at</p>
              <a href="tel:+61469730976">+61 469 730 976</a>
            </div>
          </div>

          <div className="mb-12 flex gap-8">
            <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-600 px-2 shadow-inner shadow-gray-800 hover:shadow-md hover:shadow-slate-500 hover:transition hover:duration-300 hover:ease-in-out">
              <FaMapMarkerAlt className="h-5 w-5 text-white" />
            </Link>
            <div className="text-md text-slate-300">
              <p>Location at</p>
              <p>Address: 20 Aintree dr, Wollert-3750</p>
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

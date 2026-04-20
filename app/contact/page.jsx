"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [focused, setFocused] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <main className="bg-[#f3f4f6]">

      {/* ✅ HEADER */}
      <Header />

      <section className="px-6 py-10">

        {/* 🔥 TITLE */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-semibold">Contact Us</h1>
          <p className="text-gray-500 mt-2">
            We'd love to hear from you. Reach out anytime.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* 🔵 LEFT SIDE */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>

            <p className="text-gray-600 mb-6">
              Have questions about our products or services? Feel free to contact us.
            </p>

            <div className="space-y-5 text-gray-700">

              <div className="flex items-center gap-3">
                <LocationOnIcon className="text-[#1700de]" />
                <p><strong>Hyderabad, India</strong></p>
              </div>

              <div className="flex items-center gap-3">
                <PhoneIcon className="text-[#1700de]" />
                <p>+91 98765 43210</p>
              </div>

              <div className="flex items-center gap-3">
                <EmailIcon className="text-[#1700de]" />
                <p>support@totalsafez.com</p>
              </div>

            </div>
          </div>

          {/* 🟣 RIGHT SIDE FORM */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">

            <div className="space-y-6">

              {/* NAME */}
              <div className="relative">
                <PersonIcon className="absolute left-3 top-4 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused("")}
                  onChange={handleChange}
                  className="w-full border rounded-md pl-10 pr-4 pt-5 pb-2 outline-none focus:border-[#1700de]"
                />
                <label
                  className={`absolute left-10 transition-all text-gray-400
                  ${focused === "name" || form.name
                    ? "top-1 text-xs text-[#1700de]"
                    : "top-4 text-sm"
                  }`}
                >
                  Your Name
                </label>
              </div>

              {/* EMAIL */}
              <div className="relative">
                <EmailIcon className="absolute left-3 top-4 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused("")}
                  onChange={handleChange}
                  className="w-full border rounded-md pl-10 pr-4 pt-5 pb-2 outline-none focus:border-[#1700de]"
                />
                <label
                  className={`absolute left-10 transition-all text-gray-400
                  ${focused === "email" || form.email
                    ? "top-1 text-xs text-[#1700de]"
                    : "top-4 text-sm"
                  }`}
                >
                  Your Email
                </label>
              </div>

              {/* MESSAGE */}
              <div className="relative">
                <MessageIcon className="absolute left-3 top-4 text-gray-400" />
                <textarea
                  name="message"
                  rows="4"
                  value={form.message}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused("")}
                  onChange={handleChange}
                  className="w-full border rounded-md pl-10 pr-4 pt-5 pb-2 outline-none focus:border-[#1700de]"
                />
                <label
                  className={`absolute left-10 transition-all text-gray-400
                  ${focused === "message" || form.message
                    ? "top-1 text-xs text-[#1700de]"
                    : "top-4 text-sm"
                  }`}
                >
                  Your Message
                </label>
              </div>

              {/* BUTTON */}
              <button
                className="w-full py-3 rounded-md text-white font-medium shadow-md hover:shadow-lg transition"
                style={{ backgroundColor: "#1700de" }}
              >
                Send Message
              </button>

            </div>
          </div>
        </div>

        {/* 🌍 GOOGLE MAP */}
        <div className="max-w-6xl mx-auto mt-14">
          <div className="rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://maps.google.com/maps?q=hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[350px] border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </section>

      {/* ✅ FOOTER */}
      <Footer />

    </main>
  );
}
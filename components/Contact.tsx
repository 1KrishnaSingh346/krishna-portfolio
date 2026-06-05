"use client";

import React, { useState, useEffect } from "react";
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from "react-icons/fi";
import { useSendMail } from "@/hooks/useSendMail";

export default function ContactSection() {
  const { sendMail } = useSendMail();
  const [isSending, setIsSending] = useState(false);
  const [responseStatus, setResponseStatus] = useState<{ message: string; isSuccess: boolean | null }>({
    message: "",
    isSuccess: null,
  });

  const socialNodes = [
    { name: "GitHub", link: "https://github.com/1KrishnaSingh346", handle: "github.com/1KrishnaSingh346", icon: FiGithub },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/krishna-singh-554939288", handle: "linkedin.com/in/krishna", icon: FiLinkedin },
    { name: "Email", link: "mailto:krishn03111@gmail.com", handle: "krishn03111@gmail.com", icon: FiMail },
  ];

  const servicesOptions = [
    "Full-Stack Development",
    "Progressive Web Apps",
    "Backend & API Development",
    "UI Implementation",
    "Technical Consulting",
    "Student Mentorship",
    "Other Collaboration",
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  // Automatically clear response message after 5 seconds
  useEffect(() => {
    if (responseStatus.message) {
      const timer = setTimeout(() => {
        setResponseStatus({ message: "", isSuccess: null });
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [responseStatus.message]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.service || !formData.message.trim()) {
      setResponseStatus({ message: "All form fields are verified mandatory.", isSuccess: false });
      return;
    }

    try {
      setIsSending(true);
      setResponseStatus({ message: "", isSuccess: null });
      
      const response = await sendMail(formData);
      
      if (response && response.success) {
        setResponseStatus({ message: response.message || "Message Sent successfully.", isSuccess: true });
        setFormData({ name: "", email: "", service: "", message: "" });
      } else {
        setResponseStatus({ message: response?.message || "Something went Wrong.", isSuccess: false });
      }
    } catch (error) {
      setResponseStatus({ message: "Network connection breakdown. Something went wrong.", isSuccess: false });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full bg-transparent text-white select-none font-sans flex items-center py-16 md:py-24 border-t border-white/5 overflow-hidden"
    >
      {/* Background Ambience Subtle Lines */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-5">
        <div className="max-w-7xl mx-auto h-full w-full px-6 sm:px-10 grid grid-cols-2 md:grid-cols-12 gap-6">
          <div className="md:col-span-6 border-r border-white/10 h-full" />
          <div className="md:col-span-6 h-full" />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* ─── LEFT PANEL: CORE HEADLINE & SOCIAL LINKS ─── */}
        <div className="lg:col-span-5 flex flex-col justify-center text-left w-full">
          <h2 className="text-5xl sm:text-7xl font-black tracking-tighter uppercase leading-[0.8] mb-6">
            LET'S BUILD <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-white/80 to-white/20">
              SOMETHING GREAT.
            </span>
          </h2>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md font-light mb-10">
            Have a production pipeline in mind, a structural system requirement, or just want to establish sync? Drop a message.
          </p>

          {/* Clean Interactive Social Grid Rows */}
          <div className="space-y-3 w-full max-w-sm">
            {socialNodes.map((node, idx) => {
              const SocialIcon = node.icon;
              return (
                <a
                  key={idx}
                  href={node.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full p-4 border border-white/5 bg-white/1 hover:border-[#00f2fe]/40 rounded-xl transition-all duration-300 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/2 border border-white/10 text-gray-500 group-hover:text-[#00f2fe] group-hover:border-[#00f2fe]/20 group-hover:bg-[#00f2fe]/5 transition-all duration-300">
                      <SocialIcon size={14} />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-gray-500 transition-colors group-hover:text-gray-400">
                        {node.name}
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-white truncate max-w-45 sm:max-w-none mt-0.5">
                        {node.handle}
                      </span>
                    </div>
                  </div>
                  <span className="text-gray-600 font-mono text-sm group-hover:text-[#00f2fe] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200">
                    &rarr;
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        {/* ─── RIGHT PANEL: CLEAN SPACIOUS FORM SYSTEM ─── */}
        <div className="lg:col-span-7 w-full border border-white/5 bg-white/1 p-6 sm:p-8 md:p-10 rounded-2xl relative">
          <form onSubmit={handleSubmit} className="space-y-6 w-full">
            
            {/* Input Node: Identity Name */}
            <div className="flex flex-col gap-2 w-full">
              <label className="font-mono text-[10px] uppercase tracking-widest text-gray-400">
                Identification Name
              </label>
              <input
                type="text"
                required
                disabled={isSending}
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white/2 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 outline-none focus:border-[#00f2fe]/50 focus:bg-white/4 transition-all duration-200 font-sans disabled:opacity-50"
              />
            </div>

            {/* Input Node: Electronic Mail */}
            <div className="flex flex-col gap-2 w-full">
              <label className="font-mono text-[10px] uppercase tracking-widest text-gray-400">
                Email Address
              </label>
              <input
                type="email"
                required
                disabled={isSending}
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white/2 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 outline-none focus:border-[#00f2fe]/50 focus:bg-white/4 transition-all duration-200 font-sans disabled:opacity-50"
              />
            </div>

            {/* Input Node: Capability Context Selector Dropdown */}
            <div className="flex flex-col gap-2 w-full">
              <label className="font-mono text-[10px] uppercase tracking-widest text-gray-400">
                Service Context
              </label>
              <div className="relative w-full">
                <select
                  required
                  disabled={isSending}
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-white/2 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white outline-none focus:border-[#00f2fe]/50 focus:bg-white/4 transition-all duration-200 appearance-none font-sans cursor-pointer disabled:opacity-50"
                >
                  <option value="" disabled className="bg-[#0a0a0a] text-gray-600">Select Required Capability</option>
                  {servicesOptions.map((option, index) => (
                    <option key={index} value={option} className="bg-[#0a0a0a] text-white">
                      {option}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500 font-mono text-xs">
                  &darr;
                </div>
              </div>
            </div>

            {/* Input Node: Message Narrative Context */}
            <div className="flex flex-col gap-2 w-full">
              <label className="font-mono text-[10px] uppercase tracking-widest text-gray-400">
                Project Narrative
              </label>
              <textarea
                required
                rows={4}
                disabled={isSending}
                placeholder="Describe the scope, objectives, or requirements..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white/2 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 outline-none focus:border-[#00f2fe]/50 focus:bg-white/4 transition-all duration-200 resize-none font-sans leading-relaxed disabled:opacity-50"
              />
            </div>

            {/* Centered Submit State Engine Gateway with Spinner Animation */}
            <div className="w-full flex flex-col items-center gap-4 pt-2">
              <button
                type="submit"
                disabled={isSending}
                className="w-full inline-flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-wider text-gray-400 border border-white/10 bg-white/3 py-3.5 rounded-xl hover:border-[#00f2fe] hover:text-[#00f2fe] hover:bg-[#00f2fe]/5 transition-all duration-200 group/btn cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {isSending ? (
                  <div className="flex items-center gap-2.5">
                    {/* SVG Clean Micro Spinner Loader */}
                    <svg className="animate-spin h-3.5 w-3.5 text-[#00f2fe]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span className="text-[#00f2fe]">Sending...</span>
                  </div>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FiArrowRight size={13} className="transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </>
                )}
              </button>
              
              {responseStatus.message && (
                <div
                  className={`w-full text-center font-mono text-xs py-1 transition-all duration-300 transform translate-y-0 opacity-100 ${
                    responseStatus.isSuccess === true
                      ? "text-emerald-400"
                      : "text-rose-400"
                  }`}
                >
                  {responseStatus.message}
                </div>
              )}
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
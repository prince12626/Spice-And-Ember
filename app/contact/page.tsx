"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-orange-50/40 text-stone-900 font-serif">
      {/* Header */}
      <header className="bg-white border-b border-orange-100 text-center px-4 py-10">
        <h1 className="text-5xl serif font-bold tracking-widest text-stone-900 mb-1">
          Contact Us
        </h1>
        <p className="text-xs tracking-[4px] uppercase text-stone-400 font-sans">
          We'd Love to Hear From You
        </p>
        <div className="flex items-center justify-center gap-3 mt-4 max-w-xs mx-auto text-[#E85D04] text-xs">
          <span className="flex-1 h-px bg-linear-to-r from-transparent to-orange-200" />
          ✦ ◈ ✦
          <span className="flex-1 h-px bg-linear-to-l from-transparent to-orange-200" />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 py-12">
        {/* Contact Form Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-stone-900 mb-2">
              Send us a Message
            </h2>
            <div className="flex items-center gap-3 text-[#E85D04] text-xs mb-6">
              <span className="h-px w-12 bg-orange-200" />
              ✦
              <span className="h-px w-12 bg-orange-200" />
            </div>
          </div>

          {/* Success Message */}
          {submitted && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 font-sans text-sm">
              ✓ Thank you! We've received your message and will get back to you
              soon.
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field */}
            <div>
              <label className="block font-sans text-sm font-medium text-stone-900 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className={`w-full px-4 py-2.5 font-sans border rounded-xl bg-white text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#E85D04] transition-all ${
                  errors.name
                    ? "border-red-400 focus:ring-red-400"
                    : "border-orange-100 focus:border-transparent"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1 font-sans">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="block font-sans text-sm font-medium text-stone-900 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={`w-full px-4 py-2.5 font-sans border rounded-xl bg-white text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#E85D04] transition-all ${
                  errors.email
                    ? "border-red-400 focus:ring-red-400"
                    : "border-orange-100 focus:border-transparent"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1 font-sans">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone Field (Optional) */}
            <div>
              <label className="block font-sans text-sm font-medium text-stone-900 mb-2">
                Phone Number <span className="text-stone-400">(optional)</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 (11) 1234-5678"
                className="w-full px-4 py-2.5 font-sans border border-orange-100 rounded-xl bg-white text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#E85D04] focus:border-transparent transition-all"
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block font-sans text-sm font-medium text-stone-900 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your inquiry..."
                rows={5}
                className={`w-full px-4 py-2.5 font-sans border rounded-xl bg-white text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#E85D04] transition-all resize-none ${
                  errors.message
                    ? "border-red-400 focus:ring-red-400"
                    : "border-orange-100 focus:border-transparent"
                }`}
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1 font-sans">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#E85D04] text-white font-sans font-semibold py-3 rounded-full hover:bg-[#fe6906] transition-all duration-300 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 text-[#E85D04] text-xs my-12">
          <span className="flex-1 h-px bg-orange-100" />
          ✦ ◈ ✦
          <span className="flex-1 h-px bg-orange-100" />
        </div>

        {/* Info Cards Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-stone-900 mb-2">
              Get In Touch
            </h2>
            <div className="flex items-center gap-3 text-[#E85D04] text-xs mb-6">
              <span className="h-px w-12 bg-orange-200" />
              ✦
              <span className="h-px w-12 bg-orange-200" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Address Card */}
            <div className="bg-white border border-orange-100 rounded-2xl p-6 shadow-sm">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="text-lg font-bold text-stone-900 mb-3">Address</h3>
              <p className="font-sans text-stone-700 text-sm leading-relaxed">
                123 Heritage Street
                <br />
                Chandni Chowk, Delhi 110006
                <br />
                India
              </p>
            </div>

            {/* Hours Card */}
            <div className="bg-white border border-orange-100 rounded-2xl p-6 shadow-sm">
              <div className="text-3xl mb-3">🕐</div>
              <h3 className="text-lg font-bold text-stone-900 mb-3">Timings</h3>
              <div className="font-sans text-stone-700 text-sm space-y-2">
                <div>
                  <p className="font-semibold text-stone-900">Lunch</p>
                  <p>12:00 PM - 3:00 PM</p>
                </div>
                <div>
                  <p className="font-semibold text-stone-900">Dinner</p>
                  <p>7:00 PM - 11:00 PM</p>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-white border border-orange-100 rounded-2xl p-6 shadow-sm">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="text-lg font-bold text-stone-900 mb-3">Contact</h3>
              <div className="font-sans text-stone-700 text-sm space-y-3">
                <div>
                  <p className="text-xs font-semibold text-stone-400 uppercase tracking-wide mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+911145678900"
                    className="text-[#E85D04] font-semibold hover:underline"
                  >
                    +91 (11) 4567-8900
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold text-stone-400 uppercase tracking-wide mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:hello@havelirestaurant.com"
                    className="text-[#E85D04] font-semibold hover:underline"
                  >
                    hello@haveli.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 text-[#E85D04] text-xs my-12">
          <span className="flex-1 h-px bg-orange-100" />
          ✦ ◈ ✦
          <span className="flex-1 h-px bg-orange-100" />
        </div>

        {/* Google Maps Placeholder */}
        <section className="mb-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-stone-900 mb-2">
              Find Us On The Map
            </h2>
            <div className="flex items-center gap-3 text-[#E85D04] text-xs mb-6">
              <span className="h-px w-12 bg-orange-200" />
              ✦
              <span className="h-px w-12 bg-orange-200" />
            </div>
          </div>

          {/* Maps Container */}
          <div className="bg-white border border-orange-100 rounded-2xl overflow-hidden shadow-sm h-96">
            <iframe
              width="100%"
              height="100%"
              style={{ border: "none" }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5849435394936!2d77.23045592346928!3d28.64554827591755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd281cf28581%3A0x8e7406b40b55ba0!2sChandni%20Chowk%2C%20Delhi!5e0!3m2!1sen!2sin!4v1685970000000!5m2!1sen!2sin"
            ></iframe>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-orange-50/60 border border-orange-100 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-stone-900 mb-3">
            Questions About Our Menu?
          </h3>
          <p className="font-sans text-stone-700 mb-6">
            Explore our full menu or make a reservation for an unforgettable
            dining experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/menu"
              className="bg-white border border-orange-100 text-[#E85D04] px-8 py-2.5 rounded-full font-sans font-semibold hover:bg-orange-50 transition-colors"
            >
              View Menu
            </a>
            <button className="bg-[#E85D04] text-white px-8 py-2.5 rounded-full font-sans font-semibold hover:bg-[#fe6906] transition-colors">
              Reserve Table
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;

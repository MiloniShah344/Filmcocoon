import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube } from 'lucide-react';

const Contact = () => {

  const [status, setStatus] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    try {
      const res = await fetch("http://localhost:4001/send-contact-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });

      const data = await res.json();
      if (data.success) {
        // alert("✅ Message sent successfully!");
        setStatus("Message sent successfully!")
        e.target.reset();
      } else {
        // alert("❌ Failed to send message. Please try again.");
        setStatus("Failed to send message. Please try again.")
      }
    } catch (err) {
      // alert("❌ Server error. Please check backend connection.");
        setStatus("Server error. Please check backend connection.")
      console.error(err);
    }
  }

  return (
    <>
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-stone-50 via-orange-50 to-orange-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-300 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-stone-300 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Let's Collaborate</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 mt-2 mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-800">Touch</span>
          </h2>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            Let's collaborate on your next project and bring your vision to life
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-orange-800 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-stone-900 mb-2 text-lg">Email</h3>
                <a href="mailto:filmcocoon25@gmail.com" className="text-stone-600 hover:text-orange-600 transition-colors text-lg">
                  filmcocoon25@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="w-7 h-7 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-stone-900 mb-2 text-lg">Phone</h3>
                <a href="tel:+919033210387" className="text-stone-600 hover:text-orange-600 transition-colors text-lg">
                  +91 90332 10387
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <MapPin className="w-7 h-7 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-stone-900 mb-2 text-lg">Location</h3>
                <p className="text-stone-600 text-lg">Ahmedabad, Gujarat, India</p>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="font-semibold text-stone-900 mb-4 text-lg">Connect on Social Media</h3>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-gradient-to-br from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 rounded-full flex items-center justify-center transition-all transform hover:scale-110 shadow-lg hover:shadow-xl"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-7 h-7 text-white" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-gradient-to-br from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 rounded-full flex items-center justify-center transition-all transform hover:scale-110 shadow-lg hover:shadow-xl"
                  aria-label="Instagram"
                >
                  <Instagram className="w-7 h-7 text-white" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-gradient-to-br from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 rounded-full flex items-center justify-center transition-all transform hover:scale-110 shadow-lg hover:shadow-xl"
                  aria-label="YouTube"
                >
                  <Youtube className="w-7 h-7 text-white" />
                </a>
              </div>
            </div>
          </div><div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-stone-900 mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-stone-700 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border-2 border-stone-200 rounded-xl focus:border-orange-600 focus:outline-none transition-colors"
                  name="name"
                  placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-stone-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-3 border-2 border-stone-200 rounded-xl focus:border-orange-600 focus:outline-none transition-colors"
                  placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-stone-700 font-semibold mb-2">Phone (Optional)</label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-3 border-2 border-stone-200 rounded-xl focus:border-orange-600 focus:outline-none transition-colors"
                  placeholder="+91 9912129034" />
              </div>
              <div>
                <label className="block text-stone-700 font-semibold mb-2">Message</label>
                <textarea
                  rows="5"
                  name="message"
                  className="w-full px-4 py-3 border-2 border-stone-200 rounded-xl focus:border-orange-600 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..." />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-xl font-semibold hover:shadow-xl transition-all transform hover:scale-105 shadow-lg text-lg"
              >
                Send Message
              </button>

{status && (
            <p className="text-center mt-4 text-orange-700 font-semibold">{status}</p>
          )}

            </form>
          </div>
      </div>
    </div>
    </section >
    </>
  );
};

export default Contact;
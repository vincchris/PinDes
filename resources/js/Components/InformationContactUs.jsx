import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send(
        'service_l1r4jcv', // Ganti dengan Service ID Anda
        'template_gc4ahbr', // Ganti dengan Template ID Anda
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'IvmbXbq4_mfCQHeF6' // Ganti dengan Public Key Anda
      )
      .then(
        (result) => {
          alert('Pesan berhasil dikirim!');
          setFormData({ name: '', email: '', message: '' });
          setSending(false);
        },
        (error) => {
          alert('Terjadi kesalahan. Coba lagi nanti.');
          console.error('EmailJS error:', error);
          setSending(false);
        }
      );
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      {/* Left Side: Contact Form */}
      <div className="w-full md:w-1/2 p-8 bg-gray-100">
        <h1 className="text-3xl font-semibold text-center mb-6">Contact Us</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-gray-700">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message"
              rows="4"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
            disabled={sending}
          >
            {sending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      {/* Right Side: Google Map Embed */}
      <div className="w-full md:w-1/2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15832.635598122266!2d108.2135561!3d-7.222709549999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f4fc2a240c34b%3A0xc421883172bae95f!2sCihaurbeuti%2C%20Kec.%20Cihaurbeuti%2C%20Kabupaten%20Ciamis%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1733307579553!5m2!1sid!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;

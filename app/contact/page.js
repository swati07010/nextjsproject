export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-300 to-orange-400 text-gray-900 p-6">
      {/* Heading */}
      <h1 className="text-5xl font-bold mb-4">
        📞 Contact <span className="text-blue-600">Us</span>
      </h1>

      {/* Description */}
      <p className="text-lg text-center max-w-2xl mb-6">
        Have any questions? We'd love to hear from you! Fill out the form below
        or reach out through our social media.
      </p>

      {/* Contact Form */}
      <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Your Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Message
          </label>
          <textarea
            placeholder="Type your message..."
            rows="4"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all"
        >
          Send Message 🚀
        </button>
      </form>

      {/* Social Media Icons */}
      <div className="flex space-x-6 mt-6">
        <a href="#" className="text-xl hover:text-blue-700 transition-all">
          🌐 Website
        </a>
        <a href="#" className="text-xl hover:text-blue-700 transition-all">
          📧 Email
        </a>
        <a href="#" className="text-xl hover:text-blue-700 transition-all">
          📱 Call
        </a>
      </div>
    </div>
  );
}

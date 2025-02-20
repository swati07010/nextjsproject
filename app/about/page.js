export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 text-white p-6">
      {/* Heading with Animation */}
      <h1 className="text-5xl font-bold mb-4 animate-fade-in">
        About <span className="text-yellow-300">Us</span>
      </h1>

      {/* Description */}
      <p className="text-lg max-w-2xl text-center text-gray-200 mb-6">
        Welcome to our platform! We are dedicated to providing the best services
        to our clients. Our team works hard to create amazing digital
        experiences.
      </p>

      {/* Image Section */}
      <div className="flex items-center justify-center mt-6">
        <img
          src="https://source.unsplash.com/400x300/?team,work"
          alt="Team Work"
          className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Call to Action Button */}
      <a
        href="/contact"
        className="mt-6 px-6 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition-all"
      >
        Contact Us
      </a>
    </div>
  );
}

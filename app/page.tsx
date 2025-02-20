export default function Home({ Component, pageProps }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-4xl font-bold mb-4 animate-pulse">
        Welcome to Our Website
      </h1>
      <p className="text-lg opacity-90">
        Explore amazing features and content here.
      </p>
      <button className="mt-5 px-6 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition-all">
        Get Started
      </button>
    </div>
  );
}

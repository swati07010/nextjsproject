export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Build modern, responsive websites.",
    },
    {
      title: "App Development",
      description: "Create powerful mobile applications.",
    },
    {
      title: "UI/UX Design",
      description: "Design stunning and user-friendly interfaces.",
    },
    {
      title: "SEO Optimization",
      description: "Improve website rankings on search engines.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 text-white p-6">
      <h1 className="text-5xl font-extrabold mb-6 animate-fadeIn">
        Our Services
      </h1>
      <p className="text-lg opacity-90 text-center max-w-xl">
        We offer top-notch services to help you grow your business with
        cutting-edge technology.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-xl font-bold">{service.title}</h2>
            <p className="mt-2 text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>

      <button className="mt-8 px-6 py-3 bg-white text-green-600 font-semibold rounded-full shadow-md hover:bg-gray-200 transition-all">
        Get Started
      </button>
    </div>
  );
}

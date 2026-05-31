import {
  FaCode,
  FaHeadset,
  FaTools,
  FaBug,
  FaServer,
} from "react-icons/fa";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen pt-24 bg-gradient-to-r from-blue-900 via-blue-800 to-green-600 text-white flex items-center"
      >
        <div className="max-w-7xl mx-auto px-6">
          <p className="uppercase tracking-widest text-green-300 mb-4">
            FINTECH SOLUTIONS PROVIDER INC.
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 max-w-5xl">
            Transforming Businesses Through Technology
          </h1>

          <p className="text-xl md:text-2xl max-w-4xl mb-8">
            Software Development • IT Support • IT Maintenance •
            Troubleshooting • Technology Solutions
          </p>

          <div className="flex gap-4">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:scale-105 transition">
              Get Started
            </button>

            <button className="border border-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 bg-white px-6"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-8">
            About Fintech Solutions
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Fintech Solutions Provider Inc. delivers innovative technology
            services that empower businesses to grow faster, operate more
            efficiently, and adapt to the digital world. Our expertise spans
            software development, IT support, maintenance, troubleshooting,
            and enterprise technology solutions.
          </p>
        </div>
      </section>

      {/* Services Section */}
<section
  id="services"
  className="py-24 bg-gray-100 px-6"
>
  <div className="max-w-7xl mx-auto">
    <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">
      Our Services
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

      <div className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition text-center">
        <FaCode className="text-5xl text-blue-700 mx-auto mb-4" />
        <h3 className="font-bold text-xl mb-4">
          Software Development
        </h3>
        <p className="text-gray-600">
          Custom web applications, mobile apps, APIs, and enterprise systems.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition text-center">
        <FaHeadset className="text-5xl text-blue-700 mx-auto mb-4" />
        <h3 className="font-bold text-xl mb-4">
          IT Support
        </h3>
        <p className="text-gray-600">
          Reliable technical support and help desk services.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition text-center">
        <FaTools className="text-5xl text-blue-700 mx-auto mb-4" />
        <h3 className="font-bold text-xl mb-4">
          IT Maintenance
        </h3>
        <p className="text-gray-600">
          System updates, preventive maintenance, and monitoring.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition text-center">
        <FaBug className="text-5xl text-blue-700 mx-auto mb-4" />
        <h3 className="font-bold text-xl mb-4">
          Troubleshooting
        </h3>
        <p className="text-gray-600">
          Fast diagnosis and resolution of hardware and software issues.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition text-center">
        <FaServer className="text-5xl text-blue-700 mx-auto mb-4" />
        <h3 className="font-bold text-xl mb-4">
          Technology Solutions
        </h3>
        <p className="text-gray-600">
          Scalable business technology and digital transformation services.
        </p>
      </div>

    </div>
  </div>
</section>

{/* Statistics Section */}
<section className="py-20 bg-blue-950 text-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid md:grid-cols-4 gap-10 text-center">

      <div>
        <h3 className="text-5xl font-bold text-green-400">
          500+
        </h3>
        <p className="mt-3 text-lg">
          Projects Completed
        </p>
      </div>

      <div>
        <h3 className="text-5xl font-bold text-green-400">
          150+
        </h3>
        <p className="mt-3 text-lg">
          Clients Served
        </p>
      </div>

      <div>
        <h3 className="text-5xl font-bold text-green-400">
          24/7
        </h3>
        <p className="mt-3 text-lg">
          Technical Support
        </p>
      </div>

      <div>
        <h3 className="text-5xl font-bold text-green-400">
          99%
        </h3>
        <p className="mt-3 text-lg">
          Client Satisfaction
        </p>
      </div>

    </div>

  </div>
</section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-16 text-gray-900">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">
                Experienced Team
              </h3>
              <p className="text-gray-600">
                Skilled professionals with years of experience in technology solutions.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">
                Reliable Support
              </h3>
              <p className="text-gray-600">
                Fast response times and dependable customer service.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">
                Innovative Solutions
              </h3>
              <p className="text-gray-600">
                Modern technologies tailored to your business needs.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="py-24 bg-gray-100 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="font-bold text-xl mb-4">
                Enterprise Management System
              </h3>
              <p className="text-gray-600">
                Comprehensive business management platform.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="font-bold text-xl mb-4">
                Inventory Tracking Platform
              </h3>
              <p className="text-gray-600">
                Real-time inventory monitoring and reporting.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="font-bold text-xl mb-4">
                HR Information System
              </h3>
              <p className="text-gray-600">
                Employee records and payroll automation.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="font-bold text-xl mb-4">
                Digital Payment Gateway
              </h3>
              <p className="text-gray-600">
                Secure fintech payment processing solution.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-24 bg-white px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 text-gray-900">
            Contact Us
          </h2>

          <p className="text-xl text-gray-600 mb-10">
            Let's discuss how we can help your business grow through technology.
          </p>

          <div className="space-y-3 text-lg text-gray-700">
            <p>Email: info@fintechsolutions.com</p>
            <p>Phone: +63 912 345 6789</p>
            <p>Location: Clark, Pampanga, Philippines</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-8 text-center">
        <p>
          © 2026 Fintech Solutions Provider Inc. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}
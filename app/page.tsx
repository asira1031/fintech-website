import {
  FaCode,
  FaHeadset,
  FaTools,
  FaBug,
  FaServer,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import ProjectsCarousel from "@/components/Projectcarousel";

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

      {/* Stats */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

      <div>
        <h3 className="text-5xl font-bold text-blue-700">
          50+
        </h3>
        <p className="text-gray-600 mt-2">
          Projects Completed
        </p>
      </div>

      <div>
        <h3 className="text-5xl font-bold text-blue-700">
          15+
        </h3>
        <p className="text-gray-600 mt-2">
          Years Experience
        </p>
      </div>

      <div>
        <h3 className="text-5xl font-bold text-blue-700">
          100+
        </h3>
        <p className="text-gray-600 mt-2">
          Clients Supported
        </p>
      </div>

      <div>
        <h3 className="text-5xl font-bold text-blue-700">
          99.9%
        </h3>
        <p className="text-gray-600 mt-2">
          System Uptime
        </p>
      </div>

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

<ProjectsCarousel />


{/* Partnerships */}
<section className="py-24 bg-white px-6">
  <div className="max-w-7xl mx-auto text-center">

    <h2 className="text-5xl font-bold mb-4 text-gray-900">
      Strategic Partnerships
    </h2>

    <p className="text-gray-600 mb-16 max-w-3xl mx-auto">
      Building strong collaborations with organizations
      and institutions to create innovative and impactful solutions.
    </p>

    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

      <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold mb-3">
          Zebel Entertainment Inc.
        </h3>

        <p className="text-gray-600">
          Partnered on media, technology, and digital
          initiatives supporting creative productions.
        </p>
      </div>

      <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold mb-3">
          Boy Scouts of the Philippines
        </h3>

        <p className="text-gray-600">
          Collaboration through the On My Honor:
          Heroes Reborn project and related initiatives.
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

{/* Stats Section */}
<section className="py-20 bg-blue-900 text-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid md:grid-cols-4 gap-8 text-center">

      <div>
        <h3 className="text-5xl font-bold mb-2">15+</h3>
        <p className="text-blue-200">
          Completed Projects
        </p>
      </div>

      <div>
        <h3 className="text-5xl font-bold mb-2">99.9%</h3>
        <p className="text-blue-200">
          System Uptime
        </p>
      </div>

      <div>
        <h3 className="text-5xl font-bold mb-2">24/7</h3>
        <p className="text-blue-200">
          Technical Support
        </p>
      </div>

      <div>
        <h3 className="text-5xl font-bold mb-2">5+</h3>
        <p className="text-blue-200">
          Industry Solutions
        </p>
      </div>

    </div>

  </div>
</section>

{/* Testimonials */}
<section className="py-24 bg-gray-50 px-6">
  <div className="max-w-7xl mx-auto">

    <h2 className="text-5xl font-bold text-center text-gray-900 mb-4">
      Client Testimonials
    </h2>

    <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
      Trusted by organizations, businesses, and technology partners
      for delivering reliable software solutions and IT services.
    </p>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <div className="text-yellow-500 text-xl mb-4">
          ★★★★★
        </div>

        <p className="text-gray-600 mb-6">
          Fintech Solutions helped modernize our digital payment
          platform and significantly improved our operational efficiency.
        </p>

        <h4 className="font-bold text-gray-900">
          Juan Dela Cruz
        </h4>

        <p className="text-sm text-gray-500">
          Operations Manager
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <div className="text-yellow-500 text-xl mb-4">
          ★★★★★
        </div>

        <p className="text-gray-600 mb-6">
          Professional team with excellent technical expertise.
          Their support and development services exceeded expectations.
        </p>

        <h4 className="font-bold text-gray-900">
          Maria Santos
        </h4>

        <p className="text-sm text-gray-500">
          Business Owner
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <div className="text-yellow-500 text-xl mb-4">
          ★★★★★
        </div>

        <p className="text-gray-600 mb-6">
          Reliable technology partner for software development,
          IT maintenance, and enterprise system solutions.
        </p>

        <h4 className="font-bold text-gray-900">
          Michael Reyes
        </h4>

        <p className="text-sm text-gray-500">
          IT Director
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
            <p>Email: infofintechspi@gmail.com</p>
            <p>Phone: +63 912 345 6789</p>
            <p>Location: Clark, Pampanga, Philippines</p>
          </div>
        </div>
      </section>

      {/* Footer */}
<footer className="bg-slate-950 text-white py-16 px-6">
  <div className="max-w-7xl mx-auto">

    <div className="grid md:grid-cols-3 gap-12">

      <div>
        <h3 className="text-2xl font-bold mb-4">
          Fintech Solutions Provider Inc.
        </h3>

        <p className="text-gray-400">
          Delivering innovative software development,
          IT support, system maintenance, and digital
          transformation solutions for businesses.
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-lg mb-4">
          Services
        </h4>

        <ul className="space-y-2 text-gray-400">
          <li>Software Development</li>
          <li>Web Applications</li>
          <li>IT Support</li>
          <li>IT Maintenance</li>
          <li>Business Systems</li>
          <li>Technology Solutions</li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-lg mb-4">
          Contact Information
        </h4>

        <ul className="space-y-2 text-gray-400">
          <li>Email: info@fintechsolutions.com</li>
          <li>Phone: +63 XXX XXX XXXX</li>
          <li>Pampanga, Philippines</li>
        </ul>
      </div>

    </div>

    <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">
      © 2026 Fintech Solutions Provider Inc. All Rights Reserved.
    </div>

  </div>
</footer>
    </main>
  );
}
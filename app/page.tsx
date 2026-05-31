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

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

  {/* MannyPay */}
  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
    <div className="h-64 bg-gray-100 flex items-center justify-center p-2">
      <img
        src="/projects/mannypay.png"
        alt="MannyPay"
        className="max-h-full max-w-full object-contain"
      />
    </div>

    <div className="p-6">
      <h3 className="font-bold text-xl mb-3">
        MannyPay Digital Wallet
      </h3>

      <p className="text-gray-600">
        Digital wallet ecosystem featuring QR payments,
        merchant onboarding, and transaction analytics.
      </p>
    </div>
  </div>

  {/* CryptoHost */}
  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
    <div className="h-64 bg-gray-100 flex items-center justify-center p-2">
      <img
        src="/projects/cryptohost.png"
        alt="CryptoHost"
        className="max-h-full max-w-full object-contain"
      />
    </div>

    <div className="p-6">
      <h3 className="font-bold text-xl mb-3">
        CryptoHost Platform
      </h3>

      <p className="text-gray-600">
        Cryptocurrency hosting infrastructure,
        monitoring dashboards, and analytics tools.
      </p>
    </div>
  </div>

  {/* Remittance */}
  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
    <div className="h-64 bg-gray-100 flex items-center justify-center p-2">
      <img
        src="/projects/remittance.png"
        alt="Remittance"
        className="max-h-full max-w-full object-contain"
      />
    </div>

    <div className="p-6">
      <h3 className="font-bold text-xl mb-3">
        Global Remittance
      </h3>

      <p className="text-gray-600">
        International money transfer platform with
        tracking, reporting, and currency conversion.
      </p>
    </div>
  </div>

  {/* QR Gateway */}
  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
    <div className="h-64 bg-gray-100 flex items-center justify-center p-2">
      <img
        src="/projects/qrpay.png"
        alt="QR Payment Gateway"
        className="max-h-full max-w-full object-contain"
      />
    </div>

    <div className="p-6">
      <h3 className="font-bold text-xl mb-3">
        QR Payment Gateway
      </h3>

      <p className="text-gray-600">
        Merchant QR payments, payment reconciliation,
        and transaction analytics dashboard.
      </p>
    </div>
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

```
<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">

  <div className="bg-white rounded-2xl shadow-lg p-8">
    <h3 className="font-bold text-2xl mb-4">
      Manny Pay Digital Payment Platform
    </h3>
    <p className="text-gray-600">
      A digital payment ecosystem designed to streamline financial
      transactions through secure, scalable, and user-friendly payment
      technologies.
    </p>
  </div>

  <div className="bg-white rounded-2xl shadow-lg p-8">
    <h3 className="font-bold text-2xl mb-4">
      CryptoHost Wallet
    </h3>
    <p className="text-gray-600">
      Secure cryptocurrency wallet infrastructure featuring transaction
      management, authentication systems, and financial dashboards.
    </p>
  </div>

  <div className="bg-white rounded-2xl shadow-lg p-8">
    <h3 className="font-bold text-2xl mb-4">
      Asira Remittance Platform
    </h3>
    <p className="text-gray-600">
      Modern remittance platform focused on transaction processing,
      customer management, and operational reporting.
    </p>
  </div>

  <div className="bg-white rounded-2xl shadow-lg p-8">
    <h3 className="font-bold text-2xl mb-4">
      Business Management System
    </h3>
    <p className="text-gray-600">
      Enterprise platform integrating HR, payroll, attendance tracking,
      analytics, and operational reporting.
    </p>
  </div>

</div>
```

  </div>
</section>

{/* Testimonials */}

<section className="py-24 bg-white px-6">
  <div className="max-w-7xl mx-auto">

```
<h2 className="text-5xl font-bold text-center mb-16 text-gray-900">
  Client Testimonials
</h2>

<div className="grid md:grid-cols-3 gap-8">

  <div className="bg-gray-100 p-8 rounded-2xl">
    <p className="text-gray-600 mb-6">
      "Fintech Solutions delivered a reliable and scalable platform that helped streamline our operations."
    </p>
    <h4 className="font-bold">
      Business Operations Manager
    </h4>
  </div>

  <div className="bg-gray-100 p-8 rounded-2xl">
    <p className="text-gray-600 mb-6">
      "The development team demonstrated professionalism and technical expertise throughout the project."
    </p>
    <h4 className="font-bold">
      Technology Consultant
    </h4>
  </div>

  <div className="bg-gray-100 p-8 rounded-2xl">
    <p className="text-gray-600 mb-6">
      "The project was delivered on time and exceeded our expectations."
    </p>
    <h4 className="font-bold">
      Business Owner
    </h4>
  </div>

</div>
```

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
      <footer className="bg-blue-950 text-white py-8 text-center">
        <p>
          © 2026 Fintech Solutions Provider Inc. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    title: "MannyPay Digital Wallet",
    image: "/projects/mannypay.png",
    description: "Digital wallet ecosystem featuring QR payments and analytics.",
  },
  {
    title: "CryptoHost Platform",
    image: "/projects/cryptohost.png",
    description: "Cryptocurrency hosting infrastructure and monitoring.",
  },
  {
    title: "Global Remittance",
    image: "/projects/remittance.png",
    description: "International money transfer and reporting platform.",
  },
  {
    title: "QR Payment Gateway",
    image: "/projects/qrpay.png",
    description: "Merchant QR payments and analytics dashboard.",
  },
  {
    title: "Online Farming (Paalaga)",
    image: "/projects/onlinefarming.png",
    description: "Agritech investment and monitoring platform.",
  },
  {
    title: "Business Management System",
    image: "/projects/bms.png",
    description: "Enterprise operations and analytics platform.",
  },
  {
    title: "School Management System",
    image: "/projects/schoolms.png",
    description: "Enrollment, grading, attendance, and student records.",
  },
  {
    title: "On My Honor: Heroes Reborn",
    image: "/projects/onmyhonor.png",
    description: "Media and entertainment collaboration project.",
  },
];

export default function ProjectsCarousel() {
  return (
    <section id="projects" className="py-24 bg-blue-950 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-white mb-4">
          Featured Projects
        </h2>

        <p className="text-center text-blue-100 mb-16">
          Technology solutions across fintech, blockchain,
          agritech, education, and enterprise software.
        </p>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">

                <div className="h-64 bg-gray-100 flex items-center justify-center p-2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-xl mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600">
                    {project.description}
                  </p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
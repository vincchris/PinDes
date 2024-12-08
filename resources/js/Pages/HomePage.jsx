import React from "react";
import ScrollAnimationWrapper from "../components/ScrollAnimationWrapper";
import { FaTractor, FaHeartbeat, FaStore, FaMapSigns } from "react-icons/fa";
import Navbar from "@/Components/Navbar";
import HeroSection from "@/Components/HeroSection";
import FeatureCard from "@/Components/FeatureCard";
import Footer from "@/Components/Footer";
import Info from "@/Components/InformationHomePage"

const features = [
    {
        title: "Edukasi Pertanian dan Perternakan",
        description:
            "Edukasi pertanian dan peternakan menyediakan panduan praktis bagi petani dan peternak tentang teknik budidaya modern, penggunaan teknologi tepat guna, serta praktik berkelanjutan. Ini mencakup tutorial langkah demi langkah tentang pertanian organik, pemeliharaan ternak, dan pengelolaan sumber daya untuk meningkatkan hasil dan kesejahteraan hewan.",
        icon: <FaTractor className="text-green-600 text-4xl mb-4" />,
        image: "/assets/images/ImgPertanian.jpg",
        link: "/EdukasiPage",
        reverse: false,
    },
    {
        title: "Telemedicine",
        description:
            "Telemedicine memungkinkan layanan kesehatan jarak jauh melalui teknologi digital. Pasien dapat berkonsultasi dengan dokter tanpa harus datang ke klinik atau rumah sakit. Ini memberikan akses cepat ke diagnosa, perawatan, dan edukasi kesehatan, terutama untuk masyarakat di daerah terpencil.",
        icon: <FaHeartbeat className="text-red-600 text-4xl mb-4" />,
        image: "/assets/images/ImageDoctors.jpg",
        link: "/TelemedicinePage",
        reverse: true,
    },
    {
        title: "UMKM dan Pelatihan UMKM",
        description:
            "Pelatihan UMKM (Usaha Mikro, Kecil, dan Menengah) memberikan panduan dan pengetahuan bagi para pelaku usaha kecil untuk mengelola bisnis mereka dengan lebih efisien. Materi pelatihan mencakup manajemen keuangan, pemasaran digital, strategi bisnis, dan cara memanfaatkan peluang pasar untuk mengembangkan usaha secara berkelanjutan.",
        icon: <FaStore className="text-blue-600 text-4xl mb-4" />,
        image: "/assets/images/ImgBussiness.jpg",
        link: "/UmkmPage",
        reverse: false,
    },
    {
        title: "Konektivitas Antar Desa dan Pemerintah",
        description:
            "Konektivitas antar desa dan pemerintah adalah inisiatif untuk meningkatkan komunikasi dan kerjasama antara desa-desa dengan pihak pemerintah. Platform ini memungkinkan desa-desa untuk mempromosikan potensi lokal, berbagi informasi, serta mengakses program-program pembangunan desa melalui forum interaktif dan peta digital yang memperkuat hubungan antara masyarakat dan pemerintah.",
        icon: <FaMapSigns className="text-orange-600 text-4xl mb-4" />,
        image: "/assets/images/ImageGovernment.jpg",
        link: "/VillagePage",
        reverse: true,
    },
];

const Home = () => (
    <>
        <Navbar />
        <HeroSection />
        <Info />
        <section id="features" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10">
                    Fitur Utama
                </h2>
                <div className="space-y-8">
                    {features.map((feature, index) => (
                        <ScrollAnimationWrapper key={index}>
                            <FeatureCard
                                title={feature.title}
                                description={feature.description}
                                icon={feature.icon}
                                image={feature.image}
                                link={feature.link}
                                reverse={feature.reverse}
                            />
                        </ScrollAnimationWrapper>
                    ))}
                </div>
            </div>
        </section>
        <Footer />
    </>
);

export default Home;

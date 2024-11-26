import React from "react"; 
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Navbar from "../Components/Navbar";
import HeroSection from "../components/HeroSection";
import FeatureCard from "../components/FeatureCard";
import ScrollAnimationWrapper from "../components/ScrollAnimationWrapper";
import { FaTractor, FaHeartbeat, FaStore, FaMapSigns } from "react-icons/fa";

// // Import local images
// import ImgPertanian from "public/assets/images/ImgPertanian.jpg";
// import ImgTelemedicine from "public/assets/images/ImageDoctors.jpg";
// import ImgKewirausahaan from "public/assets/images/ImgBussiness.jpg";
// import ImgKonektivitas from 'public/assets/images/ImageGovernment.jpg';

const ImgPertanian = "/assets/images/ImgPertanian.jpg";
const ImgTelemedicine = "/assets/images/ImageDoctors.jpg";
const ImgKewirausahaan = "/assets/images/ImgBussiness.jpg";


const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <section id="features" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Fitur Utama</h2>
          <div className="space-y-8">
            {/* Feature Card 1 - Image on the Left */}
            <ScrollAnimationWrapper>
              <FeatureCard
                title="Edukasi Pertanian dan Perternakan"
                description="Edukasi pertanian dan peternakan menyediakan panduan praktis bagi petani dan peternak tentang teknik budidaya modern, penggunaan teknologi tepat guna, serta praktik berkelanjutan. Ini mencakup tutorial langkah demi langkah tentang pertanian organik, pemeliharaan ternak, dan pengelolaan sumber daya untuk meningkatkan hasil dan kesejahteraan hewan"
                icon={<FaTractor className="text-green-600 text-4xl mb-4" />}
                image={ImgPertanian}
                link="/edukasi-pertanian" // Pass the link prop
              />
            </ScrollAnimationWrapper>

            {/* Feature Card 2 - Image on the Right */}
            <ScrollAnimationWrapper>
              <FeatureCard
                title="Telemedicine"
                description="Telemedicine memungkinkan layanan kesehatan jarak jauh melalui teknologi digital. Pasien dapat berkonsultasi dengan dokter tanpa harus datang ke klinik atau rumah sakit. Ini memberikan akses cepat ke diagnosa, perawatan, dan edukasi kesehatan, terutama untuk masyarakat di daerah terpencil."
                icon={<FaHeartbeat className="text-red-600 text-4xl mb-4" />}
                image={ImgTelemedicine}
                link="/telemedicine" // Pass the link prop
                reverse
              />
            </ScrollAnimationWrapper>

            {/* Feature Card 3 - Image on the Left */}
            <ScrollAnimationWrapper>
              <FeatureCard
                title="UMKM dan Pelatihan UMKM"
                description="Pelatihan UMKM (Usaha Mikro, Kecil, dan Menengah) memberikan panduan dan pengetahuan bagi para pelaku usaha kecil untuk mengelola bisnis mereka dengan lebih efisien. Materi pelatihan mencakup manajemen keuangan, pemasaran digital, strategi bisnis, dan cara memanfaatkan peluang pasar untuk mengembangkan usaha secara berkelanjutan."
                icon={<FaStore className="text-blue-600 text-4xl mb-4" />}
                image={ImgKewirausahaan}
                link="/pelatihan-umkm" // Pass the link prop
              />
            </ScrollAnimationWrapper>

            {/* Feature Card 4 - Image on the Right */}
            <ScrollAnimationWrapper>
              <FeatureCard
                title="Konektivitas Antar Desa dan Pemerintah"
                description="Konektivitas antar desa dan pemerintah adalah inisiatif untuk meningkatkan komunikasi dan kerjasama antara desa-desa dengan pihak pemerintah. Platform ini memungkinkan desa-desa untuk mempromosikan potensi lokal, berbagi informasi, serta mengakses program-program pembangunan desa melalui forum interaktif dan peta digital yang memperkuat hubungan antara masyarakat dan pemerintah."
                icon={<FaMapSigns className="text-orange-600 text-4xl mb-4" />}
                // Uncomment and use the image once available
                image={ImgKonektivitas }
                link="/konektivitas-desa" // Pass the link prop
                reverse
              />
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

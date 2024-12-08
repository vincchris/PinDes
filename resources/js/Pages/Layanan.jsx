import FeatureCard from '@/Components/FeatureCard'
import { FaTractor, FaHeartbeat, FaStore, FaMapSigns } from "react-icons/fa";
import ScrollAnimationWrapper from "../components/ScrollAnimationWrapper";
import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import React from 'react'

const Layanan = () => {
    return (
        <>
            <Navbar />
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
};

export default Layanan;
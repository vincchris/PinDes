import React from "react";
import { Link } from "@inertiajs/react";
import ScrollAnimationWrapper from "../components/ScrollAnimationWrapper";

const FeatureCard = ({ title, description, icon, image, link, reverse }) => {
    return (
        <ScrollAnimationWrapper>
            <div
                className={`flex ${reverse ? "flex-row-reverse" : "flex-row"} items-center bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-200 hover:scale-105 hover:shadow-2xl`}
            >
                {/* Gambar */}
                <div className="w-2/5">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-auto max-h-[300px] object-cover object-center"
                    />
                </div>

                {/* Konten */}
                <div className="w-3/5 p-8">
                    {/* Judul dan Ikon */}
                    <div className="flex items-center mb-4">
                        <div className="text-4xl text-green-600 mr-4">{icon}</div> {/* Ikon di samping */}
                        <h3 className="text-3xl font-bold">{title}</h3> {/* Judul */}
                    </div>
                    <p className="text-gray-600 mb-6">{description}</p>
                    {link && (
                        <Link href={link}>
                            <a className="text-blue-500 hover:underline font-semibold">
                                Lihat Selengkapnya
                            </a>
                        </Link>
                    )}
                </div>
            </div>
        </ScrollAnimationWrapper>
    );
};

export default FeatureCard;

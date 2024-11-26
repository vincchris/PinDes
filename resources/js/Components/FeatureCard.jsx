import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FeatureCard = ({ title, description, icon, image, reverse, link }) => {
  return (
    <motion.div
      className={`flex items-center bg-white rounded-lg shadow-lg p-4 ${reverse ? 'flex-row-reverse' : ''}`}
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Text Content */}
      <div className="flex-1 p-4">
        <div className="flex items-center mb-4">
          <span className="text-4xl text-blue-600">{icon}</span>
          <h3 className="text-xl font-bold ml-4">{title}</h3>
        </div>
        <p className="mb-4">{description}</p>
        {/* Link positioned below the description with margin */}
        <Link to={link} className="mt-2 text-blue-500 hover:underline">
          Lihat Selengkapnya
        </Link>
      </div>
      
      {/* Image */}
      <div className="flex-1">
        <img src={image} alt={title} className="w-full h-auto rounded-lg" />
      </div>
    </motion.div>
  );
};

export default FeatureCard;

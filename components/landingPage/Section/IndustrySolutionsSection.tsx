import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const IndustrySolutionsSection: React.FC = () => {
  const buttonHover = {
    scale: 1.15,
    transition: { type: "spring", stiffness: 250 },
  };

  return (
    <section className="flex flex-col md:flex-row container mx-auto items-center py-16 gap-8 text-white rounded-xl bg-[#184e47]">
      {/* Title and Description */}
      <div className="text-center mb-12 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Empowering Communication with ChatVibe
        </h2>
        <p className="text-lg">
          ChatVibe makes seamless communication possible through video calls, audio meetings, 
          and instant messaging. Whether you're hosting online classes, financial briefings, 
          government meetings, or healthcare consultations, our platform keeps you connected anytime, anywhere.
        </p>

        {/* Explore Button */}
        <motion.div whileHover={buttonHover} className="inline-block mt-6">
          <Button className="border text-white hover:border-none px-7 hover:bg-main-2 transition-all duration-200 ease-in-out">
            Explore ChatVibe Solutions
          </Button>
        </motion.div>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
                {/* Individual Cards */}
                <div className="flex items-center justify-center border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                    <div className="text-center">
                        <div className="mb-4">
                            {/* Replace with the appropriate icon */}
                            <span className="text-4xl">🎓</span>
                        </div>
                        <h3 className="text-xl font-medium text-white">Education</h3>
                    </div>
                </div>

                <div className="flex items-center justify-center border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                    <div className="text-center">
                        <div className="mb-4">
                            {/* Replace with the appropriate icon */}
                            <span className="text-4xl">💰</span>
                        </div>
                        <h3 className="text-xl font-medium text-white">Financial Services</h3>
                    </div>
                </div>

                <div className="flex items-center justify-center border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                    <div className="text-center">
                        <div className="mb-4">
                            {/* Replace with the appropriate icon */}
                            <span className="text-4xl">🏛️</span>
                        </div>
                        <h3 className="text-xl font-medium text-white">Government</h3>
                    </div>
                </div>

                <div className="flex items-center justify-center border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                    <div className="text-center">
                        <div className="mb-4">
                            {/* Replace with the appropriate icon */}
                            <span className="text-4xl">🏥</span>
                        </div>
                        <h3 className="text-xl font-medium text-white">Healthcare</h3>
                    </div>
                </div>

                <div className="flex items-center justify-center border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                    <div className="text-center">
                        <div className="mb-4">
                            {/* Replace with the appropriate icon */}
                            <span className="text-4xl">🏭</span>
                        </div>
                        <h3 className="text-xl font-medium text-white">Manufacturing</h3>
                    </div>
                </div>

                <div className="flex items-center justify-center border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                    <div className="text-center">
                        <div className="mb-4">
                            {/* Replace with the appropriate icon */}
                            <span className="text-4xl">🏷️</span>
                        </div>
                        <h3 className="text-xl font-medium text-white">Retail</h3>
                    </div>
                </div>
            </div>
    </section>
  );
};

export default IndustrySolutionsSection;

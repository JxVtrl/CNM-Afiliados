/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Button } from "../ui/button";
import { useApp } from "@/context";
import { motion } from "framer-motion";
import { useAnalyticsEvent } from "@/utils/useAnalyticsEvent";

const CTAButton: React.FC = () => {
  const { product } = useApp();

  if (!product) return null;

  const handleSlideToProductRated = () => {
    const productRated = document.getElementById("products");
    window.scrollTo(0, productRated?.offsetTop || 0);
  };

  return (
    <div className="relative h-[75px] w-full md:w-[450px]">
      <motion.div
        animate={{
          scale: [1.05, 0.95, 1.05],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-full h-full"
      >
      <Button
        className="bg-green-500 w-full h-full
        text-white
        font-bold
        rounded-md
        shadow-md
        hover:bg-green-600
        transition-all
        duration-300
        ease-in-out



"
        onClick={() => {
          useAnalyticsEvent({
            category: "CTA",
            action: "click",
            label: "Going to Checkout",
          });

          handleSlideToProductRated();
        }}
      >
        {product?.ctaCall}
      </Button>
      </motion.div>
    </div>
  );
};

export default CTAButton;

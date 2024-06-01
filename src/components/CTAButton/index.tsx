import React from "react"
import { Button } from "../ui/button"
import { useApp } from "@/context"
import { motion } from "framer-motion"
import { useAnalyticsEvent } from "@/utils/useAnalyticsEvent"

const CTAButton: React.FC = () => {
  const { product } = useApp()

  if (!product) return null

  return (
    <div className="relative h-[50px] w-full md:w-[450px]">
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
        <a href="#product_rated">
        <Button
          className="bg-green-500 w-full"
          onClick={() => {
            useAnalyticsEvent({
              category: "CTA",
              action: "click",
              label: "Going to Checkout",
            })
          }}
        >
          {product?.ctaCall}
          </Button>
        </a>
          
      </motion.div>
    </div>
  )
}

export default CTAButton

/* eslint-disable react-hooks/rules-of-hooks */
import React from "react"
import { Button } from "../ui/button"
import { useApp } from "@/context"
import { motion } from "framer-motion"
import { useAnalyticsEvent } from "@/utils/useAnalyticsEvent"
import DataLayer from "@/utils/DataLayer"

type CTAProps = {
  text?: string
  position?: string
}

const CTAButton: React.FC<CTAProps> = ({
  text = (
    <>
      QUERO PARAR DE FUMAR
      <small>(ADICIONAR AO CARRINHO)</small>
    </>
  ),
  position = ''
}) => {
  const { product, setOnProducts } = useApp()
  if (!product) return null

  const handleSlideToProductRated = () => {
    setOnProducts(true)
  }

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
        rounded-md
        shadow-md
        hover:bg-green-600
        transition-all
        duration-300
        ease-in-out
flex
flex-col
justify-center
items-center



"
          onClick={() => {
            useAnalyticsEvent({
              category: "CTA",
              action: "click",
              label: "Going to Checkout",
            })

            DataLayer.clickEvent({
              pageSection: position || "CTAButton",
              pageSubsection: "CTAButton",
              element: text.toString(),
              elementCategory: "botao",
            })

            handleSlideToProductRated()
          }}
        >
          {text}
        </Button>
      </motion.div>
    </div>
  )
}

export default CTAButton

import { useApp } from "@/context"
import React from "react"

const Wallpaper: React.FC = () => {
  const { product } = useApp()
  return (
    <div className="absolute w-full h-full z-[-1] opacity-50 bg-black">
      <img
        src={product?.background}
        alt={product?.title}
        className="object-fit w-full h-full"
      />
    </div>
  )
}

export default Wallpaper

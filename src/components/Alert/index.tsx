import { useApp } from "@/context"
import React from "react"

const Alert: React.FC = () => {
  const { product } = useApp()

  if (!product) return null

  return (
    <div
      className="
    w-full
    flex
    items-center
    justify-center
    py-6
      bg-[#D0021B]
      text-white
"
    >
      <span
        className="
      text-center
      font-bold
"
      >
        {product?.alert || ""}
      </span>
    </div>
  )
}

export default Alert

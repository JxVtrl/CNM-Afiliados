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
    py-10
      bg-yellow-500
      text-white
"
    >
      <span
        className="
      text-center
      font-bold
      text-2xl

"
      >
        {product?.alert || ""}
      </span>
    </div>
  )
}

export default Alert

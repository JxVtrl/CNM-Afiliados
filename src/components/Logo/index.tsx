import { useApp } from "@/context"
import React from "react"

const Logo: React.FC = () => {
  const { product } = useApp()
  
  if(!product) return null
  
  return (
    <div className="w-full flex items-center justify-center py-10">
      <img
        src={
          'https:'+product?.logo ||
          ""
        }
        alt={product?.title || "logo"}
      />
    </div>
  )
}

export default Logo

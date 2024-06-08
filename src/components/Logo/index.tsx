import { useApp } from "@/context"
import React from "react"

const Logo: React.FC = () => {
  const { product } = useApp()
  
  if(!product) return null
  
  return (
    <div className="w-full flex items-center justify-center pt-2 pb-2">
      <img
        src={
          'https:'+product?.logo ||
          ""
        }
        alt={product?.title || "logo"}
        className="max-w-[350px] max-h-[350px] w-full"
        style={{
          aspectRatio: 1,
        }}
        
      />
    </div>
  )
}

export default Logo

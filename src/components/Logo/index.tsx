import { useApp } from "@/context"
import React from "react"

const Logo: React.FC = () => {
  const { product } = useApp()
  
  if(!product) return null
  
  return (
    <div className="w-full flex items-center justify-center pt-2 pb-2 relative">
      <img
        src='/cupom.png'
        alt="Cupom de desconto"
        className="absolute top-0 right-[24px] w-[150px]
"
      />
      
      
      
      <img
        src={
          'https:'+product?.logo ||
          ""
        }
        alt={product?.title || "logo"}
        className="max-w-[350px] max-h-[350px] w-full mt-12"
        style={{
          aspectRatio: 1,
        }}
        
      />
    </div>
  )
}

export default Logo

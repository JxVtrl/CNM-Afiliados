import React from "react"
import Wrapper from "../Wrapper"
import { useApp } from "@/context"

const Footer: React.FC = () => {
  const { product } = useApp()
  
  if(!product) return null
  
  return (
    <Wrapper classes={{
      container: "bg-white text-black py-10",
      
      content: "flex flex-col gap-5"
    }}>
      <hr />

      <small
        className="text-left"
        dangerouslySetInnerHTML={{
          __html: product?.footerContent || "",
        }}
      />

      <span
        className="py-5"
        dangerouslySetInnerHTML={{
          __html: product?.copyright || "",
        }}
      />
    </Wrapper>
  )
}

export default Footer

import { useApp } from "@/context"
import React from "react"
import Wrapper from "../Wrapper"
import CTAButton from "../CTAButton"

const Testimonials: React.FC = () => {
  const { product } = useApp()
  
  if(!product) return null
  
  return (
    <Wrapper classes={{
          content: "items-center gap-5",
        }}>
      <h2
        dangerouslySetInnerHTML={{
          __html: product?.testimonials.title ?? "",
        }}
      />
      <div className="flex flex-row flex-wrap justify-center gap-5">
        {product?.testimonials.list?.map((testimonial, index) => (
          <div className="flex flex-col items-center" key={index}>
            <iframe
              src={testimonial.src}
              title={testimonial.name}
              className="w-full min-h-[450px] max-h-[500px] rounded-md"
            />
            
            <p>{testimonial.name}</p>
          </div>
        ))}
      </div>
        <CTAButton />
    </Wrapper>
  )
}

export default Testimonials

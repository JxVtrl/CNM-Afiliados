import { useApp } from "@/context"
import React from "react"
import Wrapper from "../Wrapper"
import CTAButton from "../CTAButton"

const Testimonials: React.FC = () => {
  const { product } = useApp()

  if (!product) return null

  return (
    <Wrapper
      classes={{
        content: "items-center gap-5",
      }}
    >
      <h2
        dangerouslySetInnerHTML={{
          __html: product?.testimonials.title ?? "",
        }}
      />
      <div className="flex flex-row flex-wrap justify-center gap-5">
        {product?.testimonials.list?.map((testimonial, index) => (
          <iframe
           key={index}
              src={testimonial.src}
              title={testimonial.name}
            className="w-full
md:w-[unset]
  aspect-w-16
  aspect-h-9
 rounded-md"
            />
        ))}
      </div>
      <CTAButton />
    </Wrapper>
  )
}

export default Testimonials

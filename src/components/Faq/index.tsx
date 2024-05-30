import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useApp } from "@/context"
import Wrapper from "../Wrapper"
import CTAButton from "../CTAButton"

const Faq: React.FC = () => {
  const { product } = useApp()
  
  if (!product) return null
  
  const faqList = product?.faq.list || []
  
  return (
    <Wrapper classes={{
      container: "bg-gray-100 text-black py-10"
    
    }}>
      <h1
        dangerouslySetInnerHTML={{
          __html: product?.faq.title || "",
        }}
      />
      <Accordion type="multiple" className="mb-5 w-full">
        {faqList.map((question, index) => (
          <AccordionItem key={index} value={question.title}>
            <AccordionTrigger>
              <h4>{question.title}</h4>
            </AccordionTrigger>
            <AccordionContent className="flex text-left">
              <span>{question.content}</span>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Wrapper>
  )
}

export default Faq

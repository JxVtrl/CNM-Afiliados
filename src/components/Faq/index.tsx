import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useApp } from "@/context"
import Wrapper from "../Wrapper"
import Space from "../Space"

const Faq: React.FC = () => {
  const { product } = useApp()

  if (!product) return null

  const faqList = product?.faq.list || []

  return (
    <Wrapper
      classes={{
        container: "bg-gray-100 text-black pt-10 pb-5",
      }}
    >
      <h1
        dangerouslySetInnerHTML={{
          __html: product?.faq.title || "",
        }}
      />
      <Space height="25px" />
      <Accordion type="multiple" className="mb-5 w-full">
        {faqList.map((question, index) => (
          <AccordionItem key={index} value={question.title}>
            <AccordionTrigger>
              <h4
                className="text-start"
                dangerouslySetInnerHTML={{
                  __html: question.title || "",
                }}
              />
            </AccordionTrigger>
            <AccordionContent className="flex text-left">
              <span
                dangerouslySetInnerHTML={{
                  __html: question.content || "",
                }}
              />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Wrapper>
  )
}

export default Faq

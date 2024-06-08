import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Card from "./Card"
import { useApp } from "@/context"
import CTAButton from "../CTAButton"
import Wrapper from "../Wrapper"

const RelatedInfos: React.FC = () => {
  const { product } = useApp()
  
  if(!product) return null
  
  return (
    <Wrapper classes={{
          content: "items-center gap-5",
        }}>
      <h2
        dangerouslySetInnerHTML={{
          __html: product?.relatedInfo.title || "",
        }}
      />
      <Tabs defaultValue={"0"} className="py-5 flex flex-col gap-5 w-full">
        <TabsList className="w-full ">
          {product?.relatedInfo.list.map((info, index) => (
            <TabsTrigger key={index} value={`${index}`} className="w-full">
              {info.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {product?.relatedInfo.list.map((info, index) => (
          <TabsContent key={index} value={`${index}`} className="text-left">
            <Card>
              <ul>
                {info.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
      <CTAButton position={product?.relatedInfo.title} />
    </Wrapper>
  )
}

export default RelatedInfos

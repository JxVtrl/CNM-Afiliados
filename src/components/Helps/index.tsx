import React from "react"
import Wrapper from "../Wrapper"
import Space from "../Space"
import CTAButton from "../CTAButton"
import SimpleSwiper from "../SimpleSwiper"
import { SwiperSlide } from "swiper/react"

const Helps: React.FC = () => {
  const helps  =[
          {
            title: "MELHORAR A FUNÇÃO PULMONAR",
            text: "Veja os benefícios do CHAMPYX para a melhora do pulmão. Repara das células epiteliais, Remodelação do tecido, Limpeza do sistema imunológico e Crescimento de novos vasos sanguíneos",
            image:
              "https://champyxoficial.com/wp-content/uploads/2024/03/typeelementorsiteurlhttpslaboratoriooficial.comwp-jsonelementsid47c75a67elTypesectionisInnerfalseisLockedfalsesettingsbackground_backgroundgradientbackground_colorFFFFFFbackground_col-4.png",
          },
          {
            title: "MELHORA O CORAÇÃO",
            text: "Reduz problemas cardiovasculares devido ao foco de promover a normalidade da pressão arterial, auxilia nos níveis de colesterol saudável, regulariza o rítmo cardíaco e produz o fluxo para melhorar a boa circulação do sangue.",
            image:
              "https://champyxoficial.com/wp-content/uploads/2024/03/typeelementorsiteurlhttpslaboratoriooficial.comwp-jsonelementsid47c75a67elTypesectionisInnerfalseisLockedfalsesettingsbackground_backgroundgradientbackground_colorFFFFFFbackground_col-5.png",
          },
          {
            title: "PROMOVE SAÚDE BUCAL",
            text: "Restaura a saúde das gengivas, promove hálito fresco, auxilia no combate de germes e bactérias ingeridas causadas pelo uso do cigarro.",
            image:
              "https://champyxoficial.com/wp-content/uploads/2024/03/typeelementorsiteurlhttpslaboratoriooficial.comwp-jsonelementsid47c75a67elTypesectionisInnerfalseisLockedfalsesettingsbackground_backgroundgradientbackground_colorFFFFFFbackground_col-6.png",
          },
        ]
  return (
    <Wrapper>
          <h1>CHAMPYX GOTAS TAMBÉM MELHORA E AJUDA NOS SEGUINTES SINTOMAS DE:</h1>
          <Space height="25px" />
      <SimpleSwiper
      
      pagination={false}>
        {helps.map((item, index) => (
            <SwiperSlide key={index} className="
                flex
                flex-col
                items-center
                gap-5
                text-center
px-[50px]
">
                <img src={item.image} alt={item.title} className="
                    w-full
                    h-[300px]
                    object-cover
                    rounded-md
" />
                <h3 className="
                    font-bold
">{item.title}</h3>
                <p className="
                    text-gray-500
">{item.text}</p>
          </SwiperSlide>
        ))}
      </SimpleSwiper>
      
      <Space height="25px" />
      <CTAButton />
    </Wrapper>
  )
}

export default Helps

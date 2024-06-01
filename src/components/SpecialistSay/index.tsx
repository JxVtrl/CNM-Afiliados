import React from "react"
import Wrapper from "../Wrapper"
import Space from "../Space"
import CTAButton from "../CTAButton"

const SpecialistSay: React.FC = () => {
  return (
    <Wrapper>
      <h1>O que especialistas falam do Champyx em gotas?</h1>
      <Space height="50px" />
      <div
        className="
grid 
grid-cols-1
md:grid-cols-2
md:gap-10



"
      >
        <img
          src="https://champyxoficial.com/wp-content/uploads/2024/03/medicooo-1-1024x1024.png"
          alt="Especialista"
          className="
w-[400px] h-[400px] object-cover
place-self-center
"
        />
        <p>
          Como pneumologista com décadas de experiência no tratamento de
          pacientes que desejam parar de fumar, estou entusiasmado em
          compartilhar minha experiência com o Champyx em gotas. Esta inovação
          no campo da cessação do tabagismo representa uma abordagem eficaz e
          promissora para ajudar as pessoas a abandonarem o hábito de fumar.
          <br />
          <br />O Champyx em gotas é uma alternativa notável ao comprimido
          tradicional, oferecendo uma forma conveniente e flexível de
          administrar o medicamento. Ele contém um agente eficaz que age nos
          receptores de nicotina no cérebro, reduzindo os desejos e sintomas de
          abstinência associados ao tabagismo.
        </p>
          </div>
          
          <Space height="25px" />
          <CTAButton />
    </Wrapper>
  )
}

export default SpecialistSay

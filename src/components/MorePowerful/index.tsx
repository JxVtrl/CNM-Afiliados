import React from "react"
import Wrapper from "../Wrapper"
import Space from "../Space"
import CTAButton from "../CTAButton"

// import { Container } from './styles';

const MorePowerful: React.FC = () => {
  return (
    <Wrapper>
      <h1>
        O CHAMPYX EM GOTAS É 7 VEZES MAIS PODEROSO DO QUE AS PÍLULAS,
        COMPRIMIDOS E ADESIVOS
      </h1>
      <Space height="20px" />

      <div
        className="
    grid grid-cols-1 sm:grid-cols-2 gap-5
"
      >
        <p
          className="
  place-self-center

"
        >
          Sua fórmula avançada natural e exclusiva é meticulosamente
          desenvolvida para ser 7 vezes mais potente e eficaz do que as cápsulas
          tradicionais. Prepare-se para uma transformação real em sua jornada
          para parar de fumar.
          <br />
          <br />
          Chegou a hora de tomar o controle da sua vida e dizer adeus ao cigarro
          de uma vez por todas com a ajuda poderosa do CHAMPYX GOTAS!
        </p>

        <img
          src="https://champyxoficial.com/wp-content/uploads/2024/03/frasco-3-1024x1024.png"
          width={500}
          height={500}
          className="
place-self-center

"
        />
      </div>

      <Space height="20px" />

      <CTAButton />
    </Wrapper>
  )
}

export default MorePowerful

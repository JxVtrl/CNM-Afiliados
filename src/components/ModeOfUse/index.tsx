import React from "react"
import Wrapper from "../Wrapper"
import Space from "../Space"
import CTAButton from "../CTAButton"

// import { Container } from './styles';

const ModeOfUse: React.FC = () => {
  return (
    <Wrapper>
      <h1>Qual o modo correto de uso?</h1>
      
      <Space height="20px" />

      <div
        className="
    grid grid-cols-1 sm:grid-cols-2 gap-5
text-start
w-full
p-5
bg-white
rounded-md
shadow-md
text-gray-900
font-semibold
sm:text-base



"
      >
        <ul
          className="
flex flex-col justify-between gap-5
"
        >
          <li
            className="
"
          >
            <h3>
              1o Estágio: Limpeza do organismo
            </h3>
            <Space height="10px" />

            <p>
              Use 1ml (12 gotas) do CHAMPYX GOTAS diretamente na sua boca
              sublingual em jejum.
              <br />
              <br />
              <small>
                Para obter os melhores resultados, evite ingeri-lo junto com
                bebidas quentes ou geladas. Isso pode afetar a eficácia do
                produto e diminuir seus benefícios.
              </small>
            </p>
          </li>
            <hr />

          <li>
            <h3>
              2o Estágio: Manutenção e tratamento da abstnência
            </h3>
            <Space height="10px" />

            <p>
              Use 4 gotas em três periodos do dia, a partir do meio dia.
              <br />
              <br />
              <small>
                Para alcançar os resultados desejados, é essencial seguir as
                instruções de dosagem. O segundo estágio só é recomendado em
                momentos fortes de abstnência.
              </small>
            </p>
          </li>
        </ul>
              <div className="
flex flex-col align-center justify-center
place-self-center
">
<img src="https://champyxoficial.com/wp-content/uploads/2024/03/1-2-1024x1024.png" alt="Modo de uso" width={500} height={500} />
              
              </div>
      </div>
      
      <Space height="20px" />
      <CTAButton />
    </Wrapper>
  )
}

export default ModeOfUse

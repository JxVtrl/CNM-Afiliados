import React from "react"
import Wrapper from "../Wrapper"
import Space from "../Space"

const Secrets: React.FC = () => {
  return (
    <Wrapper>
          <h1>VOCÊ ESTÁ CUIDANDO DA SAÚDE DO SEU PULMÃO?</h1>
          <Space height="25px" />
      <h3>
        80% dos fumantes desenvolvem câncer no pulmão, segundo o Instituto
        Nacional do Câncer (Inca).
      </h3>
          <Space height="25px" />

          <div className="
            grid
            grid-cols-1
            sm:grid-cols-3
            gap-5
            ">
        {[
          {
            title: "Principais doenças",
            text: "Câncer de Pulmão, Doença Pulmonar Obstrutiva Crônica (DPOC), Bronquite Crônica, Enfisema, Infecções Respiratórias, Agravamento de Asma, Redução da Função Pulmonar, Morte Prematura e muito mais.",
            image:
              "https://champyxoficial.com/wp-content/uploads/2024/03/DALL·E-2023-10-23-23.35.50-Cinematic-rendering-contrasting-two-lungs.-The-left-lung-is-vibrant-and-healthy-while-the-right-lung-representing-20-years-of-smoking-is-marred-wit.png",
          },
          {
            title: "Cigarro e a sua pele",
            text: "Envelhecimento Prematuro, Pele Sem Brilho e Desidratada, Manchas e Descolorações, Acne e Cicatrização Lenta, Câncer de Pele, Diminuição da Elasticidade, Cicatrização Impedida, psoríase e eczema.",
            image:
              "https://champyxoficial.com/wp-content/uploads/2024/03/DALL·E-2023-10-23-23.34.28-Imagem-em-estilo-cinematografico-de-uma-mulher-de-40-anos.-Metade-de-seu-corpo-e-radiante-e-saudavel-enquanto-a-outra-metade-e-palida-e-mostra-sinais.png",
          },
          {
            title: "Câncer de Pulmão",
            text: "A fumaça do cigarro contém mais de 7.000 substâncias químicas tóxicas, Essas substâncias danificam o DNA das células do pulmão, levando ao desenvolvimento de tumores cancerosos.",
            image:
              "https://champyxoficial.com/wp-content/uploads/2024/03/DALL·E-2023-10-23-23.34.37-Representacao-altamente-detalhada-e-cinematografica-de-dois-pulmoes-em-um-ambiente-escuro.-O-pulmao-saudavel-a-esquerda-possui-uma-cor-rosa-vibrante-e.png",
          },
        ].map((item, index) => (
            <div key={index} className="
                flex
                flex-col
                items-center
                gap-5
                text-center
">
                <img src={item.image} alt={item.title} className="
                    w-full
                    h-[300px]
                    object-cover
                    rounded-md
" />
                <h3 className="
                    text-xl
                    font-bold
">{item.title}</h3>
                <p className="
                    text-sm
                    text-gray-500
">{item.text}</p>
          </div>
        ))}
          </div>
    </Wrapper>
  )
}

export default Secrets

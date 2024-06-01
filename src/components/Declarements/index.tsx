import React from "react"
import Wrapper from "../Wrapper"
import Space from "../Space"

const Declarements: React.FC = () => {
  return (
    <Wrapper>
      <h1>QUEM EXPERIMENTOU O CHAMPYX GOTAS RECOMENDA!</h1>
      <Space height="20px" />

      <ul>
        {[
          {
            name: "Ana Silva",
            age: 42,
            city: "São Paulo",
            state: "SP",
            rate: 5,
            text: "Há anos, fumar era uma parte inegociável da minha vida. Eu tentei parar várias vezes, mas sempre voltava ao cigarro. No entanto, quando meu médico sugeriu o Champyx em gotas, algo mudou. A flexibilidade de dosagem tornou mais fácil para mim ajustar o tratamento às minhas necessidades. Com o apoio do medicamento e um plano personalizado, finalmente consegui parar de fumar. A vareniclina ajudou a reduzir os desejos de maneira notável, tornando a jornada muito mais suportável. Agora, me sinto mais saudável, com mais energia e livre do tabaco.",
          },
          {
            name: "João Santos",
            age: 38,
            city: "Goiatuba",
            state: "GO",
            rate: 5,
            text: "Fumar estava afetando minha saúde e minha qualidade de vida. Eu estava cansado de tentar parar por conta própria, até que meu médico recomendou o Champyx em gotas. Eu estava cético no início, mas decidi tentar. A flexibilidade das gotas foi fundamental para mim, pois eu podia adaptar a dosagem conforme necessário. Durante o tratamento, senti uma redução real nos desejos de fumar, e isso me deu confiança para seguir em frente. Hoje, estou orgulhoso de dizer que estou livre do cigarro e me sinto incrivelmente bem. Champyx gotas fez toda a diferença para mim.",
          },
          {
            name: "Ana Maria",
            age: 50,
            city: "Belo Horizonte",
            state: "MG",
            rate: 5,
            text: "Fumar era um hábito que eu mantinha por décadas, e parar parecia uma tarefa impossível. Mas então, meu médico me apresentou ao Champyx gotas. A possibilidade de personalizar a dosagem me deu a esperança de que finalmente poderia deixar o cigarro para trás. O Champyx realmente fez a diferença na minha jornada para parar de fumar. Ele reduziu meus desejos e me ajudou a enfrentar os momentos difíceis. Hoje, minha saúde melhorou significativamente, e estou grata por ter encontrado essa solução.",
          },
          {
            name: "João Pedro",
            age: 45,
            city: "Londrina",
            state: "PR",
            rate: 5,
            text: "Fumar estava prejudicando minha saúde e minha família estava preocupada. Eu já havia tentado parar várias vezes sem sucesso, mas o Champyx gotas fez toda a diferença. A flexibilidade de dosagem me permitiu adaptar o tratamento ao meu ritmo, e os desejos por nicotina diminuíram significativamente. Com a ajuda do Champyx, finalmente consegui vencer o vício. Minha qualidade de vida melhorou, e agora posso aproveitar mais momentos com minha família sem o peso do cigarro.",
          },
          {
            name: "Laura Dias",
            age: 37,
            city: "Belém",
            state: "PA",
            rate: 5,
            text: "O tabagismo era uma parte arraigada da minha vida, e eu sabia que precisava parar, mas sempre parecia impossível. Quando meu médico me recomendou o Champyx em gotas, decidi tentar. A flexibilidade das gotas tornou o tratamento acessível e eficaz para mim. Com o passar do tempo, os desejos diminuíram gradualmente. Hoje, estou orgulhosa de dizer que estou livre do cigarro. O Champyx em gotas realmente me deu uma nova chance, e minha saúde e energia melhoraram consideravelmente.",
          },
        ].map((item, index) => (
            <li key={index} className="
            flex 
flex-col
            md:flex-row
            gap-5
text-start
border-b-2
border-gray-200
py-5




">
                <div className="
                flex
                flex-row
                md:flex-col
                gap-2
        md:w-1/3

">
              <h4>
                {item.name}, {item.age} anos,
                <br />
                {item.city} - {item.state}
              </h4>
              <p>Avaliação: {item.rate} estrelas</p>
            </div>
                <p className="
                w-full
    
text-start
text-gray-600
text-sm


">{item.text}</p>
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}

export default Declarements

import { certifies } from "@/utils/certifies"
import { flags } from "@/utils/flags"
import React from "react"
import Wrapper from "../Wrapper"
import CTAButton from "../CTAButton"

const Security: React.FC = () => {
  return (
    <Wrapper
        classes={{
          content: "gap-5 flex flex-col",
        }}
      >
      <h2>
          <b>Satisfação total</b> ou seu dinheiro de volta!
        </h2>
      <div
        className="py-10 px-5 text-center relative max-w-[720px] gap-5 flex flex-col m-auto"
        style={{
          borderRadius: "10px 42px 10px 10px",
        }}
      >
        <h3>
          Teste o <b>método</b> e decida se <b>valeu</b>
          <br />
          ou não a pena!
        </h3>
        <p className="text-center">
          Funciona Assim:
          <br />
          Você compra, faz o uso do produto e dentro de 7 dias você não estiver
          satisfeito,{" "}
          <b>
            devolveremos todo o seu dinheiro de volta, sem letras miúdas e sem
            complicações.
          </b>
        </p>
        <div className="flex justify-around w-full mt-[24px] m-auto">
          <div className="grid grid-cols-2 gap-x-5">
            {certifies.map((certify) => (
              <div className="h-[50px] w-[75px]">
                <img
                  src={certify.image}
                  alt={certify.name}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>
          <div className="h-[45px] grid grid-cols-4 gap-x-5 ">
            {flags.map((flag) => (
              <div className="w-[50px] h-[50px] ">
                <img
                  src={flag.image}
                  alt={flag.name}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-[175px] absolute bottom-[-75px] left-[-75px]">
          <img src="src/assets/selo.png" alt="selo" />
        </div>
      </div>
      
      <CTAButton/>
    </Wrapper>
  )
}

export default Security

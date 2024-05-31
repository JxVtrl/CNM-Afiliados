import { useApp } from "@/context"
import React from "react"
import Wrapper from "../Wrapper"
import Space from "../Space"

const Products: React.FC = () => {
  const { product } = useApp()

  const calculateFakeBeforeDiscount = (price: number) => {
    const lastPrice = price * 1.15
    return lastPrice
  }

  const calculateAndFormatParcel = (price: number, parcel: number) => {
    const parcelPrice = price / parcel
    return parcelPrice.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    })
  }

  return (
    <Wrapper
      classes={{
        container: "bg-blue-100",
        content: "py-5",
      }}
    >
      <h1>Preços especiais por tempo limitado</h1>

      <Space height="25px" />

      <h3>
        Recomendamos o tratamento de 3 a 12 meses para uma restauração efetiva e
        um efeito duradouro completo.
      </h3>
      <Space height="25px" />

      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 w-full">
        {product?.productSell.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-5 text-center bg-white p-2 w-full rounded-md shadow-md"
          >
                <h3 className="text-xl font-bold" dangerouslySetInnerHTML={{
                    __html: item.title
                    }}/>
            <p className="text-sm text-gray-500">{item.text}</p>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[300px] object-cover rounded-md"
            />
            <div>
              <small
                style={{
                  lineHeight: 0.5,
                  fontSize: 16,
                }}
              >
                De{" "}
                <del
                  className="
    text-red-500
"
                >
                  {calculateFakeBeforeDiscount(item.price).toLocaleString(
                    "pt-br",
                    {
                      style: "currency",
                      currency: "BRL",
                    }
                  )}
                </del>
                <br />
                por apenas
                <br />
              </small>
              <Space height="10px" />

              <h2 className="text-2xl font-bold">12x de </h2>
              <h1
                className="m-0 p-0 
                    text-5xl
                    font-bold

"
              >
                {calculateAndFormatParcel(item.price, 12)}
              </h1>
              <Space height="10px" />
              <small>
                ou R${" "}
                {item.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}{" "}
                à vista
              </small>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

export default Products

import { useApp } from "@/context";
import React, { useEffect, useRef } from "react";
import Wrapper from "../Wrapper";
import Space from "../Space";
import { Button } from "../ui/button";
import SimpleSwiper from "../SimpleSwiper";
import { SwiperSlide } from "swiper/react";

const Products: React.FC = () => {
  const { product, onProducts, setOnProducts } = useApp();
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (onProducts) {
      productsRef.current?.scrollIntoView({
        behavior: "smooth",
      });
      setOnProducts(false);
    }
  }, [onProducts, setOnProducts]);

  const calculateFakeBeforeDiscount = (price: number) => {
    const lastPrice = price * 1.15;
    return lastPrice;
  };

  const calculateAndFormatParcel = (price: number, parcel: number) => {
    const parcelPrice = price / parcel;
    return parcelPrice.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

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

      <div
        ref={productsRef}
        style={{
          width: "100%",
        }}
      >
        <SimpleSwiper
          spaceBetween={10}
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          pagination={false}
          id="products"
        >
          {product?.productSell.map((item, index) => (
            <SwiperSlide
              key={index}
              className="bg-white p-5 rounded-md relative"
            >
              {item.type === "popular" && (
                <div
                  className="bg-yellow-500 text-white p-2 rounded-md
    absolute
    top-[-20px]

"
                >
                  Mais Vendido
                </div>
              )}

              <h3
                className="font-bold"
                dangerouslySetInnerHTML={{
                  __html: item.title,
                }}
              />
              <p className="text-gray-500">{item.text}</p>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[300px] object-cover rounded-md"
              />
              <div className="w-full">
                <small>
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
                  </del>{" "}
                  por apenas
                  <br />
                </small>
                <h2 className="font-bold">12x de </h2>
                <h1
                  className="m-0 p-0 
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

                <Space height="10px" />

                <small>Frete Grátis</small>

                <Space height="10px" />

                <a href={item.link}>
                  <Button className="w-full h-[55px]">COMPRAR AGORA</Button>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </SimpleSwiper>
      </div>

      <Space height="35px" />

      <img
        src="https://champyxoficial.com/wp-content/uploads/2024/03/comprasegura.webp"
        alt="Compra Segura"
        className="w-[350px] h-[75px] object-cover rounded-md"
      />
    </Wrapper>
  );
};

export default Products;

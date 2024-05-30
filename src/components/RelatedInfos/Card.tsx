import React from "react"

type CardProps = {
  children: React.ReactNode
}

const Card: React.FC<CardProps> = ({ children }) => {
  return <div className={"w-full border rounded p-5"}>{children}</div>
}

export default Card

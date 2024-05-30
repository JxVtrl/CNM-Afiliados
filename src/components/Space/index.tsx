import React from "react"

type Props = {
  height: string
}

const Space: React.FC<Props> = ({ height = "15px" }) => {
  return (
    <div
      className={`w-full`}
      style={{
        height,
      }}
    />
  )
}

export default Space

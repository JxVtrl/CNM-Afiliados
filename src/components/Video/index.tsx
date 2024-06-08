import { useApp } from "@/context"
import React from "react"

const Video: React.FC = () => {
  const { product } = useApp()
  return (
    <div className="w-full max-w-[750px] h-full">
      <iframe
        src={product?.productVideo}
        title="YouTube video player"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        style={{
          width: "100%",
          aspectRatio: "16/9",
        }}
      ></iframe>
    </div>
  )
}

export default Video

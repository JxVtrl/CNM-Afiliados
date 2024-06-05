import { useApp } from "@/context"
import React from "react"

const Video: React.FC = () => {
  const { product } = useApp()
  return (
    <div className="w-full max-w-[750px] h-full min-h-[350px] max-h-[500px]">
      <iframe
        src={product?.productVideo}
        title="YouTube video player"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        style={{
          width: "100%",
          height: "100%",
          minHeight: "350px",
          maxHeight: "500px",
        }}
      ></iframe>
    </div>
  )
}

export default Video

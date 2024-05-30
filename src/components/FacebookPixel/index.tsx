import React from "react"

const FacebookPixel: React.FC = () => {
  React.useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(import.meta.env.VITE_FACEBOOK_PIXEL_ID!)
        ReactPixel.pageView()

        console.log(ReactPixel)

        return ReactPixel
      })
  })
  return null
}

export default FacebookPixel

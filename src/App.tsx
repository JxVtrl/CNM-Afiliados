import { useApp } from "./context"
import Wrapper from "./components/Wrapper"
import Quiz from "./components/Quiz"
import { Toaster } from "./components/ui/toaster"
import Testimonials from "./components/Testimonials"
import RelatedInfos from "./components/RelatedInfos"
import Security from "./components/Security"
import Faq from "./components/Faq"
import Footer from "./components/Footer"
import CTAButton from "./components/CTAButton"
import Logo from "./components/Logo"
import Space from "./components/Space"
import Wallpaper from "./components/Wallpaper"
import Video from "./components/Video"
import Alert from "./components/Alert"

function App() {
  const { product } = useApp()

  if (!product) return <div className="flex items-center justify-center h-full w-full">Sem produto para exibir</div>

  return (
    <main className="relative flex flex-col">
      <Wallpaper />
      
      <Alert />
      
      <Logo />

      <Wrapper classes={{ content: "gap-5 flex flex-col items-center" }}>
        <h1
          dangerouslySetInnerHTML={{
            __html: product?.title || "",
          }}
          style={{
          textTransform: 'uppercase'
          }}
        />
        <p>{product?.description}</p>
        
        {product?.productImage ? (
          <img src={product?.productImage} alt={product?.title} />
        ) : product?.productVideo ? (
          <Video />
        ) : null}
        <CTAButton />
      </Wrapper>

      <Space height="75px" />

      <Testimonials />

      <Space height="75px" />

      <RelatedInfos />

      <Space height="75px" />

      <Security />

      <Space height="135px" />

      <Faq />


      <Footer />

      <Quiz />
      <Toaster />
    </main>
  )
}

export default App

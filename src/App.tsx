import { useApp } from "./context"
import Wrapper from "./components/Wrapper"
import Quiz from "./components/Quiz"
import { Toaster } from "./components/ui/toaster"
import Testimonials from "./components/Testimonials"
import Security from "./components/Security"
import Faq from "./components/Faq"
import Footer from "./components/Footer"
import CTAButton from "./components/CTAButton"
import Logo from "./components/Logo"
import Space from "./components/Space"
import Video from "./components/Video"
import Alert from "./components/Alert"
import Lottie from "./components/Lottie"
import Secrets from "./components/Secrets"
import Helps from "./components/Helps"
import Products from "./components/Products"
import SpecialistSay from "./components/SpecialistSay"
import ModeOfUse from "./components/ModeOfUse"
import MeetOurInstalations from "./components/MeetOurInstalations"
import MorePowerful from "./components/MorePowerful"
import Declarements from "./components/Declarements"

function App() {
  const { product } = useApp()

  if (!product) return <Lottie />
  
  document.title = product.title
  
  const favicon = document.querySelector("link[rel='icon']")
  favicon?.setAttribute('href', product.favicon)
  
  const span = document.querySelectorAll('span')
  span.forEach(el => el.style.color = product.textColor)
  
  const p = document.querySelectorAll('p')
  p.forEach(el => el.style.color = product.textColor)

  const h1 = document.querySelectorAll('h1')
  h1.forEach(el => el.style.color = product.textColor)
  
  const h2 = document.querySelectorAll('h2')
  h2.forEach(el => el.style.color = product.textColor)
  
  const h3 = document.querySelectorAll('h3')
  h3.forEach(el => el.style.color = product.textColor)
  
  const h4 = document.querySelectorAll('h4')
  h4.forEach(el => el.style.color = product.textColor)
  
  
  return (
    <main className={`relative flex flex-col`} style={{
      backgroundColor: product.backgroundColor,
    }}>
      {/* <Wallpaper /> */}

      <Alert />
      
      <Space height="45px" />
      

      <Wrapper classes={{ content: "gap-5 flex flex-col items-center" }}>
        <h1
          dangerouslySetInnerHTML={{
            __html: product?.title || "",
          }}
          style={{
            textTransform: "uppercase",
          }}
        />
      </Wrapper>

      <Logo />

      <Wrapper classes={{ content: "gap-5 flex flex-col items-center" }}>
        <p
          dangerouslySetInnerHTML={{
            __html: product?.text || "",
          }}
        />

        {product?.productImage ? (
          <img src={product?.productImage} alt={product?.title} />
        ) : product?.productVideo ? (
          <Video />
        ) : null}
        <CTAButton />
      </Wrapper>

      <Space height="55px" />
      
      <Secrets />
      
      <Space height="55px" />
      
      <Helps/>
      
      <Space height="55px" />
      
      <SpecialistSay />
      
      <Space height="55px" />

<ModeOfUse />      
      
      <Space height="55px" />
      
      <Testimonials />

      <Space height="55px" />
      
      <Products />
      
      <Space height="55px" />
      
      <Declarements />
      
      <Space height="55px" />

      <Security />

      <Space height="55px" />

      <Faq />

      <Footer />

      <Quiz />
      <Toaster />
    </main>
  )
}

export default App

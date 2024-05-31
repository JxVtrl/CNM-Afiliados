import { Product } from "@/context"

export const treatData = (
  data: any[],
  choosenProduct: number | string
): Product | null => {
  if (!data) return null
  console.log(data,choosenProduct)
  
  const choosen = data.find((item) => item.fields.id == choosenProduct)
  console.log(choosen.fields.favicon)
  
  const id = choosen.fields.id
  const logo = choosen.fields.logo.fields.file.url
  const alert = choosen.fields.alert
  const title = choosen.fields.title
  const text = choosen.fields.text
  const favicon = choosen.fields.favicon.fields.file.url
  const textColor = choosen.fields.textColor
  const backgroundColor = choosen.fields.backgroundColor
  const description = choosen.fields.description
  const productVideo = choosen.fields.productVideo 
  const productImage = choosen.fields.productPicture?.fields.file.url || ''
  const link = choosen.fields.link
  const testimonialTitle = choosen.fields.testimonialTitle
  const faq = choosen.fields.faq
  const quiz = choosen.fields.quiz
  const testimonials = choosen.fields.testimonials
  const relatedInfo = choosen.fields.relatedInfo
  const ctaCall = choosen.fields.ctaCall
  const background = choosen.fields.background.fields.file.url
  const copyright = choosen.fields.copyright
  const footerContent = choosen.fields.footerContent

  return {
    id,
    favicon,
    title,
    text,
    backgroundColor,
    alert,
    textColor,
    link,
    productImage,
    productVideo,
    description,footerContent,
    testimonialTitle,
    logo,
    faq,
    quiz,
    copyright,
    background,
    testimonials,
    relatedInfo,
    ctaCall
  }
}

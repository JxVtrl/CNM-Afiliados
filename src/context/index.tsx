import { getEntries } from "@/lib/contenful"
import { treatData } from "@/utils/treatData"
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useMemo,
} from "react"

export type Product = {
  id: number
  alert: string
  backgroundColor: string
  textColor: string
  title: string
  text: string
  favicon: string
  description: string
  link: string
  productImage?: string
  productVideo?: string
  footerContent: string
  logo: string
  testimonialTitle: string
  ctaCall: string
  background: string
  copyright: string
  faq: {
    title: string
    list: {
    title: string
    content: string
    }[]
  }
  productSell: {
    title: string
    text: string
    price: number
    type: 'popular' | 'default'
    link: string
    image: string
  }[]
  quiz: {
    title: string
    options: {
      value: string
      correct: boolean
    }[]
  }[]
  testimonials: {
    title: string
    list: {
      name: string
      src: string
      stars: number
      feedback: string
    }[]
  }
  relatedInfo: {
    title: string
    list: {
      title: string
      list: string[]
    }[]
  }
}

type ContextProps = {
  product: Product | null
  quizActive: boolean
  setQuizActive: React.Dispatch<React.SetStateAction<boolean>>
}

const AppContext = createContext({} as ContextProps)

export function AppProvider({ children }: { children: ReactNode }) {
  const CHOOSEN_PRODUCT = import.meta.env.VITE_CHOOSEN_PRODUCT

  const [quizActive, setQuizActive] = useState(false)
  const [product, setProduct] = useState<Product | null>(null)

  const getProducts = async (choosen:number | string) => {
    const p = await getEntries({ contentType: "product" })

    const treatedP = treatData(p, choosen)
    setProduct(treatedP)
  }

  useEffect(() => {
    getProducts(CHOOSEN_PRODUCT)
  }, [CHOOSEN_PRODUCT])

  const contextValue = useMemo(
    () => ({
      product,
      quizActive,
      setQuizActive,
    }),
    [product, quizActive, setQuizActive]
  )

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  )
}

export function useApp() {
  return useContext(AppContext)
}

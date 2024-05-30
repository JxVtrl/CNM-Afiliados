import { useApp } from "@/context"
import { motion } from "framer-motion"
import React, { useEffect } from "react"
import { Button } from "../ui/button"
import { toast } from "../ui/use-toast"
import { Progress } from "@/components/ui/progress"
import { useAnalyticsEvent } from "@/utils/useAnalyticsEvent"

const Quiz: React.FC = () => {
  const { quizActive, setQuizActive, product } = useApp()

  const [progress, setProgress] = React.useState(0)
  const [currentQuestion, setCurrentQuestion] = React.useState(0)

  const question = product?.quiz[currentQuestion]

    const redirect = () => {
    window.location.href = product?.link || ''
  }
  
  useEffect(() => {
    const porcentagem = ((currentQuestion) / product?.quiz.length!) * 100
    setProgress(porcentagem)

    if (porcentagem === 100) {
      setTimeout(() => {
        setQuizActive(false)
        useAnalyticsEvent({
          category: "Quiz",
          action: "ended",
          label: "Quiz finished",
        })
        
        
        redirect()
      }, 5000)
    }
  }, [currentQuestion])

  useEffect(() => {
    if (!quizActive) setCurrentQuestion(0)
  }, [quizActive])

  return (
    <motion.div
      initial={{ opacity: 0, pointerEvents: "none" }}
      animate={{
        opacity: quizActive ? 1 : 0,
        pointerEvents: quizActive ? "all" : "none",
      }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-10"
    >
      <div className="flex flex-col gap-5 bg-white max-w-lg w-full h-fit p-5 rounded-md">
        {currentQuestion < product?.quiz.length! && (
          <>
            <div className="flex flex-row gap-4 items-center">
            <Progress value={progress} max={product?.quiz.length} />
              <Button
                className="h-[21px]"
                onClick={() => {
                  setQuizActive(false)
                  useAnalyticsEvent({
                    category: "Quiz",
                    action: "click",
                    label: "Close quiz",
                  })
                  redirect()
                }}
              >
                Sair
              </Button>
            </div>
            <header className="flex items-center h-fit justify-between w-full">
              <h4 className="text-black">{question?.title}</h4>
              
            </header>
          </>
        )}
        <div className="flex flex-col gap-5">
          {currentQuestion < product?.quiz.length! ? (
            product?.quiz[currentQuestion].options.map((item, index) => {
              return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-100 cursor-pointer p-5 rounded-md"
                onClick={() => {
                    toast({
                      title: 'Anotado!',
                      description: 'Obrigado por responder!',
                      type: 'foreground'
                    })
                  

                  setCurrentQuestion(currentQuestion + 1)
                }}
              >
                <span className="text-black">{item?.value}</span>
              </motion.div>
            )})
          ) : (
            <div className="w-full flex flex-col items-center justify-center text-black">
                <span>Você terminou o quiz!</span>
                <span>Redirecionando...</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default Quiz

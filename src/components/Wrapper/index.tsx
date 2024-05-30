import React from "react"

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    classes?: {
        container?: string
        content?: string
    }
}

const Wrapper: React.FC<WrapperProps> = ({ children, classes = {
  container: '',
  content: ''
}, ...props }) => {
  return (
    <div {...props} className={"flex items-center justify-center px-5" + ' ' + classes.container}>
      <div className={"w-full max-w-screen-xl flex flex-col text-center items-center" + ' ' + classes.content}>{children}</div>
    </div>
  )
}

export default Wrapper

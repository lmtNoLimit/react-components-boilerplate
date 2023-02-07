import React from 'react'

type ButtonType = 'icon' | 'text' | 'iconWithText'

type IconPosition = 'left' | 'right' | 'top'

type ButtonHorizontalAlignment = 'topLeft' | 'center' | 'topRight' | 'bottomLeft' | 'bottomRight'

interface BaseButtonProps {
  btnText: string | React.ReactNode
  btnType: ButtonType
  iconPosition?: IconPosition
  fullWidth?: boolean
  align: ButtonHorizontalAlignment
  children: React.ReactNode
}

type ButtonProps = Partial<BaseButtonProps & React.HTMLAttributes<HTMLButtonElement>>

const Button = React.forwardRef(function Button(props: ButtonProps, ref: React.Ref<HTMLButtonElement>) {
  const {
    btnText = 'Button Text',
    iconPosition = 'left',
    btnType = 'text',
    fullWidth,
    align,
    children,
    ...restProps
  } = props

  const content: React.ReactNode[] = []

  if(['icon', 'iconWithText'].includes(btnType)){
    React.Children.toArray(children).forEach(c => content.push(c))
  }

  if(['text', 'iconWithText'].includes(btnType)){
    content.push(btnText)
  }

  return (
    <button {...restProps} ref={ref}>
      {content}
    </button>
  )
})

export default Button

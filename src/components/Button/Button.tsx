import React from 'react'
import { styled } from '../../stitches'

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

const StyledButton = styled<any, any>('button', {
  display: 'inline-block',
  padding: '12px 20px',
  textAlign: 'center',
  textDecoration: 'none',
  outline: 0,
  variants: {
    iconPosition: {
      left: {
        '& span': {
          marginRight: '5px',
        },
      },
      right: {
        '& span': {
          marginLeft: '5px',
        },
      },
      top: {
        '& span': {
          marginBottom: '5px',
          display: 'block',
        },
      },
    },
  },
  '& span': {
    color: 'inherit',
  },
})

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
    <StyledButton iconPosition={iconPosition} {...restProps} ref={ref}>
      {content}
    </StyledButton>
  )
})

export default Button

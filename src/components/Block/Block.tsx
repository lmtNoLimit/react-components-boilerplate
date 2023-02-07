import React, { HTMLProps } from 'react'
import { styled } from '../../stitches'

interface BlockProps extends HTMLProps<HTMLDivElement> {}

const StyledBlock = styled<any, any>('div', {
  minHeight: '70px',
})

const Block = React.forwardRef(function Block(props: BlockProps, ref: React.Ref<HTMLDivElement>) {
  const { children, ...restProps } = props

  return (
    <StyledBlock ref={ref} {...restProps}>
      {children}
    </StyledBlock>
  )
})

export default Block

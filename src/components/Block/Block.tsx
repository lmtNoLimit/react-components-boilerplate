import React, { HTMLProps } from 'react'

interface BlockProps extends HTMLProps<HTMLDivElement> {}

const Block = React.forwardRef(function Block(props: BlockProps, ref: React.Ref<HTMLDivElement>) {
  const { children, ...restProps } = props

  return (
    <div ref={ref} {...restProps}>
      {children}
    </div>
  )
})

export default Block

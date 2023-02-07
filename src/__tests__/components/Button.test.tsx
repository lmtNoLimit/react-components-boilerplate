import React, { ReactNode } from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button from '../../components/Button/Button'

describe('Button component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Button btnText="Button Text" btnType="text" align="topLeft" />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('renders button text correctly', () => {
    const { getByText } = render(<Button btnText="Button Text" btnType="text" align="topLeft" />)
    expect(getByText('Button Text')).toBeInTheDocument()
  })

  it('renders icon correctly', () => {
    const Icon = () => <span>Icon</span>;
    const { getByText } = render(<Button btnText="Button Text" btnType="iconWithText" align="topLeft"><Icon /></Button>);
    expect(getByText('Icon')).toBeInTheDocument();
  });

  it('aligns button correctly', () => {
    const { container } = render(<Button btnText="Button Text" btnType="text" align="center"/>)
    expect(container.firstChild).toHaveStyle('text-align: center')
  })

  it('handles button click correctly', () => {
    const handleClick = jest.fn()
    const { container } = render(
      <Button btnText="Button Text" btnType="text" align="center" onClick={handleClick} />
    )
    fireEvent.click((container as any).firstElementChild)
    expect(handleClick).toHaveBeenCalled()
  })
})

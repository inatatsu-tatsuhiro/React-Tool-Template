import React from 'react'
import { TextBox as Component } from './TextBox'
import { render } from '@testing-library/react'

describe('/TextBox', () => {
  const Target: React.FC = () => <Component />

  describe('適切にレンダーできる', () => {
    const { container } = render(<Target />)
    expect(container).toMatchSnapshot()
  })
})

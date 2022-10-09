import React from 'react'
import { Button as Component } from './Button'
import { render } from '@testing-library/react'

describe('/Button', () => {
  const Target: React.FC = () => <Component label="TEST BTN" />

  describe('適切にレンダーできる', () => {
    const { container } = render(<Target />)
    expect(container).toMatchSnapshot()
  })
})

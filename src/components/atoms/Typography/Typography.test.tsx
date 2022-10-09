import React from 'react'
import { Typography as Component } from './Typography'
import { render } from '@testing-library/react'

describe('/Typography', () => {
  const Target: React.FC = () => <Component text="TEST" />

  describe('適切にレンダーできる', () => {
    const { container } = render(<Target />)
    expect(container).toMatchSnapshot()
  })
})

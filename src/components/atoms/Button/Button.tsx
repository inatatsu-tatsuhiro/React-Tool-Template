import React, { FC } from 'react'

type Props = {
  label: string
}

export const Button: FC<Props> = ({ label }) => {
  return <div>{label}</div>
}

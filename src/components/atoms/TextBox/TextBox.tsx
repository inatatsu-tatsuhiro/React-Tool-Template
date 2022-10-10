import React, { FC } from 'react'

type Props = {
  label: string
}

export const TextBox: FC<Props> = ({ label }) => {
  return <div>{label}</div>
}

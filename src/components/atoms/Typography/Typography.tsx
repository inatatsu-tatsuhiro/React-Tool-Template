import React, { FC } from 'react'

type Props = {
  text: string
}

export const Typography: FC<Props> = ({ text }) => {
  return <>{text}</>
}

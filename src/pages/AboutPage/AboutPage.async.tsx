import { lazy } from 'react'

export const AboutPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // для теста, затем убрать
      setTimeout(() => resolve(import('./AboutPage')), 1000)
    })
)

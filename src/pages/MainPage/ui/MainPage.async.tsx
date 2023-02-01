import { lazy } from 'react'

export const MainPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // для теста, затем убрать
      setTimeout(() => resolve(import('./MainPage')), 1000)
    })
)

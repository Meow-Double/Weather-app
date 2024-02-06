import type { FC } from 'react'
import './App.css'
import { Button, ButtonVariant } from 'shared/components'
import { MainPage } from 'pages'

export const App: FC = () => {

  return (
    <>
    <MainPage />
    <Button view={ButtonVariant.Primary}/>
    </>
  )
}

export default App

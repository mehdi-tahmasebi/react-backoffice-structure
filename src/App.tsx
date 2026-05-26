import type { FC } from "react"
import { Routes, Route } from "react-router-dom"






const App: FC = () => {
  return (

    <Routes>
      <Route path="/" element={<h1>Home Page</h1>} />
    </Routes>
  )
}

export default App

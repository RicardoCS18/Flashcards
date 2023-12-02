
import './App.css'
import { Navbar } from "./components/Navbar.js"
import Tab from './components/UserComponent/Tab.js'

function App() {
  const array = [{ title: "Log In" }, { title: "Register" }]
  return (
    <>
      <Navbar>Login, Sign Up</Navbar>
      <h1>Hi</h1>
      <Tab />

    </>
  )
}

export default App

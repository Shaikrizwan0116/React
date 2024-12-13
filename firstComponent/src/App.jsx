import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './MyButton'

function App() {
  const [count, setCount] = useState(0);

  const handelClickMe=()=>{
    console.log("Clicked Me");
  }

  const handleCartButton=()=>{
    alert("Clicked on Cart button");
  }

  const handlePaymentButton=()=>{
    console.log("Clicked on Payment button");
  }

  const handleLoginButton=()=>{
    alert("Clicked on Login button");
  }

  return (

    <div>
      <MyButton buttonText="Click Me" bgColor="Orange" clickMe={handelClickMe}/>
      <MyButton buttonText="Cart" bgColor="Blue" clickMe={handleCartButton}/>
      <MyButton buttonText="Payment" bgColor="Green" clickMe={handlePaymentButton}/>
      <MyButton buttonText="Login" bgColor="Red" clickMe={handleLoginButton}/>
    </div>
  )
}

export default App

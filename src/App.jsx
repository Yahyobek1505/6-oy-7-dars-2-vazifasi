import { useState, useEffect } from 'react'
import Header from './components/Header'
import Card from './components/Card'
import './App.css'

function App() {


  return (
    <>
    <Header></Header>
    <div className="container">    
<div className="main">
<Card></Card>
<Card></Card>
<Card></Card>
<Card></Card>
<Card></Card>
<Card></Card>
</div>
    </div>
    </>
  )
}

export default App

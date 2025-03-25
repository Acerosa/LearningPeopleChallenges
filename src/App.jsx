import { useState } from 'react'
import Productcard from './ProductCard'
import './App.css'


function App() {
  return (
    <>
      <Productcard
        title="Cool Shoes"
        price="$49.99"
        desc="Comfortable and stylish shoes for everyday wear."
        image="broken-url.jpg"
      />
    </>
  )
}

export defautl App

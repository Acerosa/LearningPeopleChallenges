import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Food from './Food'
import Card from './Card'
import Me from './assets/me.png'
import Student from './Student'
import UserGreeting from './UserGreeting'
import List from './List'
import NewButton from './NewButton'
import ProfilePic from './ProfilePic'
import StateDemo from './StateDemo'
import Counter from './Counter'

function App() {

  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 }
];

const animals = [
  { id: 1, name: "Elephant", lifespan: 60 },
  { id: 2, name: "Parrot", lifespan: 80 },
  { id: 3, name: "Dog", lifespan: 13 },
  { id: 4, name: "Cat", lifespan: 15 },
  { id: 5, name: "Tortoise", lifespan: 100 }
];


  return (
    <>
      {/* <Header />
      <Card
        image={Me}
        name="Ricardo Rosa"
        description="I'm a private tutor and a software engineer"
      /> */}
      {/* <Food />
      <Student name="Rodrigo" age = "this" nationality ="Roman" isStudent ={true}/>
      <Student name="Maria" age = {30} nationality ="Chinese" isStudent ={true}/>
      <Student name="Maria" age = {30} nationality ="Chinese" isStudent ={true}/>
      <UserGreeting username="" isLoggedIn={true}/> */}

      {/* {fruits.length > 0 ? <List items={fruits}  category="Fruits" />: null }
      {animals.length > 0 && <List items={animals} category="Animals" /> } */}
      {/* <Student />
      <Footer /> */}
      {/* <NewButton /> */}
      {/* <ProfilePic /> */}
        <Counter />
    </>
  );
}

export default App;
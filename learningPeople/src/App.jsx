import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Car from './UpdateObjects11/UpdateObjects'
import ProgrammingLanguages from './ArrayUpdateState12/ProgrammingLanguages'
import AppSettings from './ObjectArrayUpdate13/AppSettings13'
import ToDoList from './ToDoList14/TodoList'
import Colours from './UseEffect15/UseEffect'


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
        {/* <Counter /> */}

        {/* <OnChageDemo /> */}
        {/* <PickColour /> */}
        {/* <CounterUpdate /> */}

        {/* <MyCard name="Ricardo Rosa" title="Tutor"  /> */}

        {/* <Car /> */}

        {/* <ProgrammingLanguages /> */}

        {/* <AppSettings /> */}

        {/* <ToDoList /> */}

        <Colours/>

    </>

   
  );
}

export default App;
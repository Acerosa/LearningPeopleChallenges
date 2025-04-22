import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Car from './UpdateObjects11/UpdateObjects'
import ProgrammingLanguages from './ArrayUpdateState12/ProgrammingLanguages'
import AppSettings from './ObjectArrayUpdate13/AppSettings13'
import ToDoList from './ToDoList14/TodoList'
import Colours from './UseEffect15/UseEffect'
import DigitalClock from './DigitalClock16/DigitalClock'
import ThemeExample from './CreateContext17/Them'
import Magnifier from './UseRef18/UseRef'
import Card from './Card02/Card'
import StopWatch from './StopWatch19/StopWatch'
import Student from './Props04/Student'
import UserCard from './DeconstructingJS01/UserCard'
import { users } from './DeconstructingJS01/users'
import MouseTrackerWithScheduler from './Observables, Observers & Schedulers/Observable'

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

const filteredUsers = users.filter(user => user.skills.includes("React"));

  return (
    <>
      {/* <Header />
      <Card
        image={Me}
        name="Ricardo Rosa"
        description="I'm a private tutor and a software engineer"
      /> */}
       {/* <Food /> */}
      {/* <Student name="Rodrigo" age = "this" nationality ="Roman" isStudent ={true}/>
      <Student name="Maria" age = {30} nationality ="Chinese" isStudent ={true}/>
      <Student name="Maria" age = {30} nationality ="Chinese" isStudent ={true}/>
      <Student /> */}
      {/* <UserGreeting username="" isLoggedIn={true}/>  */}

      {/* {fruits.length > 0 ? <List items={fruits}  category="Fruits" />: null }
      {animals.length > 0 && <List items={animals} category="Animals" /> } */}
      
      {/* <Footer />  */}
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

        {/* <DigitalClock/> */}
        {/* <ThemeExample /> */}
        {/* <Magnifier /> */}
        {/* <Card name={"Ricardo"}/> */}
        {/* <StopWatch /> */}
      
      
      {/* <div className="container">
      <h1>User Profiles</h1>
      {users.map((user, index) => (
        <UserCard key={index} {...user} />
      ))}
      </div> */}

      {/* Filtered card */}

    {/* <div className="container">
      <h1>User Profiles (React developers only)</h1>
      {filteredUsers.map((user, index) => (
        <UserCard key={index} {...user} />
      ))}
    </div>   */}

    <MouseTrackerWithScheduler />
    </>
   
  );
}

export default App;

import './App.css'
import Person from './Components/Person'
import Button from './Components/Button'
import { useState } from 'react'
import Header from './Components/Header';
import { List } from './Components/List';
const list=[
  "list1",
  "list2",
  "list3",
  "list4",
  "list15",
  "list16",
  "list17",
  "list18",
]
function App() {
  const[text,setText]=useState("");
  const handleClick=()=>{
    setText("hello how are you");
  }
  return (
    <>
     <Header title={"this is my heading"}/>
      <Person name="Ashish" age="22"/>
      <Button text={text} onClick={handleClick}/>
      <List list={list}/>
    </>
  )
}

export default App

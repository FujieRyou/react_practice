import { useEffect } from "react"
import { useRef } from "react"
import { useState } from "react"
import TestComponent from "./components/testComponent"
import styles from "./scss/style.scss"
import Todolist from "./components/todoComponent"
import CountUp from "./components/countUp"
import SwitchFlag from "./components/switchFlag"
import PropsPractice from "./components/props1"
import Profile from "./components/profile"
import ChangeIvent from "./components/ivent"
import InputInterlocking from "./components/inputInterlocking"
import ShuffleNumArray from "./components/ShuffleNumArray"
import ArrayDisplay from "./components/arrayListDisplay"
import ArrayFilter from "./components/arrayFilter"
import ConditionalBranch from "./components/ConditionalBranch"


const App = () =>{
  const profileInfo = [
    {name:"Takasi",age:20,from:"大阪"},
    {name:"Hirosi",age:19,from:"東京"},
    {name:"Musasi",age:21,from:"名古屋"},
]
const animals = ["Dog","Cat","Rat"];


  return(
    <div>
      {/* todolist作成中 */}
      {/* <Todolist /> */}

      {/* 押すたびにcountがupする(useState練習) */}
      {/* < CountUp /> */}

      {/* 押すたびにON,OFFがきりかわる(useState練習) */}
      {/* <SwitchFlag /> */}

    {/* props練習 */}
    {/* <PropsPractice color="red"/>
    <PropsPractice num={123}/>

    <Profile 
      name={profileInfo[0].name}
      age={profileInfo[0].age}
      from={profileInfo[0].from}
    />

    <Profile
      {...profileInfo[1]}
    />

    <Profile/>

    <ChangeIvent />

    <InputInterlocking />

    <ShuffleNumArray /> */}

    {/* <ArrayDisplay /> */}

    {/* <ArrayFilter /> */}

    {/* <ConditionalBranch animals={animals} /> */}

    


    </div>


    



  )
}


export default App

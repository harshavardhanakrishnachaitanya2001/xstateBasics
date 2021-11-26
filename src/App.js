import React from 'react'
import { Machine } from 'xstate'
import { useMachine } from '@xstate/react'

const machineExample = Machine({
  initial:"off",
  states:{
    off:{
      on:{
        ON:"activateProcess",
        ACTIVATE:"activateProcess"
      }
    },
    activateProcess:{
      on:{
        DEACTIVATE:"deactivateProcess"
      }
    },
    deactivateProcess:{
      on:{
        TURNOFF:"off"
      }
    }
  }
})

export default function App(){
  const [machine,send] = useMachine(machineExample);
  return (
    <>
  <p>the currently the machine is in the {machine.value} state</p>
  <button onClick = {() => send('ON')}>ON THE MACHINE</button>
  <button onClick = {() => send('ACTIVATE')}>ACTIVATE PROCESS</button>
  <button onClick = {() => send("DEACTIVATE")}>DEACTIVATE PROCESS</button>
  <button onClick = {() => send("TURNOFF")}>TURN OFF PROCESS</button>
  </>
  )
}


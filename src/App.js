import {createMachine} from 'xstate'
import {useMachine} from '@xstate/react'

const toggleMachine = createMachine({
  initial:"inactive",
  states:{
    inactive:{
      on:{
        TOGGLE:'active'
      }
    },
    active:{
      on:{
        TOGGLE:'inactive'
      }
    }
  }
})

export default function App(){
  const [state, send] = useMachine(toggleMachine)
  return (
    <>
      <button onClick={() => {send('TOGGLE')}}>toggle</button>
      {state.matches("active")&&<span>We are active</span>}
      {state.matches('inactive')&&<span>We are inactive</span>}
    </>
  )
}
/*
import React from 'react'
import { createMachine } from 'xstate' ==> we are importing createMachine from the xstate state management library
import { useMachine } from '@xstate/react' ==> We are importing the useMachine from the xstate. Since this is a hook, we need to import it from react and since it is used to utilize the created machine imported from xstate, we need to import it from '@xstate/react'

const machineExample = createMachine({ ==> Creating the state machine called machineExample
  initial:"off", ==> Defined initial state of the machine to be the state 'off'
  states:{ ==> This object tells what states must the machine have
    off:{ ==> When the machine is in the off state
      on:{ ==> Defining the transition
        ON:"activateProcess", ==> when the ON event occurs, we are telling the machine to go to the 'activeProcess' state from the 'off' state
        ACTIVATE:"activateProcess" ==> When the ACTIVE event occurs, we are telling the machine to go to the 'activeProcess' state from the 'off' state
      }
    },
    activateProcess:{ ==> Similar to the way we defined for the 'off' state,
      on:{ ==> We are telling the machine to
        DEACTIVATE:"deactivateProcess" ==> deactivate state on the occurance of the DEACTIVATE event
      }
    },
    deactivateProcess:{ ==> When we are in the deactivate state and the TURNOFF event occurs, we are telling the machine to go from 'deactivateProcess' state to the 'off' state
    ==> The above line is the explaination of the code from line 47 to 50 (leaving the line number 48 as it is just the comment)
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
*/
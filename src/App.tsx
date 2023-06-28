import React, { useState } from 'react';
import './App.css';
import { Modals } from './Modals';
import {UncontrolledOnBoarding} from "./UncontrolledOnBoarding";
// @ts-ignore
const StepOne  = ({goToNext}) => (
  <>
    <h1>Step 1</h1>
  <button onClick={goToNext}>Next</button>
  </>
)
// @ts-ignore
const StepTwo  = ({goToNext}) => (
  <>
    <h1>Step 1</h1>
  <button onClick={goToNext}>Next</button>
  </>
  )
// @ts-ignore
const StepThree  = ({goToNext}) => (
  <>
    <h1>Step 1</h1>
  <button onClick={goToNext}>Next</button>
  </>
  )
function App() {
    return (
      // @ts-ignore
    <UncontrolledOnBoarding >
      {/*@ts-ignore*/}
      <StepOne />
      {/*@ts-ignore*/}
      <StepTwo />
      {/*@ts-ignore*/}
      
      <StepThree />
    </UncontrolledOnBoarding >
  );
}

export default App;

import React from 'react'
import './styles.css'
import logo from './logo.svg'
import Clicker from './Clicker'

export const App = () => {
  return (
    <>
      <h1>
        Hello React Typescript - {process.env.NODE_ENV} {process.env.name}
      </h1>
      <img src={logo} alt="React logo" width="300" height="300" />
      <Clicker />
    </>
  )
}

import React from 'react'
import { useState } from 'react'
import './Style.css'
import { useEffect } from 'react'
function Square({value , onClick}){
  return (
    <button onClick={onClick} className='square'>
      {value}
    </button>
  )
}
function Tictactoe() {
  const [squares , setsquares] = useState(Array(9).fill(""))
  const [x , setx] = useState(true)
  const [status , setstatus] = useState("")
  function handleclick(getcurrentsquare){
    let cpysquares = [...squares]
    if(getwinner(cpysquares) || cpysquares[getcurrentsquare]){
      return
    }
    cpysquares[getcurrentsquare] = x ? 'X' : 'O'
    setx(!x)
    setsquares(cpysquares)
  }
  function handlerestart(){
    setx(true)
    setsquares(Array(9).fill(""))
  }
  function getwinner(squares){
    const winningpattern = [
      [0,1,2] ,
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2 ,5 , 8],
      [0,4,8],
      [2, 4, 6],
    ]
    for(let i = 0 ; i<winningpattern.length ; i++ ){
      const [x , y , z] = winningpattern[i]
      if(squares[x] && squares[x] === squares[y] && squares[x] === squares[z] ){
        return squares[x]
      }
    }
    return null
  }
  useEffect(() =>{
    if(!getwinner(squares) && squares.every((item) => item != "")){
      setstatus(`Match ties ! please restart`)
    }
    else if(getwinner(squares)){
      setstatus(`winner is ${getwinner(squares)}`)
    }
    else{
      setstatus(`next player : ${x ? 'X' : 'O'}`)
    }
  } , [squares] , x)
  return (
    <div className='tic-tac-toe-container'>
      <div className='row'>
        <Square value = {squares[0]} onClick = {() => handleclick(0)} />
        <Square value = {squares[1]} onClick = {() => handleclick(1)} />
        <Square value = {squares[2]} onClick = {() => handleclick(2)} />
      </div>
      <div className='row'>
      <Square value = {squares[3]} onClick = {() => handleclick(3)} />
      <Square value = {squares[4]} onClick = {() => handleclick(4)} />
      <Square value = {squares[5]} onClick = {() => handleclick(5)} />
      </div>
      <div className='row'>
      <Square value = {squares[6]} onClick = {() => handleclick(6)} />
      <Square value = {squares[7]} onClick = {() => handleclick(7)} />
      <Square value = {squares[8]} onClick = {() => handleclick(8)} />
      </div>
      <h1>{status}</h1>
      <button onClick={handlerestart} >
        Restart
      </button>
    </div>
  )
}

export default Tictactoe

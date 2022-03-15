import React from 'react';
import ReactDOM  from 'react-dom';
//import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp'

import './index.css'; //Aqui va el estilo

const divRoot = document.querySelector('#root');

//ReactDOM.render( <PrimeraApp saludo="Hola, soy Goku"/> ,divRoot ); //Que quiero poner y donde 
ReactDOM.render( <CounterApp /> ,divRoot ); //Que quiero poner y donde 



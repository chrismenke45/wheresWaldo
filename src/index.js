'use strict';
//imports from firebase
import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';

//import from my firebase functions, variables
import { getFirebaseConfig } from './firebaseComponents/firebase-config.js';
import { saveScore, getScores } from './firebaseComponents/firebaseSet.js'
import { initFirebaseAuth,  signIn, signOutUser } from './firebaseComponents/firebaseSignInOut'

//import functions
import board from './components/board.js'
import homeScreen from './components/homeScreen.js';
import listeners from './components/listeners.js'
import options from './components/options.js'
import showScores from './components/showScores.js';
//import wheres waldo card information
import easy from './components/easy.js'
import normal from './components/normal.js';
import hard from './components/hard.js'





//this needs to go first
const firebaseAppConfig = getFirebaseConfig(); //firebase object needed to run firebase
initializeApp(firebaseAppConfig); //init command for firebase
//this needs to go first



let main = document.getElementById('main'); //set main as place where all DOM elements get appended to

homeScreen() //set homescreen on app open

//get elements from header to switch to different pages
const homeSwitch = document.getElementById('homeSwitch')
const easySwitch = document.getElementById('easySwitch')
const normalSwitch = document.getElementById('normalSwitch')
const hardSwitch = document.getElementById('hardSwitch')
const scoreSwitch = document.getElementById('scoreSwitch')
// signin/signout buttons fro google sign in
const signInButtonElement = document.getElementById('sign-in');
const signOutButtonElement = document.getElementById('sign-out');

const gameStart = (level, user) => { //this starts the game for each level
  main.innerHTML = ''; //remove everything from main
  if (user) { //if the user is signed in
    main.appendChild(options(level, user.displayName))//set options bar with user info
  } else {
    main.appendChild(options(level, ''))//set options bar with blank info
  }
  main.appendChild(board(level)) //setboard to whichever level
  listeners(level, saveScore) //add event listeners to game
}
const buttonHighlight = (clickedSwitch) => { //this function changes color ob button in header that corrisponds to page in use
  homeSwitch.classList.remove('selectedSection')
  easySwitch.classList.remove('selectedSection')
  normalSwitch.classList.remove('selectedSection')
  hardSwitch.classList.remove('selectedSection')
  scoreSwitch.classList.remove('selectedSection')
  clickedSwitch.classList.add('selectedSection')

}

homeSwitch.addEventListener('click', () => { //returns user to homepage
  clearInterval(window.trackTime)//turns off game timer if active
  buttonHighlight(homeSwitch) //highlight home button
  main.innerHTML = '' //empty main 
  homeScreen() //set home screen
})
easySwitch.addEventListener('click', () => {
  buttonHighlight(easySwitch) //highlight easy buttn
  gameStart(easy(), getAuth().currentUser) //set up game on easy level
})
normalSwitch.addEventListener('click', () => {
  buttonHighlight(normalSwitch) //highlight normal buttton
  gameStart(normal(), getAuth().currentUser) //set up game on normal level
})
hardSwitch.addEventListener('click', () => {
  buttonHighlight(hardSwitch) //highlight hard button
  gameStart(hard(), getAuth().currentUser) //set game on hard mode
})
scoreSwitch.addEventListener('click', () => {
  buttonHighlight(scoreSwitch) //highlight score button
  main.innerHTML = 'Loading...'; //set main to loading so user knows data is loading
  clearInterval(window.trackTime) //clear timer if active
  let scoreLocations = [easy().level, normal().level, hard().level] //make array with score names from firebase
  Promise.all(scoreLocations.map(place => { //set promise for all the data to be returned
    return getScores(place) //get scores for each level from firebase
  }))
    .then(arr => {
      main.innerHTML = ''
      main.appendChild(showScores(arr, scoreLocations)) //show scores in main
    })
    .catch(error => {
      console.log('Scores could not be loaded', error); //show error in console
      alert('Scores could not be loaded, try refreshing the page') //alert user to refresh page to retry getting data
    })
})

signOutButtonElement.addEventListener('click', signOutUser); //allow signout
signInButtonElement.addEventListener('click', signIn); //allow sign in

initFirebaseAuth(); //page responds when user signs in/out


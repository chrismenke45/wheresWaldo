
const listeners = (pokeObject, saveScore) => {
    clearInterval(window.trackTime) //clear timer if it was already going
    let scoreButton = document.getElementById('scoreButton'); //get scoreButton
    let scoreName = document.getElementById('scoreName'); //get scoreInput
    let allClicked = [] //initialize array for checking if all pokemon have been found
    
    let time = 0 //set timer to 0
    window.trackTime = setInterval(() => {//set interval to increase timer
        if (time <= 1000) {
            if ((Math.round(time * 10) / 10) % 1 == 0) { //set timer onscreen 
                document.getElementById('timer').innerHTML = (Math.round(time * 10)) / 10 + '.0';//add ".0" at the end of whole numbers
            } else {
                document.getElementById('timer').innerHTML = (Math.round(time * 10)) / 10;
            }
            time += .1 //increase time by .1 s
        } else {
            clearInterval(trackTime); //stop counting if timer goes over 1000
        }
    }, 100)//count ever 100 ms

    pokeObject.pokemons.forEach((pokemon, index) => { //for each pokeon
        allClicked[index] = false; //set array with if its been clicked to false
        var smallImg = document.querySelector(`[data-species=${pokemon.species}]`); //set element data to show which pokemon so it can be called later
        var clickable = document.getElementById(pokemon.species); // get pokemon from board, the ones the people will find
        clickable.addEventListener('click', (e) => { //if found and clicked then...
            e.preventDefault(); //prevent page reload
            allClicked[index] = true; //set pokemon to have been found
            smallImg.classList.add('optionPic') // add class to small image to make it opaque so the user knows they found it
            if (!allClicked.includes(false)) { //if all pokemon have been found
                clearInterval(window.trackTime)//stop timer
                scoreButton.hidden = false//show score submit button
                scoreName.hidden = false//show score name inout
                scoreButton.addEventListener('click', (e) => {//add event listener to score button to submit score
                    e.preventDefault()
                    if (document.getElementById('scoreName').value == '') {//dont allow user to submit score with no name
                        alert('Please enter a name with your time')
                        return;
                    }
                    saveScore(document.getElementById('scoreName'), document.getElementById('timer').innerHTML, pokeObject.level) //save score to firebase
                    scoreButton.hidden = true//hide score submit button
                    scoreName.hidden = true//hidescore name input
                })

            }
        })
    })
}
export default listeners


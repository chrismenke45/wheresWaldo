
const options = (pokeObject, userName) => {
    const div = document.createElement('div')
    div.id = 'displayBar' //bar with pokemon to find and time
    const smallDiv = document.createElement('div') //for time and name submit button
    smallDiv.id = 'submitContainer'
    div.appendChild(smallDiv)
    const p = document.createElement('p') //element with timer
    p.id = 'timer'
    smallDiv.appendChild(p)
    
    const scoreName = document.createElement('input'); //input for user to put name for score
    scoreName.type = 'text'
    scoreName.maxLength = '15'
    scoreName.id = 'scoreName'
    scoreName.value = userName //set preset value to google login
    scoreName.placeholder = 'Name'
    scoreName.hidden = true; //hide name input
    const scoreButton = document.createElement('button') //button for user to submit score
    scoreButton.id = 'scoreButton';
    scoreButton.innerHTML = 'Save Score';
    scoreButton.hidden = true
    const scoreSubmit = document.createElement('form'); //make form for user input
    scoreSubmit.id = 'scoreSubmit'   
  
    //add button classes to button so it matches others
    scoreButton.classList.add("mdl-button")
    scoreButton.classList.add("mdl-js-button")
    scoreButton.classList.add("mdl-js-ripple-effect")
    scoreButton.classList.add("mdl-color-text--white")

    scoreSubmit.appendChild(scoreName)
    scoreSubmit.appendChild(scoreButton)
    smallDiv.appendChild(scoreSubmit);


    pokeObject.pokemons.forEach(pokemon => { //for each poekmone to find display them in the displaybar
        let img = document.createElement('img');
        img.src = pokemon.picture;
        img.setAttribute('data-species', pokemon.species)
        img.width = 75;
        img.height = 75;
        img.alt = pokemon.species
        div.appendChild(img)
    })
    return div
}
export default options;
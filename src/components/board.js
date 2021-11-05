const board = (pokeObject) => {
    const div = document.createElement('div'); 
    const img = document.createElement('img');
    img.src = pokeObject.backgroundImageUrl;
    img.useMap = '#' + pokeObject.level //set image map to level name
    img.alt = pokeObject.level + ' level' //set alt if image can't be found
    img.id = 'board' //set id
    
    const imgMap = document.createElement('map'); //for image map
    imgMap.name = pokeObject.level //set name to level
    pokeObject.pokemons.forEach(pokemon => { // for each pokemon add place to click
        let area = document.createElement('area');
        area.id = pokemon.species;
        area.title = pokemon.species;
        area.coords = pokemon.coords; //coordinates for hit box
        area.shape = 'rect';
        area.href = '';
        imgMap.appendChild(area)
    })
    div.appendChild(img);
    div.appendChild(imgMap);
    return div;
}
export default board;
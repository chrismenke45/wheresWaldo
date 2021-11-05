const showScores = (array, scoreLocations) => {
    let div = document.createElement('div'); //create div to hold scores
    div.id = 'scoreDisplay'

    array.forEach((query, index) => { // for each query in array make score display
        let oneSet = document.createElement('div') //create element for individual scoreset
        oneSet.classList.add = 'individualScoreSet'
        let scoreList = document.createElement('ol')//this list holds the scores for one level
        let scoreLabel = document.createElement('h4')//this titles the score list with the level name
        scoreLabel.innerHTML = scoreLocations[index].toUpperCase() 
        let unsorted = []; //initialize empty array fro score names and times
        query.forEach(doc => { //set name and time in array 
            let scoreData = {
                name: doc.data().name,
                time: doc.data().time
            }
            unsorted.push(scoreData)
        })
        let sorted = unsorted.sort((a, b) => {//set scores in order of fastest to slowest
            return a.time - b.time
        })
        sorted.forEach(nameTime => { //create dom list element for each individual score
            let score = document.createElement('li')
            score.innerHTML = nameTime.name + ' ' + nameTime.time + 's';
            scoreList.appendChild(score)
        })
        oneSet.appendChild(scoreLabel)
        oneSet.appendChild(scoreList)
        div.appendChild(oneSet)
    })
    return div
}
export default showScores
'use strict';

import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
} from 'firebase/firestore';

async function getScores(place) { //get scores info for specified level (place)
    const querySnapshot = await getDocs(collection(getFirestore(), place));
    return querySnapshot;
}

// Saves a new score on the Cloud Firestore.
async function saveScore(scorer, scoreTime, place) { //save score to firebase
    // Add a new score to the Firebase database.
    try {
        await addDoc(collection(getFirestore(), place), {
            name: scorer.value,
            time: scoreTime
        });
    }
    catch (error) {
        console.error('Error adding score to Firebase Database', error); //log error to forbase
    }
}

export { getScores, saveScore }
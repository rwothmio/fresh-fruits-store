//returns a list of data of all the fruits in the database

import fruits from "../assets/fruitsData.mjs";

const getAllFruits = () =>{
    const allFruits = []
    const ids = Object.keys(fruits)
    for (let id of ids){
        fruits[id].forEach(fruit => allFruits.push(fruit))
    }
    return allFruits
}

export default getAllFruits;
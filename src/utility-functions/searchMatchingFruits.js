//Given a string query, this function will return the fruits whose names include the query

import getAllFruits from "./getAllFruits";

const allFruits = getAllFruits()
 const searchMatchingFruits = query =>{
    const matches = allFruits.filter(fruit => fruit.name.includes(query))
    return matches
 }

 export default searchMatchingFruits;
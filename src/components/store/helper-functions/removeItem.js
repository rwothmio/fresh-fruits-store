/*This function takes an object and a key to be removed from the object, then
returns the new objece*/

const removeItem = (obj, key) => {
    const objProps = Object.keys(obj)
    const filteredProps = objProps.filter(prop => prop !== key)
    const newObj = {}
    filteredProps.map(prop => newObj[prop] = obj[prop])
    return newObj
}

export default removeItem;

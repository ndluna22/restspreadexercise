//ES2015 

const filterOutOdds = (...restArgs) => restArgs.filter(num => num % 2 ===0);

  
//findMin

const findMin = (...restArgs) => Math.min(...restArgs);   //first is parameter, then turn in to array


//mergeObjects

const mergeObjects = (first, second) => ({...first, ...second});  //first,second parameters, returns array


//doubleAndReturnArgs

const doubleAndReturnArgs = (arr, ...restArgs) => ({...arr, ...restArgs.map(num => num *2)});


//sliceAndDice

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = items => {
    let num = Math.floor(Math.random() * items.length);
    return [...items.slice(o, num), ...items.slice(num +1)];
}

/** Return a new array with every item in array1 and array2. */


const extend = (array1, array2) => {
    return [...array1, ...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */


const addKeyVal = (obj,key,val) => {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
}


/** Return a new object with a key removed. */



const removeKey= (obj,key) => {
    let newObj = {...obj}
    delete newObj[key]
    return newObj;
}

/** Combine two objects and return a new object. */

const combine= (obj1, obj2) => {
    return {...obj1, ...obj2};
}

/** Return a new object with a modified key and value. */

const update= (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
}
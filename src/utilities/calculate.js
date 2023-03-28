const add = (first, second) =>{
    return first + second;
}

const multiply =(first, second) =>{
    return first * second;
}

// const numbers = [20, 25, 30, 235];
// const sumReducer = (previous, current) => previous + current
// const total = numbers.reduce(sumReducer, 0)

// const items = [
//     {id: 1, name: 'alta', price: 100},
//     {id: 2, name: 'alta', price: 100},
//     {id: 3, name: 'alta', price: 100},
//     {id: 4, name: 'alta', price: 100},
//     {id: 5, name: 'alta', price: 100}
// ]

// const itemsSumReducer = (previous, current) => previous + current.price;
// const itemTotal = items.reduce(itemsSumReducer, 0)

const getTotalPrice = products => {
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0)
    return total;
}

export {
    add, 
    multiply, 
    getTotalPrice as getTotal};
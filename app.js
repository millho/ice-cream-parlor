
// arrays
const iceCream = [{
    name: 'cookie dough',
    price: 1.25,
    quantity: 0
},
{
    name: 'vanilla',
    price: 1,
    quantity: 0
},
{
    name: 'strawberry',
    price: 1.25,
    quantity: 0
}]

const toppings = [{
    name: 'sprinkles',
    quantity: 0,
    price: .25
},
{
    name: 'chocolate chips',
    price: .25,
    quantity: 0
},
{
    name: 'cookie chunks',
    price: .5,
    quantity: 0
}]

const cones = [{
    name: 'regular',
    price: .50,
    quantity: 0
},
{
    name: 'waffle',
    price: 1,
    quantity: 0
},
{
    name: 'bowl',
    price: 0,
    quantity: 0
}]


// alias'
let totalElem = document.getElementById('total')

let iceCreamCartElem = document.getElementById('iceCreamCart')

let toppingsCartElem = document.getElementById('toppingsCart')

let coneCartElem = document.getElementById('coneCart')


// functions

function orderIceCream(type) {

    // debugger

    let flavor = iceCream.find(flavor => flavor.name == type)

    flavor.quantity++

    drawIceCreamCart()
}

function orderToppings(type) {

    let flavor = toppings.find(flavor => flavor.name == type)

    flavor.quantity++

    drawToppingsCart()
}

function orderCone(type) {

    let flavor = cones.find(flavor => flavor.name == type)

    flavor.quantity++

    drawConeCart()
}

function checkOut() {
    if (window.confirm('Are you ready to check out?')) {

        iceCream.forEach(flavor => flavor.quantity = 0)
        toppings.forEach(topping => topping.quantity = 0)
        cones.forEach(type => type.quantity = 0)

        drawIceCreamCart()
        drawToppingsCart()
        drawConeCart()
    }
}

function drawIceCreamCart() {
    let template = ''
    iceCream.forEach(flavor => {
        if (flavor.quantity > 0) {
            template += `
            <div class="d-flex justify-content-between">
            <span>
            ${flavor.name}
            </span>
            <span>
            $${flavor.price}
            </span>
            <span>
            #${flavor.quantity}
            </span>
            </div>`
        }
    })
    updateTotal()
    iceCreamCartElem.innerHTML = template
}

function drawToppingsCart() {
    let template = ''
    toppings.forEach(flavor => {
        if (flavor.quantity > 0) {
            template += `
            <div class="d-flex justify-content-between">
            <span>
            ${flavor.name}
            </span>
            <span>
            $${flavor.price}
            </span>
            <span>
            #${flavor.quantity}
            </span>
            </div>`
        }
    })
    updateTotal()
    toppingsCartElem.innerHTML = template
}

function drawConeCart() {
    let template = ''
    cones.forEach(flavor => {
        if (flavor.quantity > 0) {
            template += `
            <div class="d-flex justify-content-between">
            <span>
            ${flavor.name}
            </span>
            <span>
            $${flavor.price}
            </span>
            <span>
            #${flavor.quantity}
            </span>
            </div>`
        }
    })
    updateTotal()
    coneCartElem.innerHTML = template
}

function updateTotal() {
    totalElem.innerText = askPrice()
}

function askPrice() {

    let cost = 0

    iceCream.forEach(flavor => {
        if (flavor.quantity > 0) {
            cost += flavor.price * flavor.quantity
        }
    })

    toppings.forEach(flavor => {
        if (flavor.quantity > 0) {
            cost += flavor.price * flavor.quantity
        }
    })

    cones.forEach(flavor => {
        if (flavor.quantity > 0) {
            cost += flavor.price * flavor.quantity
        }
    })

    return cost
}


const rType = document.querySelector('#r-type')
const lType = document.querySelector('#l-type')
const attack = document.querySelector('#attack')
const defense = document.querySelector('#defense')
const basic = document.querySelector('#basic')
const normal = document.querySelector('#basic')
const hp = document.querySelector('#hp')
let health = 100

function battle(power){
    const left = rType.value
    const right = lType.value
    const lattack = parseInt(attack.value)
    const rdefend = parseInt(defense.value)
    let mod = 1
    if (left == "water" && right == "fire"){
        print('Water and fire')
        mod = 2
    }
    else if (left == "water" && right == "grass") {
        mod = 0.5
    }
    else if (left == "grass" && right == "fire") {
        mod = 0.5
    }
    else if (left == "grass" && right == "water") {
        mod = 2
    }
    else if (left == "fire" && right == "grass") {
        mod = 2
    }
    else if (left == "fire" && right == "water") {
        mod = 0.5
    }
    else {
        mod = 1
    }

    const damage = (((power * (lattack/rdefend))/2) * mod)
    health -= damage
    hp.innerHTML = health.toFixed(2)
    
}

function reset() {
    health = 100
    hp.innerHTML = health.toFixed(2)
}

function background() {
    const back = rType.value
    if (back == "fire") {
    document.getElementById('left').style.backgroundImage = "url(charm.png)"
    }
    else if (back == "grass") {
        document.getElementById('left').style.backgroundImage = "url(bulba.jpg)"
    }
    else if (back == "water") {
        document.getElementById('left').style.backgroundImage = "url(squirtle.png)"
    }
}

function rback() {
    const back = lType.value
    if (back == "fire") {
        document.getElementById('right').style.backgroundImage = "url(charm.png)"
    }
    else if (back == "grass") {
        document.getElementById('right').style.backgroundImage = "url(bulba.jpg)"
    }
    else if (back == "water") {
        document.getElementById('right').style.backgroundImage = "url(squirtle.png)"
    }
}

rType.addEventListener('input', background)
lType.addEventListener('input', rback)

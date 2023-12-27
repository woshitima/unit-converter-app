/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
                
                // FIRST VERSION
                
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

let inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

// btn function
convertBtn.addEventListener("click", function() {
    render(inputEl.value)
})

// converter functions
function convertMetertoFeet() {
    let meterToFeet = Number(inputEl.value) * 3.281
    return meterToFeet
}

function convertFeetToMeter() {
    let feetToMeter = Number(inputEl.value) * 0.3048
    return feetToMeter
}

function convertLitersToGallons() {
    return Number(inputEl.value) * 0.264
}

function convertGallonsToLiters() {
    return Number(inputEl.value) * 	3.78541
}

function convertKilostoPounds() {
    return Number(inputEl.value) * 2.204
}

function convertPoundstoKilos() {
    return Number(inputEl.value) * 0.453592
}

// render function
function render(unit) {
    lengthEl.textContent = `${unit} meters = ${convertMetertoFeet().toFixed(3)} feet | ${unit} feet = ${convertFeetToMeter().toFixed(3)} meters`
    volumeEl.textContent = `${unit} liters = ${convertLitersToGallons().toFixed(3)} gallons | ${unit} gallons = ${convertGallonsToLiters().toFixed(3)} liters`
    massEl.textContent = `${unit} kilos =  ${convertKilostoPounds().toFixed(3)} pounds | ${unit} pounds = ${convertPoundstoKilos().toFixed(3)} kilos`
}



                // SECOND VERSION

// let lengthEl = document.getElementById("length-el")
// let volumeEl = document.getElementById("volume-el")
// let massEl = document.getElementById("mass-el")

// let inputEl = document.getElementById("input-el")
// const convertBtn = document.getElementById("convert-btn")

// const meterToFeet =  3.281
// const literToGallon =  0.264
// const kiloToPound =  2.204

// const feetToMeter = 0.3048
// const gallonToLiter = 3.78541
// const poundToKilo = 0.453592

// convertBtn.addEventListener("click", function() {
//     let baseValue = inputEl.value
//     lengthEl.textContent = `${baseValue} meter = ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue * feetToMeter).toFixed(3)} meters`
//     volumeEl.textContent = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} gallons  | ${baseValue} gallons = ${(baseValue * gallonToLiter).toFixed(3)} liters`
//     massEl.textContent = `${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(3)} pounds  | ${baseValue} pounds = ${(baseValue * poundToKilo).toFixed(3)} kilos`
// })
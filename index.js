const resultsContainer = document.querySelector("#results-container")
const convertBtn = document.querySelector("#convert-btn")
const valueInput = document.querySelector("input")

convertBtn.addEventListener("click", () => {
    renderResults()
})

function getConversions(value) {
    const convertedValues = {
        meter_to_feet: value * 3.281,
        feet_to_meter: value / 3.281,
        liters_to_gallons: value * 0.264,
        gallons_to_liters: value / 0.264,
        kilograms_to_pounds: value * 2.204,
        pounds_to_kilograms: value / 2.204
    }
    return convertedValues
}

function renderResults() {
    const valInput = Number(valueInput.value)
    const convertedValues = getConversions(valInput)

    resultsContainer.innerHTML = 
    `
             <div class="result-card">
                <h2>Length (Meter/Feet)</h2>
                <p>${valInput} meters = ${convertedValues.meter_to_feet.toFixed(3)} feet | ${valInput} feet = ${convertedValues.feet_to_meter.toFixed(3)} meters</p>
            </div>
            <div class="result-card">
                <h2>Volume (Liters/Gallons)</h2>
                <p>${valInput} liters = ${convertedValues.liters_to_gallons.toFixed(3)} gallons | ${valInput} gallons = ${convertedValues.gallons_to_liters.toFixed(3)} liters</p>
            </div>
            <div class="result-card">
                <h2>Mass (Kilograms/Pounds)</h2>
                <p>${valInput} kilos = ${convertedValues.kilograms_to_pounds.toFixed(3)} pounds | ${valInput} pounds = ${convertedValues.pounds_to_kilograms.toFixed(3)} kilos</p>
            </div>
`
}
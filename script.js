function calculateRF() {

const frequencyInput =
    document.getElementById("frequency");

const unit =
    document.getElementById("unit");

const result =
    document.getElementById("rfResult");


let frequency =
    Number(frequencyInput.value);


// Check the input
if (
    frequency <= 0 ||
    isNaN(frequency)
) {

    result.innerHTML = `
        <span class="result-icon">⚠️</span>
        Please enter a valid frequency greater than 0.
    `;

    return;
}


// Convert frequency to Hz
if (unit.value === "kHz") {

    frequency *= 1000;

} else if (unit.value === "MHz") {

    frequency *= 1000000;

} else if (unit.value === "GHz") {

    frequency *= 1000000000;

}


// Speed of light
const speedOfLight = 299792458;


// Wavelength
const wavelength =
    speedOfLight / frequency;


// Period
const period =
    1 / frequency;


// Angular frequency
const angularFrequency =
    2 * Math.PI * frequency;


// Display result
result.innerHTML = `

    <span class="result-icon">📊</span>

    Frequency:
    ${frequency.toLocaleString()} Hz

    <br>

    Wavelength:
    ${wavelength.toFixed(6)} metres

    <br>

    Period:
    ${period.toExponential(4)} seconds

    <br>

    Angular Frequency:
    ${angularFrequency.toExponential(4)} rad/s

`;


}

/* CONTACT FORM */

const contactForm =
document.getElementById("contactForm");

if (contactForm) {

contactForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const contactResult =
            document.getElementById("contactResult");


        contactResult.textContent =
            "Message received! The contact system can be connected to a database later.";

        contactResult.style.color =
            "green";


        contactForm.reset();

    }
);


}

function simulateNetwork() {
    const users = Number(document.getElementById("networkUsers").value);
    const signal = Number(document.getElementById("signalStrength").value);
    const result = document.getElementById("networkResult");
    const signalBar = document.getElementById("signalBar");
    const utilizationBar = document.getElementById("utilizationBar");

    if (users <= 0 || isNaN(users)) {
        result.textContent = "Please enter a valid number of users.";
        return;
    }

    if (isNaN(signal)) {
        result.textContent = "Please enter a valid signal strength.";
        return;
    }

    const capacity = 100;
    const utilization = (users / capacity) * 100;

    let networkStatus;

    if (utilization <= 70) {
        networkStatus = "Good";
    } else if (utilization <= 100) {
        networkStatus = "Busy";
    } else {
        networkStatus = "Overloaded";
    }

    let signalStatus;
    let signalPercentage;

    if (signal >= -70) {
        signalStatus = "Strong";
        signalPercentage = 100;
    } else if (signal >= -90) {
        signalStatus = "Moderate";
        signalPercentage = 60;
    } else {
        signalStatus = "Weak";
        signalPercentage = 30;
    }

    signalBar.style.width = signalPercentage + "%";

        utilizationBar.style.width = Math.min(utilization, 100) + "%";

        if (utilization <= 70) {
        utilizationBar.style.background = "#16a34a";
        } else if (utilization <= 100) {
            utilizationBar.style.background = "#f59e0b";
        } else {
        utilizationBar.style.background = "#dc2626";
    }

    if (signal >= -70) {
        signalBar.style.background = "#16a34a";
    } else if (signal >= -90) {
        signalBar.style.background = "#f59e0b";
    } else {
        signalBar.style.background = "#dc2626";
    }

    result.textContent =
        `Users: ${users} | Utilization: ${utilization.toFixed(1)}% | Network: ${networkStatus} | Signal: ${signalStatus}`;
}
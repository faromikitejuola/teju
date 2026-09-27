const SPEED_OF_LIGHT =299792458;

function calculateWavelenght(){
    const frequencyinput = 
    document.getElementById("frequency");

    const unitinput = 
    document.getElementById("unit");

    const resultinput = 
    document.getElementById("result");

    const frequency = 
    parseFloat(frequencyinput.value);

    const multiplier = 
    parseFloat(unitinput.value);
    
    if(
        isNaN(frequency) ||
        frequency<= 0
    ){
        resultinput.innerHTML=
        "Please enter a valid frquency";
        return;
    }

    const frequencyHz =
    frequency*multiplier;

    const Wavelenght =
    SPEED_OF_LIGHT / frequencyHz;

    resultinput.innerHTML = 
    {frequency}
    {getUnitName(multiplier)}

    <br></br>

    Wavelength:
    {Wavelength.toFixed(4)}

    function getUnitName(multiplier){
        if(multiplier === 1){
            return"Hz";
        }
        if(multiplier === 1000){
            return"khz";
        }
        if(multiplier === 1000000){
            return"MHz";
        }
        if(multiplier === 1000000000000){
            return"GHz";
        }
        return"Hz";
    }


    function runRadar(){
        const scanButton =
        document.getElementById("scanButton");

        const radarSweep =
        document.getElementById("radarSweep");

        const radarTarget =
        document.getElementById("radarTarget");

        const radarStatus =
        document.getElementById("radarStatus");
        
        target.classList.add("show");

        scanButton.addEventListener("click",function(){
            radarSweep.classlist.add("scanning");
            radarTarget.classlist.remove("detected");

            radarStatus.textContent ="RadarTarget.classlist...";

            setTimeout(function () {
                radarTarget.classList.add("detected");

                radarStatus.textContent = "Target detected!";
            },1500);

            setTimeout(function(){
            radarSweep.classList.remove("scanning");
            radarStatus.textContent
            "Scan complete.";
        },6000);
        });

    }

     

    
}
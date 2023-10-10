const c = document.querySelector("#celsius");
const f = document.querySelector("#fahrenheit");
const k = document.querySelector("#kelvin");




function calculateTemp (event){
    const cv  = +event.target.value;

    switch(event.target.name){
        case "celsius" :
            k.value = (cv + 273.32).toFixed(3);
            f.value = (cv * 1.8 + 32).toFixed(3);
            break;
        case "fahrenheit" :
            k.value = ((cv - 32) / 1.8) + 273.32.toFixed(3);
            c.value = ((cv - 32) / 1.8).toFixed(3);
            break;
        case "kelvin" :
            f.value = ((cv - 273.32) * 1.8 + 32 ).toFixed(3);
            c.value = ((cv - 273.32)).toFixed(3);
        default :
            break;        
    }
}
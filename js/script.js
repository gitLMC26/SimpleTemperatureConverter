function C_F(){
    let x = document.getElementById("celsius").value;
    const C = (parseFloat(x) * (9/5) + 32.);
    document.getElementById("ans1").value = parseFloat(C)+" "+"°F";
}

function C_K(){
    let x = document.getElementById("celsius").value;
    const C = (parseFloat(x) + 273.15);
    document.getElementById("ans1").value = parseFloat(C)+" "+"°K";
}

function C_R(){
    let x = document.getElementById("celsius").value;
    const C = (parseFloat(x) + 273.15) * (9/5);
    document.getElementById("ans1").value = parseFloat(C).toFixed(2)+" "+"°R";
}
// ----------------------------------------------------------------------------
function F_C(){
    let x = document.getElementById("fahrenheit").value;
    const F = (parseFloat(x) -32) * (5/9);
    document.getElementById("ans2").value = parseFloat(F).toFixed(2)+" "+"°C";
}

function F_K(){
    let x = document.getElementById("fahrenheit").value;
    const F = (parseFloat(x) -32) * (5/9) + 273.15;
    document.getElementById("ans2").value = parseFloat(F).toFixed(2)+" "+"°K";
}

function F_R(){
    let x = document.getElementById("fahrenheit").value;
    const R = parseFloat(x) + 459.67;
    document.getElementById("ans2").value = parseFloat(R).toFixed(2)+" "+"°R";
}
// ----------------------------------------------------------------------

function K_C(){
    let x = document.getElementById("kelvin").value;
    const K = parseFloat(x) - 273.15;
    document.getElementById("ans3").value = parseFloat(K).toFixed(2)+" "+"°C";
}

function K_F(){
    let x = document.getElementById("kelvin").value;
    const K = (parseFloat(x) - 273.15) * (9/5) + 32;
    document.getElementById("ans3").value = parseFloat(K).toFixed(2)+" "+"°K";
}

function K_R(){
    let x = document.getElementById("kelvin").value;
    const K = parseFloat(x) * 1.8;
    document.getElementById("ans3").value = parseFloat(K).toFixed(2)+" "+"°R";
}
// -------------------------------------------------------------------------
function R_C(){
    let x = document.getElementById("rankine").value;
    const R = (parseFloat(x) - 491.67) * (5/9);
    document.getElementById("ans4").value = parseFloat(R).toFixed(2)+" "+"°C";
}

function R_F(){
    let x = document.getElementById("rankine").value;
    const R = parseFloat(x) - 459.67;
    document.getElementById("ans4").value = parseFloat(R).toFixed(2)+" "+"°F";
}   

function R_K(){
    let x = document.getElementById("rankine").value;
    const R = parseFloat(x) * (5/9);
    document.getElementById("ans4").value = parseFloat(R).toFixed(2)+" "+"°K";
}
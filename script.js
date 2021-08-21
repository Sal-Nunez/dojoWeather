function cookiesAccepted() {
    var acceptCookies = document.querySelector(".cookieBanner");
    acceptCookies.remove();
}
function tempType() {
    var temp1 = parseInt(document.querySelector("#lowsAndHighs1").innerText);
    var temp2 = parseInt(document.querySelector("#lowsAndHighs2").innerText);
    var temp3 = parseInt(document.querySelector("#lowsAndHighs3").innerText);
    var temp4 = parseInt(document.querySelector("#lowsAndHighs4").innerText);
    var temp5 = parseInt(document.querySelector("#lowsAndHighs5").innerText);
    var temp6 = parseInt(document.querySelector("#lowsAndHighs6").innerText);
    var temp7 = parseInt(document.querySelector("#lowsAndHighs7").innerText);
    var temp8 = parseInt(document.querySelector("#lowsAndHighs8").innerText);
    var tempcf = document.querySelector('#tempSelect').value
    arr = [temp1, temp2, temp3, temp4, temp5, temp6, temp7, temp8];
    for (i = 0; i < arr.length; i++) {
        console.log(tempcf)
        if (tempcf == "C") {
            temp = (arr[i] - 32) * (5 / 9);
            temp = Math.round(temp);
            arr[i] = temp;
        }
        else {
            temp = (arr[i] * (9 / 5)) + 32;
            temp = Math.round(temp);
            arr[i] = temp;
        }
    }
    for(i = 0; i < arr.length; i++) {
        changeTemp = arr[i];
        document.querySelector('#lowsAndHighs'+(i+1)).innerText = changeTemp;
    }
}
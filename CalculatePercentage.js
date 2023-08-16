function calculatePercent(number) {
    let percent = number + (number * 0.2);
    percent = Math.ceil(percent / 5) * 5;
    return percent;
}

let numberInput = document.getElementById("numberInput");
let resultSpan = document.getElementById("result");

numberInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        let number = Number(numberInput.value);
        let result = calculatePercent(number);
        resultSpan.textContent = result;
    }
});

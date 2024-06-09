function convertToCelsius() {
    let fahrenheit = document.getElementById('fahrenheit').value;
    if (fahrenheit === '') {
        alert('Please enter a value for Fahrenheit.');
        return;
    }
    let celsius = (fahrenheit - 32) * 5/9;
    document.getElementById('celsius').value = celsius.toFixed(2);
}

function convertToFahrenheit() {
    let celsius = document.getElementById('celsius').value;
    if (celsius === '') {
        alert('Please enter a value for Celsius.');
        return;
    }
    let fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
}

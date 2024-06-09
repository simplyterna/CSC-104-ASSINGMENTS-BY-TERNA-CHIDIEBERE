function calculateCompoundInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const timesCompounded = parseFloat(document.getElementById('timesCompounded').value);
    const years = parseFloat(document.getElementById('years').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(timesCompounded) || isNaN(years)) {
        alert('Please enter valid numbers in all fields.');
        return;
    }

    const amount = principal * Math.pow((1 + rate / timesCompounded), timesCompounded * years);
    const interest = amount - principal;

    document.getElementById('result').innerHTML = `
        <p>Total Amount: $${amount.toFixed(2)}</p>
        <p>Compound Interest: $${interest.toFixed(2)}</p>
    `;
}

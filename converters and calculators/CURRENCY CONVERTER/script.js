function convert() {
    const dollarAmount = document.getElementById('dollarAmount').value;
    const conversionRate = 1450; // Example conversion rate, you may want to update this to the current rate

    if(dollarAmount && dollarAmount > 0) {
        const nairaAmount = dollarAmount * conversionRate;
        document.getElementById('result').innerText = `₦${nairaAmount.toFixed(2)}`;
    } else {
        document.getElementById('result').innerText = 'Please enter a valid amount';
    }
}

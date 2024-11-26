document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('PayButton').addEventListener('click', function() {
        fetch('https://api.exchangerate-api.com/v4/latest/GBP')
            .then(response => response.json())
            .then(data => {
                const exchangeRate = data.rates.USD;
                const amountInUSD = (2.50 * exchangeRate).toFixed(2);
                const url = `https://hcb.hackclub.com/donations/start/bccs-hack-club?message=This+is+£2.50+in+Dollars+Fill+in+The+Email+and+The+Name&goods=true&amount=${(amountInUSD * 100) - 1}`;
                window.location.href = url;
            })
            .catch(error => console.error('Error fetching exchange rate:', error));
    });

    document.getElementById('DonateButton').addEventListener('click', function() {
        const donateFrame = document.getElementById('Donate');
        if (donateFrame) {
            donateFrame.classList.remove('hidden');
            console.log('Class "hidden" removed');
        } else {
            console.error('Element with id "Donate" not found');
        }
    });
});
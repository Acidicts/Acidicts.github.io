document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('PayButton').addEventListener('click', function() {
        fetch('https://api.exchangerate-api.com/v4/latest/GBP')
            .then(response => response.json())
            .then(data => {
                const exchangeRate = data.rates.USD;
                const amountInGDP = 1 / exchangeRate;
                if (document.getElementById('Amount').value) {
                    const amountInGDP = document.getElementById('Amount').value;
                }
                const amountInUSD = (amountInGDP * exchangeRate).toFixed(2);
                const url = `https://hcb.hackclub.com/donations/start/bccs-hack-club?message=This+is+£${amountInGDP.toFixed(2)}+in+Dollars+Fill+in+The+Email+and+The+Name&goods=true&amount=${(amountInUSD * 100)}`;
                window.location.href = url;
            })
            .catch(error => console.error('Error fetching exchange rate:', error));
    });

    document.getElementById('orpheus').addEventListener('animationend', () => {
        document.getElementById('orpheus').classList.add('wave');
        document.getElementById('orpheus').classList.remove('animate');
    });
    
    window.onload = () => {
        let size = document.getElementById('big_box').offsetHeight;
        document.getElementById('small_box0').style.height = `${size}px`;
        document.getElementById('small_box1').style.height = `${size}px`;
    }
});

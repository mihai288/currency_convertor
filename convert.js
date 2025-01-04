
    let eurprice = 4.98;
    let usdprice = 4.82;
    let arsprice = 0.0047;
    let result = 0;
    const input = document.getElementById('up-input');
    const converter = document.getElementById('converter');
    const display = document.getElementById('display');

    converter.addEventListener('click', () => {
        const selectElement = document.getElementById("curr");
        const selectedValue = selectElement.value; // Obține valoarea

        const ron = parseFloat(input.value);
        if(selectedValue === 'eur'){
            result = ron/eurprice;
            display.textContent = result.toFixed(2) + ' EUR';
        }
        else if(selectedValue === 'usd'){
            result = ron/usdprice;
            display.textContent = result.toFixed(2) + ' USD';
        }
        else if(selectedValue === 'ars'){
            result = ron/arsprice;
            display.textContent = result.toFixed(2) + ' ARS';
        }
    });


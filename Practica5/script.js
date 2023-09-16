class CambioCalculator {
    constructor() {
        this.denominaciones = [100, 50, 20, 10, 5, 1, 0.5, 0.2, 0.01];
    }

    calcularCambio() {
        const montoTotal = parseFloat(document.getElementById('montoTotal').value);
        const totalPagar = parseFloat(document.getElementById('totalPagar').value);

        if (isNaN(montoTotal) || isNaN(totalPagar)) {
            alert("Por favor, ingresa montos válidos.");
            return;
        }

        const cambioTotal = totalPagar - montoTotal;
        let cambioRestante = cambioTotal;
        const resultado = {};

        for (const denominacion of this.denominaciones) {
            const recuentoMonedas = Math.floor(cambioRestante / denominacion);
            if (recuentoMonedas > 0) {
                resultado[denominacion] = recuentoMonedas;
                cambioRestante -= recuentoMonedas * denominacion;
                cambioRestante = parseFloat(cambioRestante.toFixed(2));
            }
        }

        this.displayResult(resultado);
    }

    displayResult(resultado) {
        const resultElement = document.getElementById('resultado');
        resultElement.innerHTML = 'Cambio a devolver:<br>';
        
        for (const denominacion in resultado) {
            resultElement.innerHTML += `${resultado[denominacion]} moneda de ${denominacion} pesos<br>`;
        }
    }
}

const cambioCalculator = new CambioCalculator();
document.getElementById('calcular').addEventListener('click', () => {
    cambioCalculator.calcularCambio();
});


class TorreHanoi {
    constructor() {
        this.movimientos = [];
    }

    resolver(numDiscos, origen, auxiliar, destino) {
        if (numDiscos === 1) {
            this.movimientos.push(`Mover disco de la torre ${origen} a la torre ${destino}`);
        } else {
            this.resolver(numDiscos - 1, origen, destino, auxiliar);
            this.movimientos.push(`Mover disco de la torre ${origen} a la torre ${destino}`);
            this.resolver(numDiscos - 1, auxiliar, origen, destino);
        }
    }
}

function resolverHanoi() {
    const numDiscos = parseInt(document.getElementById('numDiscos').value);
    const torre = new TorreHanoi();
    torre.resolver(numDiscos, '1', '2', '3');
    const movimientosDiv = document.getElementById('movimientos');
    movimientosDiv.innerHTML = torre.movimientos.join('<br>');
}

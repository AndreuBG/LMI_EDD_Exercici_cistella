// cistella.js (Mòdul principal)

document.addEventListener("DOMContentLoaded", function() {

    const cistella = new Cistella();
    
        document.getElementById('afegir').addEventListener('click', function () {
            const descripcio = document.getElementById('desc').value;
            const preu = parseFloat(document.getElementById('preu').value);
            const quantitat = parseInt(document.getElementById('quantitat').value);
            const producte = new Producte(descripcio, preu, quantitat);
            cistella.afegirProducte(producte);
            cistella.actualitzaTotal();
            
        });
    });
    
    class Producte {
        constructor(descripcio, preu, quantitat) {
            this.descripcio = descripcio;
            this.preu = parseFloat(preu);
            this.quantitat = parseInt(quantitat);
        }
    
    
        CalculaSubtotal() {
            return (this.preu * this.quantitat);
        }
    
        generaHTML() {
            const fila = "<td>" + this.descripcio +  "</td><td>" + this.preu.toFixed(2) + "€</td><td>" + this.quantitat + "</td><td>" + this.CalculaSubtotal().toFixed(2) + "€</td>";
            return fila;
                }
                
            } 
            
    
    class Cistella {
        constructor() {
            this.productes = [];
        }
    
        afegirProducte(producte) {
            this.productes.push(producte);
            document.getElementById('contenido').insertAdjacentHTML('beforeend', producte.generaHTML());
        }

        actualitzaTotal() {
            let total = 0;
            for (let producte of this.productes) {
                total += producte.CalculaSubtotal();
            }
        document.getElementById('total').textContent = total.toFixed(2) + " €";
        }
    }
    
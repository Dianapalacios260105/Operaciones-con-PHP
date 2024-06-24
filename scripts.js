document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('calculadora-form');

    form.addEventListener('submit', function(event) {
        const num1 = document.getElementById('num1').value;
        const num2 = document.getElementById('num2').value;
        const operacion = document.getElementById('operacion').value;

        if (isNaN(num1) || isNaN(num2)) {
            alert("Por favor ingrese números válidos.");
            event.preventDefault();
            return;
        }

        if (operacion === 'division' && Number(num2) === 0) {
            alert("Error: División por cero no permitida.");
            event.preventDefault();
        }
    });
});

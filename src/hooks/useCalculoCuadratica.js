import { useState } from 'react';
import Swal from 'sweetalert2';

function useCalculoCuadratica() {
    const [resultado, setResultado] = useState(null);

    const calcularCuadratica = (a, b, c) => {
        if (!a || !b || !c) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor, complete todos los campos.',
            });
            return;
        }

        const numA = parseFloat(a);
        const numB = parseFloat(b);
        const numC = parseFloat(c);

        if (isNaN(numA) || isNaN(numB) || isNaN(numC)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Ingrese valores numéricos válidos.',
            });
            return;
        }

        const discriminante = numB * numB - 4 * numA * numC;

        if (discriminante < 0) {
            Swal.fire({
                icon: 'info',
                title: 'Sin solución real',
                text: 'La ecuación no tiene soluciones reales.',
            });
            setResultado(null);
        } else {
            const x1 = (-numB + Math.sqrt(discriminante)) / (2 * numA);
            const x2 = (-numB - Math.sqrt(discriminante)) / (2 * numA);
            setResultado({ x1, x2 });
        }
    };

    return { resultado, calcularCuadratica };
}

export default useCalculoCuadratica;
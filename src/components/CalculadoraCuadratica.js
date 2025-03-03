import React, { useState } from 'react';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';

function CalculadoraCuadratica() {
    const [valorA, setValorA] = useState('');
    const [valorB, setValorB] = useState('');
    const [valorC, setValorC] = useState('');
    const [valorX1, setValorX1] = useState('');
    const [valorX2, setValorX2] = useState('');

    const calcular = () => {
        if (!valorA || !valorB || !valorC) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor, complete todos los campos.',
            });
            return;
        }

        const numA = parseFloat(valorA);
        const numB = parseFloat(valorB);
        const numC = parseFloat(valorC);

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
            setValorX1('');
            setValorX2('');
        } else {
            const x1 = (-numB + Math.sqrt(discriminante)) / (2 * numA);
            const x2 = (-numB - Math.sqrt(discriminante)) / (2 * numA);
            setValorX1(x1.toFixed(2));
            setValorX2(x2.toFixed(2));
        }
    };

    const limpiar = () => {
        setValorA('');
        setValorB('');
        setValorC('');
        setValorX1('');
        setValorX2('');
    };

    return (
        <div className="container">
            <div className="row">
                <div className="mb-3 col">
                    <label className="form-label">Valor a:</label>
                    <input type="number" className="form-control" id="valorA" value={valorA} onChange={(e) => setValorA(e.target.value)} />
                </div>
                <div className="mb-3 col">
                    <label className="form-label">Valor b:</label>
                    <input type="number" className="form-control" id="valorB" value={valorB} onChange={(e) => setValorB(e.target.value)} />
                </div>
                <div className="mb-3 col">
                    <label className="form-label">Valor c:</label>
                    <input type="number" className="form-control" id="valorC" value={valorC} onChange={(e) => setValorC(e.target.value)} />
                </div>
            </div>
            <div className="row">
                <div className="mb-3 col">
                    <label className="form-label">x1:</label>
                    <input type="number" className="form-control" id="valorX1" value={valorX1} readOnly />
                </div>
                <div className="mb-3 col">
                    <label className="form-label">x2:</label>
                    <input type="number" className="form-control" id="valorX2" value={valorX2} readOnly />
                </div>
            </div>
            <div className="row">
                <div className="mb-3 col">
                    <button className="btn btn-success me-2" onClick={calcular}>Calcular</button>
                    <button className="btn btn-danger" onClick={limpiar}>Limpiar</button>
                </div>
            </div>
        </div>
    );
}

export default CalculadoraCuadratica;
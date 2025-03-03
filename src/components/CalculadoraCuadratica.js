import React, { useState } from 'react';
import useCalculoCuadratica from '../hooks/useCalculoCuadratica';
import 'bootstrap/dist/css/bootstrap.min.css';

function CalculadoraCuadratica() {
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [c, setC] = useState('');
    const { resultado, calcularCuadratica } = useCalculoCuadratica();

    const handleCalcular = () => {
        calcularCuadratica(a, b, c);
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Calculadora de Fórmula Cuadrática</h2>
            <div className="mb-3">
                <label className="form-label">a:</label>
                <input type="text" className="form-control" value={a} onChange={(e) => setA(e.target.value)} />
            </div>
            <div className="mb-3">
                <label className="form-label">b:</label>
                <input type="text" className="form-control" value={b} onChange={(e) => setB(e.target.value)} />
            </div>
            <div className="mb-3">
                <label className="form-label">c:</label>
                <input type="text" className="form-control" value={c} onChange={(e) => setC(e.target.value)} />
            </div>
            <button className="btn btn-primary" onClick={handleCalcular}>Calcular</button>

            {resultado && (
                <div className="mt-4">
                    <h3>Resultados:</h3>
                    <p>x1 = {resultado.x1}</p>
                    <p>x2 = {resultado.x2}</p>
                </div>
            )}
        </div>
    );
}

export default CalculadoraCuadratica;
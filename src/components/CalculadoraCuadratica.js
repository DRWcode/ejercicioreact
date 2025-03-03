import React, { useState } from 'react';
import useCalculoCuadratica from '../hooks/useCalculoCuadratica'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function CalculadoraCuadratica() {
    const [valorA, setValorA] = useState('');
    const [valorB, setValorB] = useState('');
    const [valorC, setValorC] = useState('');
    const { resultado, calcularCuadratica } = useCalculoCuadratica();

    const calcular = () => {
        calcularCuadratica(valorA, valorB, valorC);
    };

    const limpiar = () => {
        setValorA('');
        setValorB('');
        setValorC('');
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
                    <input type="number" className="form-control" id="valorX1" value={resultado ? resultado.x1.toFixed(2) : ''} readOnly />
                </div>
                <div className="mb-3 col">
                    <label className="form-label">x2:</label>
                    <input type="number" className="form-control" id="valorX2" value={resultado ? resultado.x2.toFixed(2) : ''} readOnly />
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
import React, { useState } from 'react';
import { FaFan } from "react-icons/fa";


import './Conversor.css';

function Conversor(props) {

    const [valor, setValor] = useState([{}]);
    const [tipoMoedaA, setTipoMoedaA] = useState();
    const [tipoMoedaB, setTipoMoedaB] = useState();


    const list_moedaA = props.moedaA;
    const list_moedaA_aux = list_moedaA.map((moeda) =>
        <option value={moeda} key={moeda}>{moeda}</option>
    );

    const list_moedaB = props.moedaB;
    const list_moedaB_aux = list_moedaB.map((moeda) =>
        <option value={moeda} key={moeda}>{moeda}</option>
    );



    const converter = () => {

        let de_para =  `${tipoMoedaA}_${tipoMoedaB}`;
        console.log("de_para "+de_para)
        console.log(tipoMoedaA+' modmd')

        let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=5eeb64c774c2e7490cd2`;

        fetch(url)
        .then(res=>{
            return res.json();
        })
        .then(json=>{
            let cotacao = json[de_para];
            let moedaA_valor = valor.moedaA_valor;
            let moedaB_valor = (parseFloat((moedaA_valor * cotacao).toFixed(2)));

           // console.log("essa é valor.moedaB_valor "+valor.moedaB_valor)
            console.log("essa é moedaB_valor_aux "+moedaB_valor)

            cotacao = "Cotação: "+(cotacao).toFixed(2);
            const data_valor = {
                moedaA_valor,
                moedaB_valor,
                cotacao
            };
            setValor(data_valor);
            // console.log(data_valor);
            // console.log(valor);
        })
    }

    return (
        <>
            <div className="Conversor">
                <div className="card text-light">
                    <div className="card-body">
                        <h6 className=" text-center">Selecione a moeda<br/>que deseja converter</h6>
                        <h2 className="card-title text-center">
                            <select className="form-control mb-2" onChange={(e) => {
                                setTipoMoedaA(e.target.value)
                            }}>
                                <option></option>
                                {list_moedaA_aux}
                            </select> 
                            <FaFan /> 
                            <select className="form-control mt-2" onChange={(e) => {
                                setTipoMoedaB(e.target.value)
                            }}>
                                <option></option>
                                {list_moedaB_aux}
                            </select>
                        </h2>

                        <input type="text" className="form-control f-left" placeholder="Digite o valor"
                            onChange={(event) => { 
                                setValor({moedaA_valor:event.target.value, moedaB_valor:'', cotacao:''})
                            }}>
                        </input>

                        <input className="btn btn-dark btn-lg text-uppercase btn-block mt-3" type="button" value="Converter" onClick={converter}></input>
                        <h5 className="mt-2 mt-2">Converção: {valor.moedaB_valor} </h5>
                        <h6>{(typeof(valor.cotacao) !== 'undefined' && valor.cotacao != null) ? valor.cotacao : ' '}</h6>
                    </div>
                </div>
            </div> 
        </>
    );
}

export default Conversor;

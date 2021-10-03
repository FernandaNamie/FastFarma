import React from "react";
import SideBar from "./sidebar";
import './index.css';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import NavBar from '../../Search/navbar';

export default function Index() {
    return (
        <div>
            <NavBar/>
            <div className="Index">
                <ErrorOutlineIcon fontSize="large"/>
                <span className="MainText">Aceitar Pedido</span>
                <div className="container" style={{paddingLeft: '50px'}}>
                    <div className="row">
                        <div className="col-6" style={{fontWeight:'bold'}}>#A821AJKSD90</div>
                        <div className="col-6"><GpsFixedIcon/> <span style={{fontWeight:'bold'}}>De:</span> Barroso Neto, 562</div>
                    </div>
                    <div className="row">
                        <div className="col-6" style={{fontWeight:'bold'}}>Previsão de entrega: 12h50 - 13h00</div>
                        <div className="col-6"><GpsFixedIcon/> <span style={{fontWeight:'bold'}}>Para:</span> R. Vicente Linhares, 342</div>
                    </div>
                </div>
                <div className='container Product'>
                    <p><span style={{color: '#37B9C5', fontWeight:'bold'}}>Quantidade</span> 
                    <span style={{fontWeight:'bold', paddingLeft: '60px'}}>Detalhes do Pedido</span></p>
                    <div class="container">
                        <div class="row align-items-start" style={{borderBottom: '1px solid black', paddingTop: '20px',paddingBottom: '20px'}}>
                            <div class="col-2">
                            x1
                            </div>
                            <div class="col-8">
                            Spray de Tantum Verde para aplicação tópica, 30ml
                            </div>
                            <div class="col">
                                R$50,00
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row align-items-start" style={{borderBottom: '1px solid black', paddingTop: '20px', paddingBottom: '20px'}}>
                            <div class="col-2">
                            x2
                            </div>
                            <div class="col-8">
                            Comprimidos Arpeflu, 100 mg, 30pcs
                            </div>
                            <div class="col">
                                R$25,00
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-end">
                        <div class="col-3" style={{paddingTop: '20px', paddingBottom: '20px'}}>
                            <span style={{color: '#37B9C5'}}>Frente:</span><span style={{paddingLeft: '11px'}}>R$6,00</span>
                        </div>
                        <div class="w-100"></div>
                        <div class="col-3" style={{paddingTop: '20px', paddingBottom: '20px'}}>
                            <span style={{color: '#37B9C5'}}>Total:</span><span style={{paddingLeft: '20px', fontWeight:'bold'}}>R$106,00</span>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-4" style={{fontWeight:'bold'}}>
                        Iniciar entrega
                        </div>
                        <div class="w-100"></div>
                        <div class="col-4">
                            <button type="button" class="btn btn-primary" style={{background:'#37B9C5', borderColor:'#37B9C5'}}>Sim</button>
                            <button type="button" class="btn btn-outline-dark" style={{marginLeft: '5px'}}>Não</button>
                        </div>
                    </div>
                </div>
            </div>
            <SideBar/>
        </div>
    )
}
import React from "react";
import './sidebar.css';

export default function SideBar() {
    return (
        <div>
            <div className="Bar">
                <p className="InsideBar">Pedidos</p>
            </div>
            <div className='ClientsStyle'>
                <div className='Client Selected'>
                    <span>
                        <span className='ClientName'>Leticia. <span className='ClientCode'>#1234
                        </span></span>
                        <span className="Status New">Novo</span>
                    </span>
                    <p className='Message'>Clique para aceitar</p>
                </div>
                <div className='Client'>
                    <span>
                        <span className='ClientName'>Guilherme. <span className='ClientCode'>#1235</span></span>
                        <span className='Status Late'>Atrasado</span>
                    </span>
                    <p className='Message'>Entregue o pedido</p>
                </div>
            </div>
        </div>
    )
}
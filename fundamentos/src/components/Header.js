import React from 'react';


export default function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <h1>Meu Site</h1>
                </div>
                
                <nav className="navbar">
                    <ul className="nav-list">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">Sobre</a></li>
                        <li><a href="#services">Serviços</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

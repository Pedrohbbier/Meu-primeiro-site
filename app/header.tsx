"use client"
import React, { useState } from "react";

export const Header = () => {
  const [isChecked, setIsChecked] = useState(false);

  if (isChecked) {
    return (
      <div>
        <header id="menuC">
          <div id="menuToggle">
            <input
              id="checkbox"
              type="checkbox"
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <label className="toggle" htmlFor="checkbox">
              <div className="bar bar--top"></div>
              <div className="bar bar--middle"></div>
              <div className="bar bar--bottom"></div>
            </label>
          </div>
          <img src="/logo.png" id="imgLogo" />
        </header>
        <div id="headerLinks">
          <div>
            <a href="#menuC" id="inicioBlack">
              Início
            </a>
          </div>
          <div className="divDoLink">
            <a href="#ns" className="links">
              Nossos serviços
            </a>
          </div>
          <div className="divDoLink">
            <a href="#qsn" className="links">
              Quem somos nós?
            </a>
          </div>
          <div className="divDoLink">
            <a href="#contatoTitle" className="links">
              Contato
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <header id="menuC" >
          <div id="menuToggle">
            <input
              id="checkbox"
              type="checkbox"
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <label className="toggle" htmlFor="checkbox">
              <div className="bar bar--top"></div>
              <div className="bar bar--middle"></div>
              <div className="bar bar--bottom"></div>
            </label>
          </div>
          <img src="/logo.png" id="imgLogo" />
        </header>
        <div id="headerLinks" style={{display:'none'}} >
          <div>
            <a href="#menuC" id="inicioBlack">
              Início
            </a>
          </div>
          <div className="divDoLink">
            <a href="#ns" className="links">
              Nossos serviços
            </a>
          </div>
          <div className="divDoLink">
            <a href="#qsn" className="links">
              Quem somos nós?
            </a>
          </div>
          <div className="divDoLink">
            <a href="#contatoTitle" className="links">
              Contato
            </a>
          </div>
        </div>
      </div>
    )
  }
};
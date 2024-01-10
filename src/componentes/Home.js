import { useState, useEffect } from 'react';
import { IoLogoFreebsdDevil } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

//Style
import './styles/stylehome.css';


export default function Home() {
    return (
      
      <div className="containerqr">
       <h1 className="title">Croak Dev<IoLogoFreebsdDevil size={70} color="#7dfa61" /></h1>
  
       <div className="containerInput2">
  
      <h2 className='text-explit'>Este projeto foi concebido com o objetivo de aprimorar meu conhecimento e desenvolver habilidades em react.js. Algumas partes podem parecer não coerentes ou divergir do padrão de design que prefiro, uma vez que foi criado para fins de teste. É importante ressaltar que este projeto provavelmente não receberá atualizações, pois se destina a estudos pessoais. Fique à vontade para baixar o código disponível no GitHub, mesmo que sua organização não seja ideal, e utilizá-lo para testes. Abaixo, listarei todas as ferramentas e recursos que foram empregados ao longo dessa jornada.</h2>
       
       
       </div>
       <a href="https://github.com/CroakDev/Consultas-React" target="_blank" rel="noopener noreferrer">
       <button className="buttoSCPF">
      <FaGithub size={25} color="#fff" />
      </button>
      </a>
      </div>
    );
  }
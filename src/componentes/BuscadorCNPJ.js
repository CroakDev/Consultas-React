import { useState, useEffect } from 'react';

//Emojis
import { FiSearch } from "react-icons/fi";
import { GiBrazilFlag } from "react-icons/gi";
import { FaCheckDouble, FaClipboardCheck, FaBroom } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

//Notify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Style
import './styles/stylecnpj.css';

//Api
import apicnpj from './services/scnpj';

export default function BuscadorCNPJ() {
    const [input, setInput] = useState('')
    const [cnpj, setCnpj] = useState({})
    
    async function handleSearch(){
  
      if(input === ''){
        toast.info("Preencha algum CNPJ!")
        return;
      }
  
       // Remover pontos e barras do CNPJ
      const cnpjNumerico = input.replace(/[^\d]+/g, '');

      try{
        const response = await apicnpj.get(`${cnpjNumerico}`);
        console.log(response.data)
        setCnpj(response.data)
        setInput("")
        toast.success("Consulta realizada com sucesso")
  
      } catch (err){
        toast.error("Ops encontramos um erro ao realizar sua consulta.")
        setInput("")
      }
    }
  
    function handleClear() {
      try{
        window.location.reload(); 
        setInput("")
  
      } catch{
        window.location.reload(); 
        setInput("")
      }
    }
  
    return (
      
      <div className="containertwo">
       <h1 className="title">SearchCpnj<GiBrazilFlag size={70} color="#7dfa61" /></h1>
  
       <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
  
       <div className="containerInput">
        <input
        type="text"
        placeholder="Digite o CNPJ..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
  
  
      <button className="buttonSearch" onClick={handleSearch}>
      <FiSearch size={25} color="#7dfa61" />
      </button>
       </div>
  
  
      {Object.keys(cnpj).length > 0 && (
      <main className="main">
        <h2>Consulta Realizada! <FaCheckDouble size={30} color="#fff"/></h2>
  
  
          <span>Empresa: {cnpj.razao_social}</span>
          <span>Nome Fantasia: {cnpj.estabelecimento.nome_fantasia}</span>
          <span>Faixa etária: {cnpj.capital_social}</span>
          <span>Porte: {cnpj.porte.descricao}</span>
          <span>Data do Inicio: {cnpj.estabelecimento.data_inicio_atividade}</span>
          <span>Situação cadastral: {cnpj.estabelecimento.situacao_cadastral}</span>
          <span>CEP: {cnpj.estabelecimento.cep}</span>
          <span>Cidade: {cnpj.estabelecimento.cidade.nome}</span>
          <span>Bairro: {cnpj.estabelecimento.bairro}</span>
          <span>Proprietário: {cnpj.socios[0].nome}</span>

          <span>Telefone: {cnpj.estabelecimento.telefone1}</span>
          <span>Email: {cnpj.estabelecimento.email}</span>

          <span className='atividadep'>Atividade Principal: {cnpj.estabelecimento.atividade_principal.descricao}</span>
  
          <button className="buttonClear" onClick={handleClear}>
          <FaBroom size={25} color="#fff" />
          </button>
  
       </main>
      )}
  
      <div className='OtherServices'>
      <button className="buttoSCPF" >
      <FaGithub size={25} color="#fff" />
      </button>
  
      </div>
       
  
      </div>
    );
  }
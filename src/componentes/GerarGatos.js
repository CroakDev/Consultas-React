import { useState, useEffect } from 'react';

//Emojis
import { FiSearch } from "react-icons/fi";
import { GiBrazilFlag } from "react-icons/gi";
import { FaCheckDouble, FaClipboardCheck, FaBroom, FaCat } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


//Notify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Style
import './styles/stylecpf.css';

//Api
import apicats from './services/apicats';

export default function BuscadorPlaca() {
    const [cat, setCat] = useState({})

    
    async function handleSearch(){
  
      try{
        const response = await apicats.get();
        setCat(response.data);
        toast("Aproveite seus gatinhos", {icon: "😍"});
        
        
  
      } catch (err){
        toast.error("Ops encontramos um erro ao realizar sua consulta.")
      }
    }
  
    return (
      
      <div className="containertree">
       <h1 className="title">GenerateCats<GiBrazilFlag size={70} color="#7dfa61" /></h1>
  
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
  
  
      <button className="buttonSearch" onClick={handleSearch}>
      <FaCat size={36} color="#7dfa61" />
      </button>
       </div>
  
  
      {Object.keys(cat).length > 0 && (
      <main className="main">
        <h2>Gatos Gerados <FaCheckDouble size={30} color="#fff"/></h2>
  
  
  
        <div className='catsbox'>
          {cat.map(catItem => (
            <img
              key={catItem.id}
              className='catsimg'
              src={catItem.url}
              alt={`Cat ${catItem.id}`}
            />
          ))}
        </div>

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
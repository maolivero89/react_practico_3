import React, { useState } from "react";
import NombreUsuario from "./NombreUsuario";
import styled from "styled-components";
import "./Juego.css"
import papel2 from "./Imagenes/papel2.png"
import piedra2 from "./Imagenes/piedra2.png"
import tijera2 from "./Imagenes/tijera2.png"


const H2 = styled.h1`
color: #fff;
font-family:  'Gluten', cursive;
`
const Button = styled.button`
    text-align: center;
    margin: 10px 0px;
    color: #21618C;
    padding: 10px;
    font-family:  'Gluten', cursive;
`;


const Container = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    text-align: center;
`

const HEADER = styled.header`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 1rem;
background-color: #21618C ;
color:#fff ;
margin: 1rem;
box-sizing: border-box;
font-family:  'Gluten', cursive;
border-radius: 10px;
`



function Juego3(){
    const [jugadorSeleccion, setJugadorSeleccion]= useState();
    const [computadoraSeleccion, setComputadoraSeleccion]= useState();
    const [puntajeComputadora, setPuntajeComputadora] = useState(0);
    const [puntajeJugador, setPuntajeJugador] = useState(0); 
    const [resultado, setRestultado] = useState();
    const [mostrarResultado, setMostrarResultado] = useState(false);
    // const [reiniciarJuego, setReiniciarJuego] = useState(false);

    const opciones = ['PIEDRA','PAPEL','TIJERA'];
    // const Images = {
    //     Piedra: "https://i.imgur.com/TONXH9s.png",
    //     Papel: "https://i.imgur.com/t2154qR.png",
    //     Tijera: "https://i.imgur.com/SXstPKk.png"
    // };

    const eleccionUsuario = (e) => {
        setMostrarResultado(false);
        setJugadorSeleccion(e.target.value);
        eleccionComputadora();
    }

    NombreUsuario();
   
function Jugar() {

    if (computadoraSeleccion === jugadorSeleccion) {
        setRestultado("Empate");
    } else if (computadoraSeleccion === 'PIEDRA' && jugadorSeleccion === 'TIJERA') {
        setRestultado('Gana la computadora');
        setPuntajeComputadora(puntajeComputadora + 1);
    } else if (computadoraSeleccion === 'TIJERA' && jugadorSeleccion === 'PAPEL') {
        setRestultado('Gana la computadora');
        setPuntajeComputadora(puntajeComputadora + 1);
    } else if (computadoraSeleccion === 'PAPEL' && jugadorSeleccion === 'PIEDRA') {
        setRestultado('Gana la computadora');
        setPuntajeComputadora(puntajeComputadora + 1);
    } else {
        setRestultado("Tu Ganas");
        setPuntajeJugador(puntajeJugador + 1);
    }

    setMostrarResultado(true);
} 

// function QuienGana(){
//     if (puntajeComputadora === 3) {
//         ReiniciarJuego();
//     }else if (puntajeJugador === 3) {
//         ReiniciarJuego();
//     }
// }QuienGana();

const ReiniciarJuego = () => {
    setPuntajeComputadora(0)
    setPuntajeJugador(0)   
  }

    const eleccionComputadora = () => {
        const numeroRandom = Math.floor(Math.random()*3);
        setComputadoraSeleccion(opciones[numeroRandom]);
    }

    const convierteEmoji = (opcion) => {
        switch (opcion) {
            case 'PIEDRA':
                return 'Eligio 🪨';
            case 'PAPEL':
                return 'Eligio ✋🏻';
            case 'TIJERA':
                return 'Eligio ✌️';
            default:
                return '';
        }
    }    

    return (
        <Container className="container">
            <HEADER>
                <H2 className="Titulo"> Juego: Piedra, Papel o Tijeras con REACT</H2>
                <p> <img src= {piedra2} alt="Piedra"/>   <img src= {papel2} alt="Papel"/>    <img src= {tijera2} alt="tijera"/></p>
            </HEADER>
        <br />
        <br />
        <br />
                
            <div className="marcador">
                <div class="etiqueta etiquetaJugador">USUARIO</div>            
                <div class="etiqueta etiquetaComputadora">COMPUTADORA</div>       
                <div class="puntos">
                <span id="puntosJugador">{puntajeJugador}</span> 
                <span>-</span>
                <span id="puntosComputadora">{puntajeComputadora}</span>
                </div>
            </div>
          
          <div className="opciones">
            {opciones.map((item) => (
            <Button className= "choice" value={item} onClick={eleccionUsuario}>{item}</Button>        
            ))}
           
            <br />
            <Button className="choice" onClick={Jugar} disabled={mostrarResultado} >Jugar</Button>  
            <br />
            <br />  
           </div>
         {mostrarResultado && 
         
            <div>
                <div className="Seleccion">
                    <div className="seleccionPC">
                        Computadora {convierteEmoji(computadoraSeleccion)}
                    </div>
                    <div className="seleccionUsuario">
                        {convierteEmoji(jugadorSeleccion)} Jugador
                    </div>

                </div>
                <div className="Resultado">
                    <div className="">
                    <h4>Resultado: </h4>
                    <h4 className="">{resultado}</h4>
                    </div>
                </div>
                
            </div>                   
         }
                <div className= "BotonReiniciar" disabled= "true">
                <Button className="choice" onClick={ReiniciarJuego}>Reiniciar Juego</Button>
                </div>

           </Container>    
    ); 
    
}

export default Juego3;
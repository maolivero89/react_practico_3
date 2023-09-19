import { useEffect} from 'react';
import Swal from 'sweetalert2';
import 'animate.css';

function NombreUsuario() {



useEffect(() =>{
    mostrarAlerta()
  }, []);

  const mostrarAlerta = () => {
    Swal.fire({      
      text: 'Escribe tu nombre',
      input: 'text',
      padding: 50,
      width: 550,
      color: '#000000',
      inputPlaceholder:'Ingresa tu nombre aqui',      
      confirmButtonText: 'Guardar',
      confirmButtonColor: '#21618C',      
      imageUrl:'https://static.vecteezy.com/system/resources/thumbnails/003/027/817/small/rock-paper-scissors-hand-gesture-free-vector.jpg',
      imageHeight: 100,
      imageWidth: 250,
      title: 'BIENVENIDO/A',
        showClass: {
            popup: 'animate__animated animate__swing'
        },
        hideClass: {
            popup: 'animate__animated animate__bounceOutDown'
        }
      
            
    })
    .then(resultado => {
      if (resultado.value) {
          let nombreUsuario = resultado.value;
          Swal.fire({
            width: 550,
            padding: '3em',  
            imageUrl:'https://static.vecteezy.com/system/resources/thumbnails/003/027/817/small/rock-paper-scissors-hand-gesture-free-vector.jpg',
            imageHeight: 100,
            imageWidth: 250,
            color: '#000000',
            confirmButtonColor: '#21618C',
            text:'Esto es: Piedra, Papel o Tijeras con REACT',
            title: 'Hola ' + nombreUsuario + '.' ,
            footer:'<span>Mucha suerte!</span>',            
            showClass: {
                popup: 'animate__animated animate__rubberBand',
            },
            hideClass: {
                popup: 'animate__animated animate__backOutRight'
            }
        });
      }
  });
  }

}





export default NombreUsuario;
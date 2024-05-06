let slideIndex = 0;
showSlides();


/**
 * La funcion showSlides permite leer las imagenes mostradras en el carrusel de la pagina
 * con la funcion querySelectorAll, para despues con un for recorrer las variables
 * almacenadas en carousel-content img donde al mostrarla como arreglo
 * las va removiendo para ir mostrando la siguiente para despues agregarla nuevamente
 * e ir cambiandolas cada 2 segundos con la funcion setTimeout
 */
function showSlides() {
  const slides = document.querySelectorAll('.carousel-content img');
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }

  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  
  slides[slideIndex - 1].classList.add('active');

  setTimeout(showSlides, 2000); 
}

const paginas = [
  `Maria Antonia, Isabel y el Unicornio de los Sueños

Había una vez, en un lugar muy, muy colorido, dos niñas maravillosas llamadas Maria Antonia e Isabel. Vivían en una casita rodeada de flores que cantaban, mariposas que hacían cosquillas y árboles que aplaudían cuando ellas jugaban.

Una tarde soleada, mientras jugaban con burbujas en el jardín, una burbuja enorme y brillante no se rompió. Flotó, flotó… ¡y les habló!

—¡Hola! Soy Burbina, la burbuja mágica. ¿Quieren ir a un lugar donde los unicornios existen y los sueños vuelan?

Las niñas se miraron con ojos grandes y gritaron:
—¡Síiiiii!`,

  `Burbina las envolvió suavemente y ¡plim!, en un parpadeo, aparecieron en el Reino de los Sueños Dulces.

Allí, el cielo era rosado con nubes de algodón de azúcar, y los ríos sabían a jugo de mora. Y justo frente a ellas, caminando con paso elegante, estaba… ¡un unicornio!

—¡Hola! Soy Brillita, la unicornia del arcoíris —dijo con voz melodiosa—. ¿Ustedes son Maria Antonia e Isabel?

Las niñas asintieron felices. Maria Antonia estaba tan emocionada que abrazó a Brillita sin pensarlo.

—¡Tú eres real! ¡Siempre soñé con conocer un unicornio!`,

  `—Y yo contigo —dijo Brillita—. Pero hoy necesito ayuda. Mi cuerno mágico perdió su brillo. Solo una risa verdadera de amigas puede encenderlo otra vez.

Maria Antonia e Isabel se miraron… y comenzaron a hacer muecas, ruidos graciosos y hasta se hicieron cosquillas. Rieron tanto que terminaron rodando por el suelo, riendo a carcajadas.

¡Pum! De repente, el cuerno de Brillita brilló como mil estrellas juntas.

—¡Gracias! —dijo Brillita—. Por su risa, ahora el Reino de los Sueños Dulces volverá a brillar.`,

  `Como recompensa, Brillita les regaló dos coronas de flores mágicas que brillaban de noche y nunca se marchitaban.

Luego, Burbina las trajo de vuelta a casa justo a tiempo para la merienda. Nadie creería su aventura, pero ellas sabían la verdad.

Desde entonces, cada noche, cuando miran al cielo y ven una estrella que parpadea, saben que Brillita les está diciendo:
“Gracias por hacer brillar el mundo con su amistad.”`,

  `¡FIN! 
  De: Su tío (Gustavo Rodríguez Fuentes). 
  Para: Las dos niñas más bonitas del mundo.
  Maria Antonia e Isabel. 🌈✨`
];

let paginaActual = 0;

function mostrarPagina() {
  const contenedor = document.getElementById('pagina');
  contenedor.textContent = paginas[paginaActual];
}

function siguientePagina() {
  if (paginaActual < paginas.length - 1) {
    paginaActual++;
    mostrarPagina();
  }
}

function anteriorPagina() {
  if (paginaActual > 0) {
    paginaActual--;
    mostrarPagina();
  }
}

// Inicializar
mostrarPagina();

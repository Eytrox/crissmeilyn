
$(document).ready(function () {
  let cartaAbierta = false;

  // Ocultar las cortinas al cargar
  $('.left-curtain').css('width', '0%');
  $('.right-curtain').css('width', '0%');

  // Preparar la carta
  $('#card').css({
    visibility: 'hidden',
    opacity: 0,
    transform: 'translate(-50%, -50%) scale(0.1)',
    transformOrigin: 'center center'
  });

  // Abrir el sobre
  $('.valentines-day').on('click', function () {
    if (cartaAbierta) return;

    cartaAbierta = true;

    // Animación de caída del sobre
    $('.envelope').css({
      animation: 'fall 3s linear 1',
      '-webkit-animation': 'fall 3s linear 1'
    });

    $('.envelope').fadeOut(800, function () {
      // Ocultar los elementos del sobre
      $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').hide();

      // Mostrar la carta en el centro de la pantalla
      $('#card').css({
        visibility: 'visible',
        opacity: 0,
        transform: 'translate(-50%, -50%) scale(0.85)'
      });

      // Animación de apertura
      $('#card').animate(
        { opacity: 1 },
        {
          duration: 800,

          step: function (now) {
            const escala =
              0.85 +
              now * 0.15 +
              Math.sin(now * Math.PI) * 0.025;

            $(this).css(
              'transform',
              'translate(-50%, -50%) scale(' + escala + ')'
            );
          },

          complete: function () {
            $(this).css({
              opacity: 1,
              visibility: 'visible',
              transform: 'translate(-50%, -50%) scale(1)'
            });
          }
        }
      );
    });
  });
});

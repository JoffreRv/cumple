document.addEventListener('DOMContentLoaded', () => {
    const timelineData = [
        {
            date: 'NOV 2024',
            title: 'Aparece en  mi vida',
            description: 'Dicen que el destino pone en tu vida muchas personas, y agradezco por que sea ud esa persona que le faltaba a mi vida para hacerla mas bonita y llevadera',
            image: 'assets/foto1.jpg' // Asegúrate de que la ruta sea correcta
        },
        {
            date: 'ABR 2025',
            title: 'Nuestro Primer Encuentro',
            description: 'Recuerdo como si fuera ayer ese día. Fue un momento mágico que marcó el inicio de todo lo que somos hoy. Desde ese instante, supe que algo especial había llegado a mi vida.',
            image: 'assets/foto2.jpg' // Asegúrate de que la ruta sea correcta
        },
        {
            date: 'JUL 2025',
            title: 'El primer cumpleaños de mi mujer bonita',
            description: 'Hoy es un día especial, no solo porque se celebra su cumpleaños, y ademas tengo la suerte de conocerle, hablar con ud y sentir que a poco se vuelve alguien muy importante en mi vida, no sabe lo bonito que es conversar con ud. Que este año le traiga felicidad, amor, sueños cumplidos y muchos momentos inolvidables. FELIZ CUMPLEAÑOS',
            image: 'assets/foto3.jpg' // Asegúrate de que la ruta sea correcta
        },
        // ¡Añade más eventos aquí!
        // {
        //     date: 'Fecha',
        //     title: 'Título del Evento',
        //     description: 'Una descripción detallada de este momento especial.',
        //     image: 'assets/otra_foto.jpg'
        // },
    ];

    const timelineContainer = document.querySelector('.timeline');

    timelineData.forEach((event, index) => {
        const eventElement = document.createElement('div');
        eventElement.classList.add('timeline-event');

        eventElement.innerHTML = `
            <div class="timeline-date">${event.date}</div>
            <div class="timeline-content">
                <h3>${event.title}</h3>
                <p>${event.description}</p>
                ${event.image ? `<img src="${event.image}" alt="${event.title}">` : ''}
            </div>
        `;
        timelineContainer.appendChild(eventElement);
    });

    // Observador para animar los eventos al hacer scroll
    const observerOptions = {
        root: null, // El viewport es el root
        rootMargin: '0px',
        threshold: 0.1 // Cuando el 10% del elemento es visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Dejar de observar una vez visible
            }
        });
    }, observerOptions);

    document.querySelectorAll('.timeline-event').forEach(event => {
        observer.observe(event);
    });
    // Lógica para el Mensaje Secreto
    const revealButton = document.getElementById('reveal-message-btn');
    const secretMessageBox = document.getElementById('secret-message-box');

    if (revealButton && secretMessageBox) {
        revealButton.addEventListener('click', () => {
            secretMessageBox.style.display = 'block'; // Mostrar el mensaje
            revealButton.style.display = 'none'; // Ocultar el botón después de clic
            secretMessageBox.scrollIntoView({ behavior: 'smooth', block: 'center' }); // Desplazarse al mensaje
        });
    }

    // Lógica para el Control de Música
    const backgroundMusic = document.getElementById('background-music');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const iconPlay = playPauseBtn.querySelector('.icon-play');
    const iconPause = playPauseBtn.querySelector('.icon-pause');
    let isPlaying = false;

    // Intenta reproducir la música automáticamente
    // Nota: Los navegadores modernos a menudo bloquean la reproducción automática si el usuario no ha interactuado.
    // Es por eso que el botón es importante.
    backgroundMusic.volume = 0.4; // Ajusta el volumen a tu gusto (0.0 a 1.0)
    backgroundMusic.play().then(() => {
        isPlaying = true;
        iconPlay.style.display = 'none';
        iconPause.style.display = 'inline';
    }).catch(error => {
        console.log('La reproducción automática fue bloqueada. El usuario debe interactuar.', error);
        isPlaying = false;
        iconPlay.style.display = 'inline';
        iconPause.style.display = 'none';
    });


    playPauseBtn.addEventListener('click', () => {
        if (isPlaying) {
            backgroundMusic.pause();
            iconPlay.style.display = 'inline';
            iconPause.style.display = 'none';
        } else {
            backgroundMusic.play();
            iconPlay.style.display = 'none';
            iconPause.style.display = 'inline';
        }
        isPlaying = !isPlaying;
    });

    // Opcional: Pausar música si la pestaña pierde el foco (puede ser molesto, opcional)
    // document.addEventListener('visibilitychange', () => {
    //     if (document.hidden && isPlaying) {
    //         backgroundMusic.pause();
    //         iconPlay.style.display = 'inline';
    //         iconPause.style.display = 'none';
    //         isPlaying = false;
    //     }
    // });
});

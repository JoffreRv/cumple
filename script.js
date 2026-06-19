document.addEventListener('DOMContentLoaded', () => {

    /* ══════════════════════════════════════
       TIMELINE DATA (primeros 3 eventos)
    ══════════════════════════════════════ */
    const timelineData = [
        {
            date: 'NOV\n2024',
            title: 'Apareces en mi Vida',
            description: 'Dicen que el destino pone en tu vida muchas personas, y agradezco que seas tú la que le faltaba a la mía para hacerla más bonita y llevadera.',
            image: 'assets/foto1.jpg'
        },
        {
            date: 'MAY\n2025',
            title: 'Nuestro Primer Encuentro',
            description: 'Recuerdo como si fuera ayer ese día. Fue un momento mágico que marcó el inicio de todo lo que somos hoy. Desde ese instante, supe que algo especial había llegado a mi vida.',
            image: 'assets/foto2.jpg'
        },
        {
            date: 'JUL\n2025',
            title: 'Tu Primer Cumpleaños Juntos',
            description: 'Hoy es un día especial, no solo porque celebras tu cumpleaños, sino porque tengo la suerte de conocerte y sentir que poco a poco te vuelves alguien muy importante en mi vida. ¡Feliz Cumpleaños, Melissa!',
            image: 'assets/foto3.jpg'
        },
    ];

    const timelineContainer = document.getElementById('timeline-container');
    if (timelineContainer) {
        timelineData.forEach(event => {
            const el = document.createElement('div');
            el.classList.add('timeline-event');
            el.innerHTML = `
                <div class="timeline-date">${event.date}</div>
                <div class="timeline-content">
                    <h3>${event.title}</h3>
                    <p>${event.description}</p>
                    ${event.image ? `<img src="${event.image}" alt="${event.title}" loading="lazy">` : ''}
                </div>`;
            timelineContainer.appendChild(el);
        });
    }

    /* ══════════════════════════════════════
       GALLERY DATA — ÁLBUM COMPLETO
    ══════════════════════════════════════ */
    const galleryEvents = [
        {
            id: 'historia',
            date: '',
            title: 'Empieza la Historia',
            phrase: 'El día que el destino decidió que nuestros caminos se cruzaran... y mi vida cambió para siempre.',
            icon: '🌟',
            theme: 'theme-violet',
            photos: [{ src: 'assets/foto1.jpg', alt: 'Empieza la historia' }]
        },
        {
            id: 'encuentro',
            date: 'Mayo 2025',
            title: 'Nuestro Primer Encuentro',
            phrase: 'Ese día que te vi por primera vez y algo dentro de mí supo que no podría olvidarte.',
            icon: '✨',
            theme: 'theme-rose',
            photos: [{ src: 'assets/foto2.jpg', alt: 'Primer encuentro' }]
        },
        {
            id: 'cumple-melissa',
            date: 'Julio 2025',
            title: 'Tu Primer Cumpleaños',
            phrase: 'El privilegio de celebrar contigo el día más especial. Que hermosa eres, Melissa.',
            icon: '🎂',
            theme: 'theme-pink',
            photos: [{ src: 'assets/foto3.jpg', alt: 'Cumpleaños Melissa julio 2025' }]
        },
        {
            id: 'agosto',
            date: 'Agosto 2025',
            title: 'Agosto Contigo',
            phrase: 'Cada momento junto a ti se convierte en un recuerdo que atesoro para siempre.',
            icon: '🌸',
            theme: 'theme-teal',
            photos: [
                { src: 'assets/foto4.jpeg', alt: 'Agosto 2025' },
                { src: 'assets/foto5.jpeg', alt: 'Agosto 2025' }
            ]
        },
        {
            id: 'octubre',
            date: 'Octubre 2025',
            title: 'Octubre a tu Lado',
            phrase: 'Contigo el tiempo vuela y cada día es una nueva aventura que quiero vivir.',
            icon: '🍂',
            theme: 'theme-amber',
            photos: [
                { src: 'assets/foto6.jpeg', alt: 'Octubre 2025' },
                { src: 'assets/foto7.jpeg', alt: 'Octubre 2025' },
                { src: 'assets/foto8.jpeg', alt: 'Octubre 2025' },
                { src: 'assets/foto9.jpeg', alt: 'Octubre 2025' }
            ]
        },
        {
            id: 'mindo',
            date: 'Noviembre 2025',
            title: 'Mindo — Nuestro Primer Viaje',
            phrase: 'Cascadas, naturaleza y tu sonrisa iluminando cada rincón. El primero de muchos viajes juntos.',
            icon: '🌿',
            theme: 'theme-green',
            photos: [
                { src: 'assets/foto12.jpeg', alt: 'Mindo noviembre 2025' },
                { src: 'assets/foto13.jpeg', alt: 'Mindo noviembre 2025' },
                { src: 'assets/foto14.jpeg', alt: 'Mindo noviembre 2025' }
            ]
        },
        {
            id: 'playa1',
            date: 'Diciembre 2025',
            title: 'Primera Playa Juntos',
            phrase: 'El mar testigo de nuestra felicidad. Tu risa y las olas, la combinación más perfecta del mundo.',
            icon: '🌊',
            theme: 'theme-blue',
            photos: [
                { src: 'assets/foto15.jpeg', alt: 'Primera playa diciembre 2025' },
                { src: 'assets/foto16.jpeg', alt: 'Primera playa diciembre 2025' },
                { src: 'assets/foto17.jpeg', alt: 'Primera playa diciembre 2025' },
                { src: 'assets/foto18.jpeg', alt: 'Primera playa diciembre 2025' }
            ]
        },
        {
            id: 'novios',
            date: '11 Enero 2026',
            title: 'Primera Foto de Novios',
            phrase: 'El día más especial: oficialmente los dos, juntos, para siempre. Nada volvería a ser igual.',
            icon: '💑',
            theme: 'theme-rose',
            photos: [{ src: 'assets/foto19.jpeg', alt: 'Primera foto de novios enero 2026' }]
        },
        {
            id: 'sanvalentin',
            date: '14 Febrero 2026',
            title: 'San Valentín Juntos',
            phrase: 'El amor ya no es solo una palabra, eres tú, eres este momento, eres absolutamente todo.',
            icon: '💕',
            theme: 'theme-pink',
            photos: [
                { src: 'assets/foto21.jpeg', alt: 'San Valentín 2026' },
                { src: 'assets/foto20.jpeg', alt: 'San Valentín 2026' }
            ]
        },
        {
            id: 'bebe',
            date: '✦ Algún día...',
            title: 'Un Sueño que Merece Cumplirse',
            phrase: 'Imagino un pequeño ser con tus ojos y tu sonrisa... el regalo más hermoso que la vida podría darnos.',
            icon: '👶',
            theme: 'theme-teal',
            photos: [
                { src: 'assets/foto23.jpeg', alt: 'Nuestro sueño' },
                { src: 'assets/foto24.jpeg', alt: 'Nuestro sueño' },
                { src: 'assets/foto25.jpeg', alt: 'Nuestro sueño' },
                { src: 'assets/foto26.jpeg', alt: 'Nuestro sueño' }
            ]
        },
        {
            id: 'visita',
            date: 'Marzo 2026',
            title: 'Visita Inesperada',
            phrase: 'Las sorpresas más bonitas llegan sin avisar. Qué feliz me haces cada vez que apareces.',
            icon: '🚪',
            theme: 'theme-violet',
            photos: [
                { src: 'assets/foto28.jpeg', alt: 'Visita inesperada marzo 2026' },
                { src: 'assets/foto30.jpeg', alt: 'Visita inesperada marzo 2026' }
            ]
        },
        {
            id: 'catacocha',
            date: 'Abril 2026',
            title: 'Catacocha',
            phrase: 'Explorando tierras nuevas juntos. Contigo cada destino se vuelve paraíso y hogar al mismo tiempo.',
            icon: '🏔️',
            theme: 'theme-green',
            photos: [
                { src: 'assets/foto31.jpeg', alt: 'Catacocha abril 2026' },
                { src: 'assets/foto32.jpeg', alt: 'Catacocha abril 2026' },
                { src: 'assets/foto33.jpeg', alt: 'Catacocha abril 2026' },
                { src: 'assets/foto34.jpeg', alt: 'Catacocha abril 2026' }
            ]
        },
        {
            id: 'loja',
            date: 'Abril 2026',
            title: 'Loja — La Ciudad Musical',
            phrase: 'La ciudad musical nos recibió con los brazos abiertos. Contigo cada ciudad tiene un sabor especial.',
            icon: '🎵',
            theme: 'theme-amber',
            photos: [
                { src: 'assets/foto35.jpeg', alt: 'Loja abril 2026' },
                { src: 'assets/foto36.jpeg', alt: 'Loja abril 2026' },
                { src: 'assets/foto37.jpeg', alt: 'Loja abril 2026' }
            ]
        },
        {
            id: 'playita',
            date: 'Abril 2026',
            title: 'Playita',
            phrase: 'De nuevo el mar, de nuevo tú. El océano sabe que somos lo más bonito que tiene la orilla.',
            icon: '🏖️',
            theme: 'theme-blue',
            photos: [
                { src: 'assets/foto38.jpeg', alt: 'Playita abril 2026' },
                { src: 'assets/foto39.jpeg', alt: 'Playita abril 2026' },
                { src: 'assets/foto40.jpeg', alt: 'Playita abril 2026' },
                { src: 'assets/foto41.jpeg', alt: 'Playita abril 2026' },
                { src: 'assets/foto42.jpeg', alt: 'Playita abril 2026' }
            ]
        },
        {
            id: 'abril43',
            date: 'Abril 2026',
            title: 'Un Instante Más',
            phrase: 'Un momento más para el álbum de nuestra historia. Cada foto contigo es un tesoro.',
            icon: '🌺',
            theme: 'theme-coral',
            photos: [{ src: 'assets/foto43.jpeg', alt: 'Abril 2026' }]
        },
        {
            id: 'cumple-joffre',
            date: '11 Mayo 2026',
            title: 'Mi Cumpleaños — Tu Regalo',
            phrase: 'Este año mi mejor regalo eres tú, Melissa. Gracias por hacer de mi día el más especial de todos.',
            icon: '🎉',
            theme: 'theme-rose',
            photos: [
                { src: 'assets/foto45.jpeg', alt: 'Cumpleaños Joffre mayo 2026' },
                { src: 'assets/foto47.jpeg', alt: 'Cumpleaños Joffre mayo 2026' },
                { src: 'assets/foto48.jpeg', alt: 'Cumpleaños Joffre mayo 2026' },
                { src: 'assets/foto49.jpeg', alt: 'Cumpleaños Joffre mayo 2026' }
            ]
        },
        {
            id: 'hermosa',
            date: 'Junio 2026',
            title: 'La Más Hermosa',
            phrase: 'No hace falta ocasión ni fecha cuando tienes frente a ti a la mujer más hermosa del mundo. Eres tú, siempre tú.',
            icon: '🌹',
            theme: 'theme-pink',
            photos: [{ src: 'assets/foto46.jpeg', alt: 'La más hermosa junio 2026' }]
        }
    ];

    /* ── Build gallery grid class ── */
    function gridClass(n) {
        if (n === 1) return 'grid-1';
        if (n === 2) return 'grid-2';
        if (n === 3) return 'grid-3';
        if (n === 4) return 'grid-4';
        if (n === 5) return 'grid-5';
        return 'grid-many';
    }

    /* ── Flatten all photos for lightbox navigation ── */
    const allPhotos = [];

    /* ── Render gallery ── */
    const galleryContainer = document.getElementById('gallery-container');
    if (galleryContainer) {
        galleryEvents.forEach(evt => {
            const startIndex = allPhotos.length;
            evt.photos.forEach(p => allPhotos.push({ ...p, eventTitle: evt.title, eventDate: evt.date }));

            const card = document.createElement('div');
            card.classList.add('chapter-card', evt.theme);
            card.dataset.id = evt.id;

            const photosHTML = evt.photos.map((p, i) => `
                <div class="photo-item" data-index="${startIndex + i}" tabindex="0" role="button" aria-label="Ver foto de ${evt.title}">
                    <img src="${p.src}" alt="${p.alt}" loading="lazy">
                    <div class="photo-overlay">
                        <div class="photo-overlay-icon">🔍</div>
                    </div>
                </div>`).join('');

            card.innerHTML = `
                <div class="chapter-header">
                    <div class="chapter-icon">${evt.icon}</div>
                    <div class="chapter-meta">
                        ${evt.date ? `<div class="chapter-date">${evt.date}</div>` : ''}
                        <div class="chapter-title">${evt.title}</div>
                        <div class="chapter-phrase">${evt.phrase}</div>
                    </div>
                </div>
                <div class="chapter-photos">
                    <div class="photo-grid ${gridClass(evt.photos.length)}">
                        ${photosHTML}
                    </div>
                </div>`;

            galleryContainer.appendChild(card);
        });

        /* ── Click handlers ── */
        galleryContainer.addEventListener('click', e => {
            const item = e.target.closest('.photo-item');
            if (item) openLightbox(parseInt(item.dataset.index));
        });
        galleryContainer.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
                const item = e.target.closest('.photo-item');
                if (item) openLightbox(parseInt(item.dataset.index));
            }
        });
    }

    /* ══════════════════════════════════════
       LIGHTBOX
    ══════════════════════════════════════ */
    const lightbox     = document.getElementById('lightbox');
    const lbImg        = document.getElementById('lightbox-img');
    const lbEvent      = document.getElementById('lightbox-event');
    const lbCounter    = document.getElementById('lightbox-counter');
    const lbClose      = document.getElementById('lightbox-close');
    const lbPrev       = document.getElementById('lightbox-prev');
    const lbNext       = document.getElementById('lightbox-next');
    const lbBackdrop   = document.getElementById('lightbox-backdrop');
    let currentIdx = 0;

    function openLightbox(idx) {
        currentIdx = idx;
        renderLightbox();
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
    function closeLightbox() {
        lightbox.classList.remove('open');
        document.body.style.overflow = '';
    }
    function renderLightbox() {
        const p = allPhotos[currentIdx];
        lbImg.src = p.src;
        lbImg.alt = p.alt;
        lbEvent.textContent = p.eventDate ? `${p.eventDate} · ${p.eventTitle}` : p.eventTitle;
        lbCounter.textContent = `${currentIdx + 1} / ${allPhotos.length}`;
        lbPrev.style.opacity = currentIdx === 0 ? '0.3' : '1';
        lbNext.style.opacity = currentIdx === allPhotos.length - 1 ? '0.3' : '1';
    }

    if (lbClose)   lbClose.addEventListener('click', closeLightbox);
    if (lbBackdrop) lbBackdrop.addEventListener('click', closeLightbox);
    if (lbPrev) lbPrev.addEventListener('click', () => {
        if (currentIdx > 0) { currentIdx--; renderLightbox(); }
    });
    if (lbNext) lbNext.addEventListener('click', () => {
        if (currentIdx < allPhotos.length - 1) { currentIdx++; renderLightbox(); }
    });

    document.addEventListener('keydown', e => {
        if (!lightbox?.classList.contains('open')) return;
        if (e.key === 'Escape')     closeLightbox();
        if (e.key === 'ArrowLeft'  && currentIdx > 0)                   { currentIdx--; renderLightbox(); }
        if (e.key === 'ArrowRight' && currentIdx < allPhotos.length - 1) { currentIdx++; renderLightbox(); }
    });

    /* Swipe support */
    let touchStartX = 0;
    lightbox?.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    lightbox?.addEventListener('touchend', e => {
        const dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) < 40) return;
        if (dx < 0 && currentIdx < allPhotos.length - 1) { currentIdx++; renderLightbox(); }
        if (dx > 0 && currentIdx > 0)                    { currentIdx--; renderLightbox(); }
    });

    /* ══════════════════════════════════════
       INTERSECTION OBSERVER (fade-in)
    ══════════════════════════════════════ */
    const io = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08 });

    document.querySelectorAll('.timeline-event, .chapter-card, .reveal-card').forEach(el => io.observe(el));

    /* ══════════════════════════════════════
       STARS CANVAS
    ══════════════════════════════════════ */
    const canvas = document.getElementById('stars-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let stars = [];
        function resizeCanvas() { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; }
        resizeCanvas();
        window.addEventListener('resize', () => { resizeCanvas(); createStars(); });
        function createStars() {
            stars = [];
            const count = Math.floor((canvas.width * canvas.height) / 4500);
            for (let i = 0; i < count; i++) {
                stars.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, r: Math.random() * 1.6 + 0.4, alpha: Math.random(), delta: (Math.random() * 0.012 + 0.003) * (Math.random() > 0.5 ? 1 : -1) });
            }
        }
        createStars();
        function drawStars() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            stars.forEach(s => {
                s.alpha += s.delta;
                if (s.alpha > 1 || s.alpha < 0) s.delta *= -1;
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255,255,255,${Math.max(0, s.alpha)})`;
                ctx.fill();
            });
            requestAnimationFrame(drawStars);
        }
        drawStars();
    }

    /* ══════════════════════════════════════
       FLOATING PETALS
    ══════════════════════════════════════ */
    const petalsContainer = document.getElementById('petals-container');
    const petalEmojis = ['🌸', '🌺', '✨', '💕', '🌹', '💫'];
    function spawnPetal() {
        const el = document.createElement('span');
        el.classList.add('petal');
        el.textContent = petalEmojis[Math.floor(Math.random() * petalEmojis.length)];
        el.style.left = Math.random() * 100 + 'vw';
        el.style.fontSize = (Math.random() * 1.2 + 0.7) + 'rem';
        const dur = Math.random() * 12 + 10;
        el.style.animationDuration = dur + 's';
        petalsContainer.appendChild(el);
        setTimeout(() => el.remove(), dur * 1000);
    }
    for (let i = 0; i < 8; i++) setTimeout(spawnPetal, i * 900);
    setInterval(spawnPetal, 2200);

    /* ══════════════════════════════════════
       MUSIC CONTROL
    ══════════════════════════════════════ */
    const music     = document.getElementById('background-music');
    const playBtn   = document.getElementById('play-pause-btn');
    const iconPlay  = playBtn?.querySelector('.icon-play');
    const iconPause = playBtn?.querySelector('.icon-pause');
    let playing = false;

    if (music && playBtn) {
        music.volume = 0.4;
        music.play().then(() => {
            playing = true;
            iconPlay.style.display  = 'none';
            iconPause.style.display = 'inline';
        }).catch(() => { playing = false; });

        playBtn.addEventListener('click', () => {
            if (playing) { music.pause(); iconPlay.style.display = 'inline'; iconPause.style.display = 'none'; }
            else         { music.play();  iconPlay.style.display = 'none';   iconPause.style.display = 'inline'; }
            playing = !playing;
        });
    }

    /* ══════════════════════════════════════
       SECRET MESSAGE + CONFETTI
    ══════════════════════════════════════ */
    const revealBtn  = document.getElementById('reveal-message-btn');
    const messageBox = document.getElementById('secret-message-box');
    const confettiBox = document.getElementById('confetti-container');

    if (revealBtn && messageBox) {
        revealBtn.addEventListener('click', () => {
            revealBtn.style.display = 'none';
            messageBox.style.display = 'block';
            messageBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
            launchConfetti();
        });
    }

    function launchConfetti() {
        if (!confettiBox) return;
        const colors = ['#ff6b9d', '#f0c060', '#ff99cc', '#ffffff', '#a78bfa', '#e8406a'];
        for (let i = 0; i < 90; i++) {
            const piece = document.createElement('div');
            piece.classList.add('confetti-piece');
            piece.style.left = Math.random() * 100 + '%';
            piece.style.background = colors[Math.floor(Math.random() * colors.length)];
            piece.style.width  = (Math.random() * 8 + 6) + 'px';
            piece.style.height = (Math.random() * 8 + 6) + 'px';
            piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
            const dur = Math.random() * 2 + 1.5;
            piece.style.animation = `confettiFall ${dur}s ${Math.random() * 0.8}s ease-out forwards`;
            confettiBox.appendChild(piece);
            setTimeout(() => piece.remove(), (dur + 0.8) * 1000);
        }
    }
});

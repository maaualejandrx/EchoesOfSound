document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('fullscreen');
    });
});

document.getElementById('play-music').addEventListener('click', () => {
    const audio = document.getElementById('background-music');
    if (audio.paused) {
        audio.play();
        document.getElementById('play-music').innerText = 'Stop Music';
    } else {
        audio.pause();
        document.getElementById('play-music').innerText = 'Play Music';
    }
});

let isPlaying = false;
let currentAudioId = null;

function togglePlay(audioId) {
    // Obtener el elemento de audio usando el ID proporcionado
    const audio = document.getElementById(audioId);

    // Si el audio que se está reproduciendo es el mismo que el que se quiere reproducir
    if (isPlaying && currentAudioId === audioId) {
        audio.pause();
        isPlaying = false;
    } else {
        // Si ya hay un audio reproduciéndose, paúsalo
        if (currentAudioId !== null && currentAudioId !== audioId) {
            const currentAudio = document.getElementById(currentAudioId);
            currentAudio.pause();
        }
        // Reproduce el nuevo audio
        audio.play();
        isPlaying = true;
        currentAudioId = audioId;
    }
}

function toggleFullscreen(element, audioId) {
    element.classList.toggle('fullscreen');
    const fullDescription = element.querySelector('.full-description');

    if (element.classList.contains('fullscreen')) {
        fullDescription.style.display = 'block';
        // Reproduce la música si se abre la tarjeta
        togglePlay(audioId);
    } else {
        fullDescription.style.display = 'none';
        // Pausar la música si la tarjeta se cierra
        if (isPlaying && currentAudioId === audioId) {
            const audio = document.getElementById(audioId);
            audio.pause();
            isPlaying = false;
        }
    }
}


  

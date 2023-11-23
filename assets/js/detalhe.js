function abrirModal() {
    const modal = document.getElementById('morumbi')
    modal.classList.add('abrir-modal')

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'close') {
            modal.classList.remove('abrir-modal')
        }
    })

}

function abrirModalVila() {
    const modal = document.getElementById('vila')
    modal.classList.add('abrir-modal')

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'close') {
            modal.classList.remove('abrir-modal')
        }
    })

}

function abrirModalMineiro() {
    const modal = document.getElementById('mineiro')
    modal.classList.add('abrir-modal')

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'close') {
            modal.classList.remove('abrir-modal')
        }
    })

}

function abrirModalArena() {
    const modal = document.getElementById('arena')
    modal.classList.add('abrir-modal')

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'close') {
            modal.classList.remove('abrir-modal')
        }
    })

}
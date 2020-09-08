document.addEventListener('DOMContentLoaded', () => {
    anime({
        targets : '.container',
        opacity: [0,1],
        duration: 4000,
        delay: 1500,
        easing: 'easeInOutExpo',
    })
    anime({
        targets : 'h1',
        translateY : [-300,0],
        duration : 1500,
        delay: 1000,
        easing : 'spring',
    })
})
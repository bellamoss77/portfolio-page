//      NAV ICON      //



const icon = document.getElementById('hamburger_icon');
icon.addEventListener('click', (e) => {
    icon.classList.toggle('open');
})

//    NAV MENU     //

const button = document.querySelector('button');
let tl = new TimelineLite({ paused: true, reversed: true })

tl
   .to(icon, 0.5, { x: '30vw', ease: 'Power2.out' })
   .to('body', 0.5, { paddingLeft: '300px', ease: 'power2.out' })
   .to('#menu', 0.5, { scaleX: 1, ease: 'power2.out' }, '-=0.5')
   .fromTo('.menu-content', 0.5, { opacity: 0, x: '-50', ease: 'power2.out' }, { opacity: 1, x: '0' })
   

button.addEventListener('click', () => {
    toggleState(tl)
})

function toggleState(tl) {
    tl.reversed() ? tl.play() : tl.reverse()
}
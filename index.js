if (window.innerWidth < 768) {
  [].slice.call(document.querySelectorAll('[data-bss-disabled-mobile]')).forEach((elem) => {
    elem.classList.remove('animated');
    elem.removeAttribute('data-bss-hover-animate');
    elem.removeAttribute('data-aos');
    elem.removeAttribute('data-bss-parallax-bg');
    elem.removeAttribute('data-bss-scroll-zoom');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const hoverAnimationTriggerList = [].slice.call(document.querySelectorAll('[data-bss-hover-animate]'));
  hoverAnimationTriggerList.forEach((hoverAnimationEl) => {
    hoverAnimationEl.addEventListener('mouseenter', (e) => { e.target.classList.add('animated', e.target.dataset.bssHoverAnimate); });
    hoverAnimationEl.addEventListener('mouseleave', (e) => { e.target.classList.remove('animated', e.target.dataset.bssHoverAnimate); });
  });
}, false);

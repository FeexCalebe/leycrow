import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

// Initialize Smooth Scrolling
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

// Sync GSAP with Lenis
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})
gsap.ticker.lagSmoothing(0)

// Initial Loading Animation
window.addEventListener('load', () => {
  const tl = gsap.timeline();
  tl.to('.loader-text', {
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: 'power2.inOut'
  })
  .to('.loader', {
    yPercent: -100,
    duration: 1,
    ease: 'expo.inOut'
  }, '-=0.5')
  .fromTo('.hero-logo-img', 
    { y: 50, scale: 0.9, opacity: 0 },
    { y: 0, scale: 1, opacity: 1, duration: 1.5, ease: 'power3.out' }
  )
  .fromTo('.cult-text',
    { opacity: 0, y: 10 },
    { opacity: 1, y: 0, duration: 1 }
  , '-=1');
});

// Parallax for Hero Image
gsap.to('.hero-bg', {
  yPercent: 20,
  ease: 'none',
  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    scrub: true
  }
});

// Ethos Reveal
const ethosLines = gsap.utils.toArray('.ethos-text .line');
ethosLines.forEach((line) => {
  gsap.fromTo(line, 
    { yPercent: 100, opacity: 0 },
    {
      yPercent: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.ethos-container',
        start: 'top 80%',
      }
    }
  );
});

gsap.fromTo('.ethos-desc', 
  { opacity: 0, y: 30 },
  { 
    opacity: 1, 
    y: 0, 
    duration: 1, 
    delay: 0.3,
    scrollTrigger: {
      trigger: '.ethos-container',
      start: 'top 80%'
    }
  }
);

// Lookbook Parallax Image Reveal
const lookbookItems = gsap.utils.toArray('.lookbook-item');
lookbookItems.forEach((item) => {
  const img = item.querySelector('.placeholder-img');
  
  // Parallax the image inside its container
  gsap.fromTo(img, 
    { scale: 1.2, yPercent: -10 },
    {
      scale: 1,
      yPercent: 10,
      ease: 'none',
      scrollTrigger: {
        trigger: item,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    }
  );

  // Fade in the info
  const info = item.querySelector('.item-info');
  gsap.fromTo(info,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: item,
        start: 'top 70%'
      }
    }
  );
});

// Initialize ScrollReveal
const sr = ScrollReveal({
  distance: '50px',      // how far elements move
  duration: 1000,        // animation duration in ms
  easing: 'ease-out',    // smooth easing
  reset: false           // if true, animates again when scrolling back up
});

// Apply to all elements with the .reveal class
// sr.reveal('.reveal', {
//   origin: 'bottom',      // animation direction
//   interval: 100          // small delay between multiple elements
// });
sr.reveal('.reveal', { origin: 'left' });



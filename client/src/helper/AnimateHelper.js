export const animateCSS = (element, animation, prefix = 'animate__') =>
// We create a Promise and return it
new Promise((resolve, reject) => {
  const animationName = `${prefix}${animation}`;
  const node = document.querySelector(element);

  node.classList.add(`${prefix}animated`, animationName);

  // When the animation ends, we clean the classes and resolve the Promise
  function handleAnimationEnd() {
    node.classList.remove(`${prefix}animated`, animationName);
    node.removeEventListener('animationend', handleAnimationEnd);

    resolve('Animation ended');
  }

  node.addEventListener('animationend', handleAnimationEnd);
});
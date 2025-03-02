const pages = [
  "index.html",
  "about.html",
]

window.addEventListener('pagereveal', async (event) => {
  if (!event.viewTransition) return console.error('No viewTransition found on the event object.');

  const direction = getAnimationDirection();
  handleAnimationDirection(event, direction);
});


/**
 * Determines the animation direction based on the navigation history.
 *
 * @returns {string} 'forward' | 'backward'.
 */
function getAnimationDirection() {
  const prevPage = navigation.activation.from.url;
  const nextPage = navigation.activation.entry.url;

  const prevUrl = new URL(prevPage).pathname.split('/').pop();
  const nextUrl = new URL(nextPage).pathname.split('/').pop();

  const prevIndex = pages.indexOf(prevUrl);
  const nextIndex = pages.indexOf(nextUrl);

  direction = prevIndex < nextIndex ? 'forward' : 'backward';

  return direction;
}


/**
 * Sets the direction as data-attibute to the <html> only during the animation
 *
 * @param {Event} event - The event object associated with the page transition.
 * @param {string} direction - 'forward' | 'backward'
 */
async function handleAnimationDirection(event, direction) {
  document.documentElement.dataset.direction = direction;
  await event.viewTransition.finished;
  delete document.documentElement.dataset.direction;
}

const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');

highlight.classList.add('highlight');
document.body.append(highlight);


const highlightLink = (ev) => {
  const boundingRect = ev.target.getBoundingClientRect();
  highlight.style.width = `${boundingRect.width}px`;
  highlight.style.height = `${boundingRect.height}px`;
  highlight.style.transform = `translate(${boundingRect.left + window.scrollX}px, ${boundingRect.top + window.scrollY}px)`;
  highlight.style.opacity = 1;
}

triggers.forEach((trigger) => trigger.addEventListener('mouseenter', highlightLink));
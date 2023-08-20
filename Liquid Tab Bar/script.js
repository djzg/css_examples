addEventListener('click', e => {
  let eventTarget = e.target;

  if (eventTarget.hasAttribute('href')) {
    eventTarget.parentNode.style.setProperty('--k', + eventTarget.style.getPropertyValue('--i'));
  }
});
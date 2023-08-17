
// adding class js
document.documentElement.classList.add('js');

// updating --js variable by tracking changes in input values and adding those to --js variable
addEventListener('input', e => {
  let _t = e.target;

  _t.parentNode.style.setProperty('--val', +_t.value)
})
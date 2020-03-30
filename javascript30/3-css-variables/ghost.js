const item = (name, type, value, suffix, rest='') => (
  `<div>${name} <input type='${type}' name='${name}' ${suffix ? `data-suffix='${suffix}' ` : ''} value='${value}' ${rest || ''} /></div>`
);

const mapping = [
  ['--bg-color', 'color', '#493d8b'],
  ['--moon-color', 'color', '#ffff00'],
  ['--moon-animation-speed', 'range', 2, 's', 'min="0" max="10"'],
  ['--ghost-animation', 'range', 1.5, 's', 'min="0" max="10"'],
  ['--ghost-color', 'color', '#ffffff'],
  ['--ghost-hands-color', 'color', '#ffffff'],
  ['--ghost-hands-size', 'range', 36, 'px', 'min="0" max="100"'],
  ['--ghost-hands-animation', 'range', 0.8, 's', 'min="0" max="10" step="0.1"'],
  ['--ghost-tooth-color', 'color', '#ffffff'],
  ['--ghost-eyes-color', 'color', '#000000'],
  ['--ghost-eyes-size', 'range', 30, 'px', 'min="0" max="100"'],
  ['--ghost-mouth-color', 'color', '#000000'],
  ['--shadow-color', 'color', '#000000']
];

const settings = document.querySelector('div.settings');
mapping.forEach(e => {
  settings.insertAdjacentHTML(
    'beforeend',
    item(...e)
  );
});

function updateStyle() {
  const suffix = this.dataset.suffix || '';
  document.documentElement.style.setProperty(this.name, this.value + suffix);
}

const inputs = document.querySelectorAll('.settings input');
inputs.forEach(i => i.addEventListener('change', updateStyle));
inputs.forEach(i => i.addEventListener('mousemove', updateStyle));

function showSettings() {
  document.documentElement.style.setProperty('--settings', this.checked ? 'unset' : 'none');
}

const settingsCheckbox = document.querySelector('.show-settings input');
settingsCheckbox.addEventListener('change', showSettings);
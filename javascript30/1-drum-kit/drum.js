const item = (code, title, audio) => (
  `<div data-keyCode='${code}' class='block'>
      <b>${title}</b>
      <span class='wav'>${audio}</span>
      <audio data-keycode='${code}' src='audio/${audio}.wav' />
   </div>`
);

const mapping = [
  [65, 'A', 'boom'],
  [83, 'S', 'clap'],
  [68, 'D', 'hihat'],
  [70, 'F', 'kick'],
  [71, 'G', 'openhat'],
  [72, 'H', 'ride'],
  [74, 'J', 'snare'],
  [75, 'K', 'tink'],
  [76, 'L', 'tom']
];

const keys = document.querySelector('div.keys');
mapping.forEach(([code, title, audio]) => {
  keys.insertAdjacentHTML(
      'beforeend',
      item(code, title, audio)
  );
});

const findDivAndRelatedAudio = keyCode =>
  [
    document.querySelector(`div[data-keycode='${keyCode}'`),
    document.querySelector(`audio[data-keycode='${keyCode}'`)
  ];

window.addEventListener('keydown', ({ keyCode }) => {
  const [div, audio] = findDivAndRelatedAudio(keyCode);
  if (!div || !audio) return;
  div.classList.add('play');
  audio.currentTime = 0;
  audio.play();
});

window.addEventListener('keyup', ({ keyCode }) => {
  const [div, audio] = findDivAndRelatedAudio(keyCode);
  if (!div || !audio) return;
  setTimeout(() => {
      div.classList.remove('play');
  }, audio.duration);
});
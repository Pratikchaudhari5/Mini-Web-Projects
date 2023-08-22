// JavaScript code for canvas drawing
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let drawing = false;

canvas.addEventListener('mousedown', () => {
  drawing = true;
});

canvas.addEventListener('mousemove', (e) => {
  if (!drawing) return;

  context.lineWidth = 5;
  context.lineCap = 'round';
  context.strokeStyle = '#000';

  context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  context.stroke();
  context.beginPath();
  context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
});

canvas.addEventListener('mouseup', () => {
  drawing = false;
  context.beginPath();
});

canvas.addEventListener('mouseleave', () => {
  drawing = false;
  context.beginPath();
});

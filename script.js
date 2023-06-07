// Your code here.
slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3;
  console.log('walk:', walk); // add this line
  slider.scrollLeft = scrollLeft - walk;
  console.log('scrollLeft:', slider.scrollLeft); // add this line
});
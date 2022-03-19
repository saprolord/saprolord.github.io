function DrawMatBox(material, rate, workshop, qty, x, y){
  const svg = document.querySelector('svg');
  const rect1 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  const rect2 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  const rect3 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  const rect4 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  const text1 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  const text2 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  const text3 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  const text4 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  
  rect1.setAttribute('x', x);
  rect1.setAttribute('y', y);
  rect1.setAttribute('width', '150');
  rect1.setAttribute('height', '35');
  rect1.setAttribute('fill', '#B2D3C2');
  rect1.setAttribute('stroke', '#000000');
  rect1.setAttribute('stroke-width', '1');
  svg.appendChild(rect1);


}

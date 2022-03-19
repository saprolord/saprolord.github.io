function drawMatBox(material, rate, workshop, qty, x, y){
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
  
  rect2.setAttribute('x', x);
  rect2.setAttribute('y', y+35);
  rect2.setAttribute('width', '150');
  rect2.setAttribute('height', '35');
  rect2.setAttribute('fill', '#E6DBAC');
  rect2.setAttribute('stroke', '#000000');
  rect2.setAttribute('stroke-width', '1');
  svg.appendChild(rect2);

  rect3.setAttribute('x', x+150);
  rect3.setAttribute('y', y);
  rect3.setAttribute('width', '35');
  rect3.setAttribute('height', '35');
  rect3.setAttribute('fill', '#FFFFFF');
  rect3.setAttribute('stroke', '#000000');
  rect3.setAttribute('stroke-width', '1');
  svg.appendChild(rect3);

  rect4.setAttribute('x', x+150);
  rect4.setAttribute('y', y+35);
  rect4.setAttribute('width', '35');
  rect4.setAttribute('height', '35');
  rect4.setAttribute('fill', '#FFFFFF');
  rect4.setAttribute('stroke', '#000000');
  rect4.setAttribute('stroke-width', '1');
  svg.appendChild(rect4);

	text1.setAttributeNS(null,"x",x+10);
	text1.setAttributeNS(null,"y",y+20);
	text1.appendChild(document.createTextNode(material));
	svg.appendChild(text1);

	text2.setAttributeNS(null,"x",x+10);
	text2.setAttributeNS(null,"y",y+55);
	text2.appendChild(document.createTextNode(workshop));
	svg.appendChild(text2);

	text3.setAttributeNS(null,"x",x+160);
	text3.setAttributeNS(null,"y",y+20);
	text3.appendChild(document.createTextNode(rate));
	svg.appendChild(text3);

	text4.setAttributeNS(null,"x",x+160);
	text4.setAttributeNS(null,"y",y+55);
	text4.appendChild(document.createTextNode(qty));
	svg.appendChild(text4);


}

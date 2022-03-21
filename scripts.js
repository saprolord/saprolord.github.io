function factorycalc() {
  
  'This is the main function to call out to create the recipe tree as selected in the "desired material" field at the rate defined in "desired rate"'
  'This body sets up all the first level recipes as a MatDef class (see constructor further down)'
  'MatDef class format: (name, factory:[Factory ID, production rate],recipe:[material1,material2,...],quantity: [material1 requirement, material2 requirement, ...])'
  'FactoryIDs: Extractor=0, Workshop=1, Furnace=2, Machine Shop=3, Industrial=4, Forge=5, Manufacturer=6, Earth Teleporter=7'

  const wood_log = new MatDef("Wood Log", [0, 7.5], 0, [1]);
  const copper = new MatDef("Copper", [0, 7.5], 0, [1]);
  const iron = new MatDef("Iron", [0, 7.5], 0, [1]);
  const stone = new MatDef("Stone", [0, 7.5], 0, [1]);
  const wolfram = new MatDef("Wolframite", [0, 7.5], 0, [1]);
  const coal = new MatDef("Coal", [0, 7.5], 0, [1]);
  const wood_plank = new MatDef("Wood Plank", [1, 15], [wood_log], [1]);
  const wood_frame = new MatDef("Wood Frame", [1, 7.5], [wood_plank], [4]);
  const copper_ingot = new MatDef("Copper Ingot", [2, 30], [copper], [1]);
  const copper_wire = new MatDef("Copper Wire", [1, 30], [copper_ingot], [1.5]);
  const iron_ingot = new MatDef("Iron Ingot", [2, 30], [iron], [1]);
  const iron_gear = new MatDef("Iron Gear", [1, 15], [iron_ingot], [2]);
  const sand = new MatDef("Sand", [1, 40], [stone], [1]);
  const silicon = new MatDef("Silicon", [2, 20], [sand], [2]);
  const glass = new MatDef("Glass", [2, 10], [sand], [4]);
  const tungsten = new MatDef("Tungsten Ore", [2, 24], [wolfram], [5]);
  const graphite = new MatDef("Graphite", [5, 15], [coal, wood_log], [3, 3]);
  const carbide = new MatDef("Tungsten Carbide", [5, 12], [tungsten, graphite], [2, 1]);
  const coupler = new MatDef("Coupler", [1, 6], [carbide], [1]);
  const lens = new MatDef("Condenser Lens", [1, 20], [glass], [3]);
  const heat_sink = new MatDef("Heat Sink", [1, 10], [copper_ingot], [5]);
  const iron_plate = new MatDef("Iron Plating", [1, 20], [iron_ingot], [2]);
  const emagnet = new MatDef("Electromagnet", [3, 7.5], [iron_ingot, copper_wire], [6, 2]);
  const metal_frame = new MatDef("Metal Frame", [3, 5], [wood_frame, iron_plate], [1, 4]);
  const steel = new MatDef("Steel", [5, 7.5], [graphite, iron], [1, 6]);
  const steel_rod = new MatDef("Steel Rod", [1, 15], [steel], [3]);
  const rotor = new MatDef("Rotor", [3, 10], [steel_rod, iron_plate], [1, 2]);
  const concrete = new MatDef("Concrete", [5, 7.5], [sand, steel_rod], [10, 1]);
  const battery = new MatDef ("Battery", [1, 2.5], [emagnet, graphite], [8, 8]);
  const motor = new MatDef("Electric Motor", [5, 3], [battery, iron_gear, rotor], [1, 4, 2]);
  const circuit = new MatDef ("Logic Circuit", [3, 10], [copper_wire, silicon], [3, 2]);
  const carbfibre = new MatDef ("Carbon Fibre", [1, 7.5], [graphite], [4]);
  const nanowire = new MatDef("Nano Wire", [3, 5], [carbfibre, glass], [2, 4]);
  const computer = new MatDef ("Computer", [4, 7.5], [heat_sink, metal_frame, circuit], [3, 1, 2]);
  const ind_frame = new MatDef("Industrial Frame", [4, 3], [concrete, metal_frame, carbide], [6, 2, 8]);
  const gyroscope = new MatDef("Gyroscope", [3, 5], [copper_wire, rotor], [12, 2]);
  const stabilizer = new MatDef("Stabilizer", [4, 2.5], [computer, motor, gyroscope], [1, 1, 2]);
  const mag_field = new MatDef("Mag. Field Generator", [7, 1.5], [stabilizer, ind_frame, emagnet, nanowire], [1, 1, 10, 10]);
  const quantum = new MatDef("Quantum Entangler", [3, 1], [mag_field, stabilizer], [1, 2]);
  const microscope = new MatDef("Electron Microscope", [4, 2.5], [nanowire, emagnet, lens, metal_frame], [2, 8, 4, 2]);
  const turbocharg = new MatDef("Turbocharger", [6, 4], [iron_gear, circuit, nanowire, coupler], [8, 4, 2, 4]);
  const supercomp = new MatDef("Super Computer", [6, 2], [computer, heat_sink, turbocharg, coupler], [2, 8, 1, 8]);
  const atomic = new MatDef("Atomic Locator", [6, 2], [supercomp, microscope, concrete, copper_wire], [2, 2, 24, 50]);
  const energy_cube = new MatDef("Energy Cube", [3, 2], [battery, ind_frame], [2, 1]);
  const tank = new MatDef("Tank", [4, 6], [glass, concrete, carbide], [2, 4, 4]);
  const compressor = new MatDef("Matter Compressor", [6, 2], [ind_frame, turbocharg, motor, tank], [1, 2, 2, 1]);
  const particle = new MatDef("Particle Glue", [1, 20], [compressor], [0.1]);
  const duplicator = new MatDef("Matter Duplicator", [6, 2/3], [atomic, quantum, energy_cube, particle], [4, 2, 5, 100]);
  const earth_token = new MatDef("Earth Token", [7, 60/42], [duplicator], [1]);


  '________________________'
  'GLOBAL VARIABLES'
  'Material data matrix'
  materialdata = [wood_log, copper, iron, stone, wolfram, coal, wood_plank, wood_frame, copper_ingot, copper_wire, iron_ingot, iron_gear, sand, silicon, glass, tungsten, graphite, carbide, coupler, lens, heat_sink, iron_plate, emagnet, metal_frame, steel, steel_rod, rotor, concrete, battery, motor, circuit, carbfibre, nanowire, computer, ind_frame, gyroscope, stabilizer, mag_field, quantum, microscope, turbocharg, supercomp, atomic, energy_cube, tank, compressor, particle, duplicator, earth_token,];


  'Global coordinats tracker'
  xpos = 5;
  ypos = 4;
  
  '_________________________'
  'END OF GLOBAL VARIABLE'

  'Get user input'

  var index = document.getElementById('material').value;
  var rate = document.getElementById('rate').value;

  'Get Level of factories'
  var levelA = document.getElementById('extractor').value;
  var levelB = document.getElementById('workshop').value;
  var levelC = document.getElementById('furnace').value;
  var levelD = document.getElementById('machine').value;
  var levelE = document.getElementById('industrial').value;
  var levelF = document.getElementById('forge').value;
  var levelG = document.getElementById('manufacturer').value;
  var levelH = document.getElementById('teleporter').value;

  var levelFactory = [levelA, levelB, levelC, levelD, levelE, levelF, levelG, levelH];
  var boostFactory = [1, 1.5, 2, 3, 4];

  'Assign new rates in relation to the "tier" or "Level" assigned to each factories'
  for (i = 0; i < materialdata.length; i++) {
    materialdata[i].factory[1] = materialdata[i].factory[1] * boostFactory[levelFactory[materialdata[i].factory[0]]];
  }

  const svg = document.querySelector('svg');
  clear(svg);
  
  'Launch main function to calculate the required elementary'
  calculate(materialdata[index], rate);

  'END'
}


function zero(material) {
  'Set an array to have all value as zero'
  for (var i = 0; i < (material.length - 1); i++) {
    material[i] = 0;
  }
}

function tier1(chkarr) {
  'Check if a material is composed of only base materials'
  var isTier1 = false;
  if (chkarr[2] == 0) {
    isTier1 = true;
  }
  return isTier1;
}

function calculate(material, rate) {


	var start = ypos;

  'If the material is a Tier 1, write the input materials required in a column, then go back to the previous column'

  if (material.recipe==0) {
    if (xpos > svg.getAttribute('width')) {
      svg.setAttribute('width', xpos + 250);
    }
    drawMatBox([material.name, rate, factoryname(material.factory[0]), Math.ceil(rate / material.factory[1])], [xpos, ypos]);
  } else {
    drawMatBox([material.name, rate, factoryname(material.factory[0]), Math.ceil(rate / material.factory[1])], [xpos, ypos]);
    if (material.recipe.length == 1) {
      lineconnect([xpos + 150, ypos + 35], [xpos + 200, ypos + 35]);
      xpos = xpos + 200;
      if(xpos+200 > svg.getAttribute('width')) {
        svg.setAttribute('width', xpos + 250);
      }
      calculate(material.recipe[0], material.quantity[0] * rate);
      xpos = xpos - 200;
    } else {

      for (var i = 0; i < material.recipe.length; i++) {
          if (i > 0) {
          lineconnect([xpos + 192, start + 35], [xpos + 192, ypos + 135]);
          lineconnect([xpos + 192, ypos + 135], [xpos + 200, ypos + 135]);
          ypos = ypos + 100;
            if (ypos+70 > svg.getAttribute('height')) {
              svg.setAttribute('height', ypos + 80);
          }
        }else{
          lineconnect([xpos + 185, start + 35], [xpos + 200, ypos + 35]);
        }
        xpos = xpos + 200;
        if (xpos+200 > svg.getAttribute('width')) {
          svg.setAttribute('width',xpos+210);
        }
        calculate(material.recipe[i], material.quantity[i] * rate);
        xpos = xpos - 200;
      }
    }
  }
}


function factoryname(id) {
  'Retrun the string of the name of the factory associated with the index "id" '
  'FactoryIDs: Extractor=0, Workshop=1, Furnace=2, Machine Shop=3, Industrial=4, Forge=5, Manufacturer=6, Earth Teleporter=7'
  if (id == 0) { return "Extractor" };
  if (id == 1) { return "Workshop" };
  if (id == 2) { return "Furnace" };
  if (id == 3) { return "Machine Shop" };
  if (id == 4) { return "Industrial Factory" };
  if (id == 5) { return "Forge" };
  if (id == 6) { return "Manufacturer" };
  if (id == 7) { return "Earth Teleporter" };

}

function clear(prnt) {
  'Clear the svg space (svg space as input)'
  let children = prnt.children;
  for (let i = 0; i < children.length;) {
    let el = children[i];
    if (el.tagName !== 'defs') {
      el.remove();
    } else (i++);
  }
}

function lineconnect([x1,y1],[x2,y2]){
  const svg = document.querySelector('svg');
  const newLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  newLine.setAttribute('x1', x1);
  newLine.setAttribute('y1', y1);
  newLine.setAttribute('x2', x2);
  newLine.setAttribute('y2', y2);
  newLine.setAttribute('stroke', '#000000');
  newLine.setAttribute('stroke-width', '1');
  svg.appendChild(newLine);
}

function drawMatBox(matdata, coord) {
  const svg = document.querySelector('svg');
  const rect1 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  const rect2 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  const rect3 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  const rect4 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  const text1 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  const text2 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  const text3 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  const text4 = document.createElementNS('http://www.w3.org/2000/svg', 'text');

  if (matdata.length != 4) {
    matdata[0] = 'INVALID!';
    matdata[1] = 'INVALID!';
    matdata[2] = 'INVALID!';
    matdata[3] = 'INVALID!';
  }

  var material = matdata[0];
  var rate = matdata[1];
  var workshop = matdata[2];
  var qty = matdata[3];
  var x = coord[0];
  var y = coord[1];

  rect1.setAttribute('x', x);
  rect1.setAttribute('y', y);
  rect1.setAttribute('width', '150');
  rect1.setAttribute('height', '35');
  rect1.setAttribute('fill', '#99EDC3');
  rect1.setAttribute('stroke', '#000000');
  rect1.setAttribute('stroke-width', '1');
  svg.appendChild(rect1);

  rect2.setAttribute('x', x);
  rect2.setAttribute('y', y + 35);
  rect2.setAttribute('width', '150');
  rect2.setAttribute('height', '35');
  rect2.setAttribute('fill', '#E6DBAC');
  rect2.setAttribute('stroke', '#000000');
  rect2.setAttribute('stroke-width', '1');
  svg.appendChild(rect2);

  rect3.setAttribute('x', x + 150);
  rect3.setAttribute('y', y);
  rect3.setAttribute('width', '35');
  rect3.setAttribute('height', '35');
  rect3.setAttribute('fill', '#FFFFFF');
  rect3.setAttribute('stroke', '#000000');
  rect3.setAttribute('stroke-width', '1');
  svg.appendChild(rect3);

  rect4.setAttribute('x', x + 150);
  rect4.setAttribute('y', y + 35);
  rect4.setAttribute('width', '35');
  rect4.setAttribute('height', '35');
  rect4.setAttribute('fill', '#FFFFFF');
  rect4.setAttribute('stroke', '#000000');
  rect4.setAttribute('stroke-width', '1');
  svg.appendChild(rect4);

  text1.setAttributeNS(null, "x", x + 10);
  text1.setAttributeNS(null, "y", y + 20);
  text1.appendChild(document.createTextNode(material));
  svg.appendChild(text1);

  text2.setAttributeNS(null, "x", x + 10);
  text2.setAttributeNS(null, "y", y + 55);
  text2.appendChild(document.createTextNode(workshop));
  svg.appendChild(text2);

  text3.setAttributeNS(null, "x", x + 160);
  text3.setAttributeNS(null, "y", y + 20);
  text3.appendChild(document.createTextNode(rate));
  svg.appendChild(text3);

  text4.setAttributeNS(null, "x", x + 160);
  text4.setAttributeNS(null, "y", y + 55);
  text4.appendChild(document.createTextNode(qty));
  svg.appendChild(text4);


}

class MatDef {
'MatDef class is the definition of the material recipes as:'
'name: name of the material as string'
'factory: [factory name required, maximum rate of production]'
'recipe: [list of material required]'
'quantity: [list of quantity required for each material in the order defined in [recipe]]'
  constructor(nameStr,factoryArr,recipeArr,quantityArr) {
    this.name=nameStr;
    this.factory=factoryArr;
    this.recipe=recipeArr;
    this.quantity=quantityArr;
  }
}


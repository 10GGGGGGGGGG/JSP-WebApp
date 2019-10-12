let cells;

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  background(200);
  textSize(40);

  input = createInput();
  input.position(160, 120);
  input.size(450, 100);
  input.style('font-size', '40px');

  button = createButton('read');
  button.position(input.x + input.width, input.y);
  button.size(200, 106);
  button.style('font-size', '40px');
  button.mousePressed(read);

  title = createElement('h1', 'Insert the cell to read:');
  title.position(input.x, input.y - 130);
  title.style('font-size', '50px');

  readCells();
}

function keyPressed() {
  if (keyCode === ENTER) {
    read();
  }
}

function read() {
  background(200);
  var name = input.value();
  var str = JSON.stringify(cells[name], null, 2);
  if (str == null) {
    text('There is no cell with that id', input.x, input.y + 200);
  } else {
    str = 'num_celda: ' + cells[name]['num_celda'] + '\ntipo_celda: ' + cells[name]['tipo_celda'] + '\ncap_actual: ' + cells[name]['cap_actual'] + '\npiso: ' + cells[name]['piso'] + '\nnivel_seguridad: ' + cells[name]['nivel_seguridad'] + '\nestado_puerta: ' + cells[name]['estado_puerta'] + '\nllena: ' + cells[name]['llena'] + '\nPresos contenidos: \n';
   
    
    for (var i = 0; i < cells[name]['presos'].length; i++) {
      str = str + cells[name]['presos'][i]['num_preso'] + ', ' + cells[name]['presos'][i]['nombre'] + ' ' + cells[name]['presos'][i]['apellidos'] + '\n';
    }
    text(str, input.x, input.y + 200);
  }
}

function readCells() {
  let req = new XMLHttpRequest();
  req.onreadystatechange = () => {
    if (req.readyState == XMLHttpRequest.DONE) {
      cells = JSON.parse(req.responseText);
    }
  };
  req.open("GET", "https://api.jsonbin.io/b/5d0115fa7728cd5b232de229", true);
  req.setRequestHeader("secret-key", "$2a$10$p.CTiBAWfrHYWKzTm5MTxe6WkXeRXJCkacxYIT5ejDmmYr3rWFP/y");
  req.send();
}
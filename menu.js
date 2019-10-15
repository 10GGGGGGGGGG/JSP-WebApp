var cnv;
var pavilionsj;
var visitorsj;
var civilj;

function preload() {
  jsp = loadImage('jsp.png');
  }

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  background(200);
  textSize(40);

  image(jsp, 150, 100, 700, 240);

  title = createElement('h1', 'Welcome to the Jail System Project online reader.');
  title.position(160, 360);
  title.style('font-size', '50px');

  title2 = createElement('h1', 'Select the data type to read:');
  title2.position(title.x, title.y + 130);
  title2.style('font-size', '50px');

  button = createButton('Prisoners');
  button.position(title2.x, title2.y + 150);
  button.size(600, 150);
  button.style('font-size', '50px');
  button.mousePressed(goPrisoners);

  button2 = createButton('Cells');
  button2.position(button.x, button.y + button.height);
  button2.size(600, 150);
  button2.style('font-size', '50px');
  button2.mousePressed(goCells);

  button3 = createButton('Pavilions');
  button3.position(button2.x, button2.y + button2.height);
  button3.size(600, 150);
  button3.style('font-size', '50px');
  button3.mousePressed(goPavs);

  button4 = createButton('Civil Servants');
  button4.position(button3.x, button3.y + button3.height);
  button4.size(600, 150);
  button4.style('font-size', '50px');
  button4.mousePressed(goCivils);

  button5 = createButton('Visitors');
  button5.position(button4.x, button4.y + button4.height);
  button5.size(600, 150);
  button5.style('font-size', '50px');
  button5.mousePressed(goVisitors);
}

function hideMenu() {
  background(200);
  textSize(40);
  title.hide();
  title2.hide();
  button.hide();
  button2.hide();
  button3.hide();
  button4.hide();
  button5.hide();
}

function goPrisoners() {
  var p = new pavilions();
  hideMenu();
  inputp = createInput();
  inputp.position(160, 120);
  inputp.size(450, 100);
  inputp.style('font-size', '40px');

  buttonpr = createButton('read');
  buttonpr.position(inputp.x + inputp.width, inputp.y);
  buttonpr.size(200, 106);
  buttonpr.style('font-size', '40px');
  buttonpr.mousePressed(readp);

  buttonpb = createButton('go back');
  buttonpb.position(width / 2.5, height - 300);
  buttonpb.size(200, 106);
  buttonpb.style('font-size', '40px');
  buttonpb.mousePressed(backp);

  titlep = createElement('h1', 'Insert the prisoner to read:');
  titlep.position(inputp.x, inputp.y - 130);
  titlep.style('font-size', '50px');
}

function readp() {
  background(200);
  var name = inputp.value();
  var str = '';
  for (var key in pavilionsj) {
    if (pavilionsj.hasOwnProperty(key)) {
      for (obj of pavilionsj[key]['celdas']) {
        for (var i = 0; i < obj['presos'].length; i++) {
          if (obj['presos'][i]['num_preso'] == name) {
            str = JSON.stringify(obj['presos'][i], null, 2);
            text(str, 30, inputp.y + 200);
          }
        }
      }
    }
  }
  if (str == '') {
    text('There is no prisoner with that id', inputp.x, inputp.y + 200);
  }
}

function backp() {
  background(200);
  textSize(40);
  inputp.hide();
  buttonpr.hide();
  buttonpb.hide();
  titlep.hide();

  title.show();
  title2.show();
  button.show();
  button2.show();
  button3.show();
  button4.show();
  button5.show();
  image(jsp, 150, 100, 700, 240);
}


function goCells() {
  var p = new pavilions();
  hideMenu();
  inputc = createInput();
  inputc.position(160, 120);
  inputc.size(450, 100);
  inputc.style('font-size', '40px');

  buttoncr = createButton('read');
  buttoncr.position(inputc.x + inputc.width, inputc.y);
  buttoncr.size(200, 106);
  buttoncr.style('font-size', '40px');
  buttoncr.mousePressed(readc);

  buttoncb = createButton('go back');
  buttoncb.position(width / 2.5, height - 300);
  buttoncb.size(200, 106);
  buttoncb.style('font-size', '40px');
  buttoncb.mousePressed(backc);

  titlec = createElement('h1', 'Insert the cell to read:');
  titlec.position(inputc.x, inputc.y - 130);
  titlec.style('font-size', '50px');
}

function readc() {
  background(200);
  var name = inputc.value();
  var str = '';
  for (var key in pavilionsj) {
    if (pavilionsj.hasOwnProperty(key)) {
      for (obj of pavilionsj[key]['celdas']) {
        if (obj['num_celda'] == name) {
          str = 'num_celda: ' + obj['num_celda'] + '\ntipo_celda: ' + obj['tipo_celda'] + '\ncap_actual: ' + obj['cap_actual'] + '\npiso: ' + obj['piso'] + '\nnivel_seguridad: ' + obj['nivel_seguridad'] + '\nestado_puerta: ' + obj['estado_puerta'] + '\nllena: ' + obj['llena'] + '\nPresos contenidos: \n';
          for (var i = 0; i < obj['presos'].length; i++) {
            str = str + obj['presos'][i]['num_preso'] + ', ' + obj['presos'][i]['nombre'] + ' ' + obj['presos'][i]['apellidos'] + '\n';
          }
          text(str, inputc.x, inputc.y + 200);
        }
      }
    }
  }
  if (str == '') {
    text('There is no cell with that id', inputc.x, inputc.y + 200);
  }
}

function backc() {
  background(200);
  textSize(40);
  inputc.hide();
  buttoncr.hide();
  buttoncb.hide();
  titlec.hide();

  title.show();
  title2.show();
  button.show();
  button2.show();
  button3.show();
  button4.show();
  button5.show();
  image(jsp, 150, 100, 700, 240);
}

function goPavs() {
  var p = new pavilions();
  hideMenu();
  inputpa = createInput();
  inputpa.position(160, 120);
  inputpa.size(450, 100);
  inputpa.style('font-size', '40px');

  buttonpar = createButton('read');
  buttonpar.position(inputpa.x + inputpa.width, inputpa.y);
  buttonpar.size(200, 106);
  buttonpar.style('font-size', '40px');
  buttonpar.mousePressed(readpa);

  buttonpab = createButton('go back');
  buttonpab.position(width / 2.5, height - 150);
  buttonpab.size(200, 106);
  buttonpab.style('font-size', '40px');
  buttonpab.mousePressed(backpa);

  titlepa = createElement('h1', 'Insert the pavilion to read:');
  titlepa.position(inputpa.x, inputpa.y - 130);
  titlepa.style('font-size', '50px');
}

function readpa() {
  background(200);
  var name = inputpa.value();
  var str = '';
  for (var key in pavilionsj) {
    if (pavilionsj.hasOwnProperty(key)) {
      if (pavilionsj[key]['num_pabellon'] == name) {
        var obj = pavilionsj[key];

        str = 'num_pabellon: ' + obj['num_pabellon'] + '\nnum_celdas: ' + obj['num_celdas'] + '\nnum_presos: ' + obj['num_presos'] + '\nnum_guardias: ' + obj['num_guardias'] + '\nnum_salasComunes: ' + obj['num_salasComunes'] + '\nCeldas contenidas: \n';

        for (var i = 0; i < obj['celdas'].length; i++) {
          str = str + obj['celdas'][i]['num_celda'] + ', ' + obj['celdas'][i]['tipo_celda'] + ', ' + 'Presos contenidos: ';
          for (var j = 0; j < obj['celdas'][i]['presos'].length; j++) {
            str = str + obj['celdas'][i]['presos'][j]['num_preso'] + ', ';
          }
          str = str + '\n';
        }
        text(str, inputpa.x, inputpa.y + 200);
      }
    }
  }
  if (str == '') {
    text('There is no pavilion with that id', inputpa.x, inputpa.y + 200);
  }
}

function backpa() {
  background(200);
  textSize(40);
  inputpa.hide();
  buttonpar.hide();
  buttonpab.hide();
  titlepa.hide();

  title.show();
  title2.show();
  button.show();
  button2.show();
  button3.show();
  button4.show();
  button5.show();
  image(jsp, 150, 100, 700, 240);
}
function goCivils() {
  var c = new civils();
  hideMenu();
  inputcv = createInput();
  inputcv.position(160, 120);
  inputcv.size(450, 100);
  inputcv.style('font-size', '40px');

  buttoncvr = createButton('read');
  buttoncvr.position(inputcv.x + inputcv.width, inputcv.y);
  buttoncvr.size(200, 106);
  buttoncvr.style('font-size', '40px');
  buttoncvr.mousePressed(readcv);

  buttoncvb = createButton('go back');
  buttoncvb.position(width / 2.5, height - 300);
  buttoncvb.size(200, 106);
  buttoncvb.style('font-size', '40px');
  buttoncvb.mousePressed(backcv);

  titlecv = createElement('h1', 'Insert the civil servant to read:');
  titlecv.position(inputcv.x, inputcv.y - 130);
  titlecv.style('font-size', '50px');
}

function readcv() {
  background(200);
  var name = inputcv.value();
  var str = JSON.stringify(civilj[name], null, 2);
  if (str == null) {
    text('There is no civil servant with that id', inputcv.x, inputcv.y + 200);
  } else {
    text(str, inputcv.x, inputcv.y + 200);
  }
}

function backcv() {
  background(200);
  textSize(40);
  inputcv.hide();
  buttoncvr.hide();
  buttoncvb.hide();
  titlecv.hide();

  title.show();
  title2.show();
  button.show();
  button2.show();
  button3.show();
  button4.show();
  button5.show();
  image(jsp, 150, 100, 700, 240);
}




function goVisitors() {
  var v = new visitors();
  hideMenu();
  inputv = createInput();
  inputv.position(160, 120);
  inputv.size(450, 100);
  inputv.style('font-size', '40px');

  buttonvr = createButton('read');
  buttonvr.position(inputv.x + inputv.width, inputv.y);
  buttonvr.size(200, 106);
  buttonvr.style('font-size', '40px');
  buttonvr.mousePressed(readv);

  buttonvb = createButton('go back');
  buttonvb.position(width / 2.5, height - 300);
  buttonvb.size(200, 106);
  buttonvb.style('font-size', '40px');
  buttonvb.mousePressed(backv);

  titlev = createElement('h1', 'Insert the visitor to read:');
  titlev.position(inputv.x, inputv.y - 130);
  titlev.style('font-size', '50px');
}

function readv() {
  background(200);
  var name = inputv.value();
  var str = JSON.stringify(visitorsj[name], null, 2);
  if (str == null) {
    text('There is no visitor with that id', inputv.x, inputv.y + 200);
  } else {
    text(str, inputv.x, inputv.y + 200);
  }
}

function backv() {
  background(200);
  textSize(40);
  inputv.hide();
  buttonvr.hide();
  buttonvb.hide();
  titlev.hide();

  title.show();
  title2.show();
  button.show();
  button2.show();
  button3.show();
  button4.show();
  button5.show();
  image(jsp, 150, 100, 700, 240);
}

var navbar = document.getElementById('navbar');

window.addEventListener('offline', event => {
    console.log('Estoy Offline!!');
    alerta.style.display ='block'
})

window.addEventListener('online', event => {
    console.log('Estoy online!!');
})

if (!navigator.onLine){
    console.log('Sin conexion...');
  alerta.style.display ='block'  
}


document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('input[type=text]').forEach( node => node.addEventListener('keypress', e => {
    if(e.keyCode == 13) {
      e.preventDefault();
    }
  }))
});
const loading = document.getElementById('loading_container'); 
const button = document.getElementById('boton');
const random = document.getElementById('random');
const inputElement = document.getElementById('nombre_pokemon');
const resultDiv = document.getElementById('pokeresult');
const pokeId = document.getElementById('id');
const pokeNombre = document.getElementById('nombre');
const pokeHabilidad = document.getElementById('habilidad');
const pokeImagen = document.getElementById('imagen');
const pokeTipo1 = document.getElementById('tipo1');
const pokeTipo1text = document.getElementById('tipo1text');
const pokeTipo2 = document.getElementById('tipo2');
const pokeTipo2text = document.getElementById('tipo2text');
const pokeone = document.getElementById('pokeone')

const gqlQuery = (pokemon) =>`query{
  pokemon(name: "${pokemon}") {
    id
    name
    sprites {
      front_default
    }
    types {
      type {
        name
      }
    }
  }
}`;
/*-------.then((res) => console.log('Response from server', res));----------*/

button.addEventListener('click', ()=>{
  const valorDeInput = inputElement.value;
  const dato = JSON.stringify;
  const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
  const yourUrl = 'https://graphql-pokeapi.graphcdn.app/';
  resultDiv.style.display = 'none'
  loading.style.display = 'block'
  agregado.style.display ='none'
  setTimeout(function(){ 
  fetch( yourUrl, { 
  credentials: 'omit',
  headers: { 'Content-Type': 'application/json' },
  body: dato({
    query: gqlQuery(valorDeInput),
  }),
  method: 'POST',
  })
  .then((res) => res.json())
  .then(function(json){
    pokeId.textContent = `#${ dato (json.data.pokemon.id) }`
    pokeNombre.textContent = dato (json.data.pokemon.name).replaceAll("\"", "").toUpperCase()
    pokeImagen.src = dato (json.data.pokemon.sprites.front_default).replaceAll("\"", "")
    caseTypes(json)
  })
  .finally(function(){
    loading.style.display = 'none'
    resultDiv.style.display = 'block'
  })
}, 1500); 
});


random.addEventListener('click', ()=>{
  const randompoke = Math.floor(Math.random() * 898 + 0);
  const dato = JSON.stringify;
  resultDiv.style.display = 'none'
  loading.style.display = 'block'
  agregado.style.display ='none'
  setTimeout(function(){ 
  fetch('https://graphql-pokeapi.graphcdn.app/', {
  credentials: 'omit',
  headers: { 'Content-Type': 'application/json' },
  body: dato({
    query: gqlQuery(randompoke),
  }),
  method: 'POST',
  })
  .then((res) => res.json())
  .then(function(json){
    pokeId.textContent = `#${ dato (json.data.pokemon.id) }`
    pokeNombre.textContent = dato (json.data.pokemon.name).replaceAll("\"", "").toUpperCase()
    pokeImagen.src = dato (json.data.pokemon.sprites.front_default).replaceAll("\"", "")
    caseTypes(json)
  })
  .finally(function(){
    loading.style.display = 'none'
    resultDiv.style.display = 'block'
  });
}, 1500); 
});

const caseTypes = (json) => {
  const dato = JSON.stringify;

  switch(dato (json.data.pokemon.types[0].type.name).replaceAll("\"", "")){
    case 'bug':
      pokeTipo1.src = '/img/tipos/Bicho.jpg'
      pokeTipo1text.textContent = dato (json.data.pokemon.types[0].type.name).replaceAll("\"", "").toUpperCase()
      resultDiv.style.background = 'linear-gradient(0deg, rgba(114,168,113,1) 0%, rgba(137,225,134,1) 50%, rgba(152,255,148,1) 100%)'
      pokeTipo1text.style.color = '#027400'
      pokeId.style.color = '#027400'
      pokeNombre.style.color = '#027400'
    break;
    case 'dark':
      pokeTipo1.src = '/img/tipos/Siniestro.jpg'
      pokeTipo1text.textContent = dato (json.data.pokemon.types[0].type.name).replaceAll("\"", "").toUpperCase()
      resultDiv.style.background = 'linear-gradient(0deg, rgba(34,34,34,1) 0%, rgba(65,65,65,1) 50%, rgba(106,106,106,1) 100%)'
      pokeTipo1text.style.color = '#d2d2d2'
      pokeId.style.color = '#d2d2d2'
      pokeNombre.style.color = '#d2d2d2'
    break;
    case 'dragon':
      pokeTipo1.src = '/img/tipos/Dragon.jpg'
      pokeTipo1text.textContent = dato (json.data.pokemon.types[0].type.name).replaceAll("\"", "").toUpperCase()
      resultDiv.style.background = 'linear-gradient(0deg, rgba(1,0,65,1) 0%, rgba(2,0,111,1) 50%, rgba(2,0,176,1) 100%)'
      pokeTipo1text.style.color = '#b2b1ff'
      pokeId.style.color = '#b2b1ff'
      pokeNombre.style.color = '#b2b1ff'
    break;
    case 'electric':
      pokeTipo1.src = '/img/tipos/Electrico.jpg'
      pokeTipo1text.textContent = dato (json.data.pokemon.types[0].type.name).replaceAll("\"", "").toUpperCase()
      resultDiv.style.background = 'linear-gradient(0deg, rgba(185,178,80,1) 0%, rgba(212,206,109,1) 50%, rgba(255,247,125,1) 100%)'
      pokeTipo1text.style.color = '#fff455'
      pokeId.style.color = '#fff455'
      pokeNombre.style.color = '#fff455'
    break;
    case 'fairy':
      pokeTipo1.src = '/img/tipos/Hada.jpg'
      pokeTipo1text.textContent = dato (json.data.pokemon.types[0].type.name).replaceAll("\"", "").toUpperCase()
      resultDiv.style.background = 'linear-gradient(0deg, rgba(255,93,166,1) 0%, rgba(255,123,183,1) 50%, rgba(255,170,208,1) 100%)'
      pokeTipo1text.style.color = '#ffd1e5'
      pokeId.style.color = '#ffd1e5'
      pokeNombre.style.color = '#ffd1e5'
    break;
    case 'fighting':
      pokeTipo1.src = '/img/tipos/Lucha.jpg'
      pokeTipo1text.textContent = dato (json.data.pokemon.types[0].type.name).replaceAll("\"", "").toUpperCase()
      resultDiv.style.background = 'linear-gradient(0deg, rgba(70,27,7,1) 0%, rgba(102,40,10,1) 50%, rgba(142,54,12,1) 100%)'
      pokeTipo1text.style.color = '#ff631b'
      pokeId.style.color = '#ff631b'
      pokeNombre.style.color = '#ff631b'
    break;
    case 'fire':
      pokeTipo1.src = '/img/tipos/Fuego.jpg'
      pokeTipo1text.textContent = dato (json.data.pokemon.types[0].type.name).replaceAll("\"", "").toUpperCase()
      resultDiv.style.background = 'linear-gradient(0deg, rgba(255,0,0,1) 0%, rgba(255,83,33,1) 50%, rgba(255,131,0,1) 100%)'
      pokeTipo1text.style.color = '#fbdcdc'
      pokeId.style.color = '#fbdcdc'
      pokeNombre.style.color = '#fbdcdc'
    break;
    case 'flying':
      pokeTipo1.src = '/img/tipos/Volador.jpg'
      pokeTipo1text.textContent = dato (json.data.pokemon.types[0].type.name).replaceAll("\"", "").toUpperCase()
      resultDiv.style.background = 'linear-gradient(0deg, rgba(0,137,209,1) 0%, rgba(27,177,255,1) 50%, rgba(81,196,255,1) 100%)'
      pokeTipo1text.style.color = '#88d5ff'
      pokeId.style.color = '#88d5ff'
      pokeNombre.style.color = '#88d5ff'
    break;
    case 'ghost':
      pokeTipo1.src = '/img/tipos/Fantasma.jpg'
      pokeTipo1text.textContent = dato (json.data.pokemon.types[0].type.name).replaceAll("\"", "").toUpperCase()
      resultDiv.style.background = 'linear-gradient(0deg, rgba(42,28,46,1) 0%, rgba(75,51,80,1) 50%, rgba(105,70,113,1) 100%)'
      pokeTipo1text.style.color = '#9a65a9'
      pokeId.style.color = '#9a65a9'
      pokeNombre.style.color = '#9a65a9'
    break;
    case 'grass':
      pokeTipo1.src = '/img/tipos/Planta.jpg'
      pokeTipo1text.textContent = dato (json.data.pokemon.types[0].type.name).replaceAll("\"", "").toUpperCase()
      resultDiv.style.background = 'linear-gradient(0deg, rgba(0,75,0,1) 0%, rgba(0,92,0,1) 50%, rgba(0,130,0,1) 100%)'
      pokeTipo1text.style.color = '#01a501'
      pokeId.style.color = '#01a501'
      pokeNombre.style.color = '#01a501'
    break;
    case 'ground':
      pokeTipo1.src = '/img/tipos/Tierra.jpg'
      pokeTipo1text.textContent = dato (json.data.pokemon.types[0].type.name).replaceAll("\"", "").toUpperCase()
      resultDiv.style.background = 'linear-gradient(0deg, rgba(152,99,54,1) 0%, rgba(187,123,67,1) 50%, rgba(221,144,79,1) 100%)'
      pokeTipo1text.style.color = '#ffa250'
      pokeId.style.color = '#ffa250'
      pokeNombre.style.color = '#ffa250'
    break;
    case 'ice':
      pokeTipo1.src = '/img/tipos/Hielo.jpg'
      pokeTipo1text.textContent = dato (json.data.pokemon.types[0].type.name).replaceAll("\"", "").toUpperCase()
      resultDiv.style.background = 'linear-gradient(0deg, rgba(193,232,255,1) 0%, rgba(201,233,252,1) 50%, rgba(243,251,255,1) 100%)'
      pokeTipo1text.style.color = '#00a2ff'
      pokeId.style.color = '#00a2ff'
      pokeNombre.style.color = '#00a2ff'
    break;
    case 'normal':
      pokeTipo1.src = '/img/tipos/Normal.jpg'
      pokeTipo1text.textContent = dato (json.data.pokemon.types[0].type.name).replaceAll("\"", "").toUpperCase()
      resultDiv.style.background = 'linear-gradient(0deg, rgba(191,191,191,1) 0%, rgba(221,220,220,1) 50%, rgba(238,238,238,1) 100%)'
      pokeTipo1text.style.color = '#828282'
      pokeId.style.color = '#828282'
      pokeNombre.style.color = '#828282'
    break;
    case 'poison':
      pokeTipo1.src = '/img/tipos/Veneno.jpg'
      pokeTipo1text.textContent = dato (json.data.pokemon.types[0].type.name).replaceAll("\"", "").toUpperCase()
      resultDiv.style.background = 'linear-gradient(0deg, rgba(122,0,158,1) 0%, rgba(147,0,194,1) 50%, rgba(180,0,236,1) 100%)'
      pokeTipo1text.style.color = '#e89eff'
      pokeId.style.color = '#e89eff'
      pokeNombre.style.color = '#e89eff'
    break;
    case 'psychic':
      pokeTipo1.src = '/img/tipos/Psiquico.jpg'
      pokeTipo1text.textContent = dato (json.data.pokemon.types[0].type.name).replaceAll("\"", "").toUpperCase()
      resultDiv.style.background = 'linear-gradient(0deg, rgba(255,96,124,1) 0%, rgba(255,116,140,1) 50%, rgba(255,142,162,1) 100%)'
      pokeTipo1text.style.color = '#ffdae1'
      pokeId.style.color = '#ffdae1'
      pokeNombre.style.color = '#ffdae1'
    break;
    case 'rock':
      pokeTipo1.src = '/img/tipos/Roca.jpg'
      pokeTipo1text.textContent = dato (json.data.pokemon.types[0].type.name).replaceAll("\"", "").toUpperCase()
      resultDiv.style.background = 'linear-gradient(0deg, rgba(110,49,13,1) 0%, rgba(147,64,16,1) 50%, rgba(181,74,13,1) 100%)'
      pokeTipo1text.style.color = '#ff7f34'
      pokeId.style.color = '#ff7f34'
      pokeNombre.style.color = '#ff7f34'
    break;
    case 'steel':
      pokeTipo1.src = '/img/tipos/Acero.jpg'
      pokeTipo1text.textContent = dato (json.data.pokemon.types[0].type.name).replaceAll("\"", "").toUpperCase()
      resultDiv.style.background = 'linear-gradient(0deg, rgba(77,77,77,1) 0%, rgba(134,134,134,1) 50%, rgba(173,173,173,1) 100%)'
      pokeTipo1text.style.color = '#d4d4d4'
      pokeId.style.color = '#d4d4d4'
      pokeNombre.style.color = '#d4d4d4'
    break;
    case 'water':
      pokeTipo1.src = '/img/tipos/Agua.jpg'
      pokeTipo1text.textContent = dato (json.data.pokemon.types[0].type.name).replaceAll("\"", "").toUpperCase()
      resultDiv.style.background = 'linear-gradient(0deg, rgba(24,80,126,1) 0%, rgba(31,106,166,1) 50%, rgba(49,142,218,1) 100%)'
      pokeTipo1text.style.color = '#34a3ff'
      pokeId.style.color = '#34a3ff'
      pokeNombre.style.color = '#34a3ff'
    break;
  }

  if(dato (json.data.pokemon.types[1])){
  switch(dato (json.data.pokemon.types[1].type.name).replaceAll("\"", "")){
    case 'bug':
      pokeTipo2.src = '/img/tipos/Bicho.jpg'
      pokeTipo2text.textContent = dato (json.data.pokemon.types[1].type.name).replaceAll("\"", "").toUpperCase()
      pokeTipo2text.style.color = '#027400'
    break;
    case 'dark':
      pokeTipo2.src = '/img/tipos/Siniestro.jpg'
      pokeTipo2text.textContent = dato (json.data.pokemon.types[1].type.name).replaceAll("\"", "").toUpperCase()
      pokeTipo2text.style.color = '#d2d2d2'
    break;
    case 'dragon':
      pokeTipo2.src = '/img/tipos/Dragon.jpg'
      pokeTipo2text.textContent = dato (json.data.pokemon.types[1].type.name).replaceAll("\"", "").toUpperCase()
      pokeTipo2text.style.color = '#b2b1ff'
    break;
    case 'electric':
      pokeTipo2.src = '/img/tipos/Electrico.jpg'
      pokeTipo2text.textContent = dato (json.data.pokemon.types[1].type.name).replaceAll("\"", "").toUpperCase()
      pokeTipo2text.style.color = '#fff455'
    break;
    case 'fairy':
      pokeTipo2.src = '/img/tipos/Hada.jpg'
      pokeTipo2text.textContent = dato (json.data.pokemon.types[1].type.name).replaceAll("\"", "").toUpperCase()
      pokeTipo2text.style.color = '#ffd1e5'
    break;
    case 'fighting':
      pokeTipo2.src = '/img/tipos/Lucha.jpg'
      pokeTipo2text.textContent = dato (json.data.pokemon.types[1].type.name).replaceAll("\"", "").toUpperCase()
      pokeTipo2text.style.color = '#ff631b'
    break;
    case 'fire':
      pokeTipo2.src = '/img/tipos/Fuego.jpg'
      pokeTipo2text.textContent = dato (json.data.pokemon.types[1].type.name).replaceAll("\"", "").toUpperCase()
      pokeTipo2text.style.color = '#fbdcdc'
    break;
    case 'flying':
      pokeTipo2.src = '/img/tipos/Volador.jpg'
      pokeTipo2text.textContent = dato (json.data.pokemon.types[1].type.name).replaceAll("\"", "").toUpperCase()
      pokeTipo2text.style.color = '#88d5ff'
    break;
    case 'ghost':
      pokeTipo2.src = '/img/tipos/Fantasma.jpg'
      pokeTipo2text.textContent = dato (json.data.pokemon.types[1].type.name).replaceAll("\"", "").toUpperCase()
      pokeTipo2text.style.color = '#9a65a9'
    break;
    case 'grass':
      pokeTipo2.src = '/img/tipos/Planta.jpg'
      pokeTipo2text.textContent = dato (json.data.pokemon.types[1].type.name).replaceAll("\"", "").toUpperCase()
      pokeTipo2text.style.color = '#01a501'
    break;
    case 'ground':
      pokeTipo2.src = '/img/tipos/Tierra.jpg'
      pokeTipo2text.textContent = dato (json.data.pokemon.types[1].type.name).replaceAll("\"", "").toUpperCase()
      pokeTipo2text.style.color = '#ffa250'
    break;
    case 'ice':
      pokeTipo2.src = '/img/tipos/Hielo.jpg'
      pokeTipo2text.textContent = dato (json.data.pokemon.types[1].type.name).replaceAll("\"", "").toUpperCase()
      pokeTipo2text.style.color = '#00a2ff'
    break;
    case 'normal':
      pokeTipo2.src = '/img/tipos/Normal.jpg'
      pokeTipo2text.textContent = dato (json.data.pokemon.types[1].type.name).replaceAll("\"", "").toUpperCase()
      pokeTipo2text.style.color = '#828282'
    break;
    case 'poison':
      pokeTipo2.src = '/img/tipos/Veneno.jpg'
      pokeTipo2text.textContent = dato (json.data.pokemon.types[1].type.name).replaceAll("\"", "").toUpperCase()
      pokeTipo2text.style.color = '#e89eff'
    break;
    case 'psychic':
      pokeTipo2.src = '/img/tipos/Psiquico.jpg'
      pokeTipo2text.textContent = dato (json.data.pokemon.types[1].type.name).replaceAll("\"", "").toUpperCase()
      pokeTipo2text.style.color = '#ffdae1'
    break;
    case 'rock':
      pokeTipo2.src = '/img/tipos/Roca.jpg'
      pokeTipo2text.textContent = dato (json.data.pokemon.types[1].type.name).replaceAll("\"", "").toUpperCase()
      pokeTipo2text.style.color = '#ff7f34'
    break;
    case 'steel':
      pokeTipo2.src = '/img/tipos/Acero.jpg'
      pokeTipo2text.textContent = dato (json.data.pokemon.types[1].type.name).replaceAll("\"", "").toUpperCase()
      pokeTipo2text.style.color = '#d4d4d4'
    break;
    case 'water':
      pokeTipo2.src = '/img/tipos/Agua.jpg'
      pokeTipo2text.textContent = dato (json.data.pokemon.types[1].type.name).replaceAll("\"", "").toUpperCase()
      pokeTipo2text.style.color = '#34a3ff'
    break;
  }}else{
    pokeTipo2.src = ''
    pokeTipo2text.textContent = ''
  }
}


var db, input, ul;

function init(){
  db = new Dexie("pokemon");
  ul = document.getElementById('resultado');

  document.body.addEventListener('submit', onSubmit);
  document.body.addEventListener('click', onClick);

  db.version(1).stores({ todo: '_id'});
  db.open()
    .then(refreshView);
}

// Function para Agregar a la lista de To DO's al clickear el boton 
function onSubmit(event){
  // prevenir que se submitee un formulario realmente
  event.preventDefault();
  db.todo.put({ 
  text: [
    pokeId.textContent, 
    pokeNombre.textContent, 
    pokeImagen.src, 
    pokeTipo1text.textContent,pokeTipo1.src,
    pokeTipo2text.textContent,pokeTipo2.src,
    resultDiv.style.background,pokeTipo1text.style.color,
    pokeTipo2text.style.color
  ], 
    _id: String(Date.now())})
  .then(function(){
    agregado.style.display ='block'
  })
  .then(refreshView);
}

// Function para remover elementos de la lista TODO. Lo que ejecuta cuando clickeas el tacho
function onClick(event){
  var id;

  if(event.target.hasAttribute('id') && event.target.classList.contains('eliminar')) {
    event.preventDefault();

    // cual es el ID a borrar?
    id = event.target.getAttribute("id");

    db.todo.where('_id').equals(id).delete()
    .then(refreshView);
  }
};

function refreshView(){
  return db.todo.toArray().then(
    function(todos){
       var html = '';

      for (var i=0; i <todos.length; i++){
        html += `<li>
        <div class="pokecard2">
        <div id="pokeresult2" style="background: ${todos[i].text[7]} ;">
        <button id="${todos[i]._id}" class="eliminar">Eliminar</button>
          <div class="pokeimagen">
            <img id="imagen" src="${todos[i].text[2]}">
          </div>
          <div class="pokedatos">
            <div class="tipos">
              <div class="poketipo1">
                <img id="tipo1" src="${todos[i].text[4]}">
                <p id="tipo1text" style="color: ${todos[i].text[8]}" >${todos[i].text[3]}</p>
              </div>
              <div class="poketipo2">
                <img id="tipo2" src="${todos[i].text[6]}" onerror="this.src=''">
                <p id="tipo2text" style="color: ${todos[i].text[9]}">${todos[i].text[5]}</p>
              </div>
            </div>
            <div class="pokenombre2">
              <p id="id2" style="color: ${todos[i].text[8]}">${todos[i].text[0]}</p>
              <h2 id="nombre2" style="color: ${todos[i].text[8]}">${todos[i].text[1]}</h2>
            </div>
          </div>
        </div>
      </div>
      </li>`;
      }
      ul.innerHTML = html;
      
    }
  )
}


init();
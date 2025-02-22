const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");

const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const types = document.getElementById("types");


searchBtn.addEventListener("click",async ()=>{
  const text = searchInput.value.toLowerCase();    
  try{
    
    const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${text}`);
    if(!res.ok)
    {
      alert("Pokémon not found");
      return;
    }
    const data = await res.json();
    pokemonName.innerHTML = `${data.name.toUpperCase()}`;
    pokemonId.innerHTML = `#${data.id}`;
    weight.innerHTML = `Weight: ${data.weight}`;
    height.innerHTML = `Height: ${data.height}`;
    hp.innerHTML = `${data.stats.find((el)=>el.stat.name==="hp").base_stat}`;
    attack.innerHTML = `${data.stats.find((el)=>el.stat.name==="attack").base_stat}`;
    defense.innerHTML = `${data.stats.find((el)=>el.stat.name==="defense").base_stat}`;
    specialAttack.innerHTML = `${data.stats.find((el)=>el.stat.name==="special-attack").base_stat}`;
    specialDefense.innerHTML = `${data.stats.find((el)=>el.stat.name==="special-defense").base_stat}`;
    speed.innerHTML = `${data.stats.find((el)=>el.stat.name==="speed").base_stat}`;
    if(types.innerHTML)
    {
      types.innerHTML="";
    }
    data.types.forEach((el)=>{
      types.innerHTML+=`<div>${el.type.name.toUpperCase()}</div>`;    
    })
    const spriteEl = document.getElementById("sprite");
    if(spriteEl)
    {
      spriteEl.remove();
    }
    const img = document.createElement("img");
    img.src=data.sprites.front_default;
    img.alt="pokemon_pic";
    img.id="sprite";  
    document.body.appendChild(img); 
 }
  catch(err)
  {
    console.log(err);
  }
})
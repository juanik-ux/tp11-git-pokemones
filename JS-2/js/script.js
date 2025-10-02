// Código limpio: Array de objetos Pokémon y menú de interacción

// Array precargado con 3 pokemones
const pokemones = [
  {
    nombre: "Pikachu",
    nivel: 25,
    tipo: ["eléctrico"],
    foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    hp: 60,
    hp_total: 60,
    evolucion: false,
  },
  {
    nombre: "Charmander",
    nivel: 15,
    tipo: ["fuego"],
    foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    hp: 50,
    hp_total: 50,
    evolucion: false,
  },
  {
    nombre: "Bulbasaur",
    nivel: 18,
    tipo: ["planta", "veneno"],
    foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    hp: 55,
    hp_total: 55,
    evolucion: false,
  },
];

// Funciones auxiliares
function mostrarPokemones() {
  console.log("Array completo de pokemones:", pokemones);
  console.log(
    "Lista de nombres: ",
    pokemones.map((p) => p.nombre).join(", ")
  );
}

function cargarPokemon() {
  let seguir = true;
  while (seguir) {
    const nombre = prompt("Ingrese el nombre del Pokémon:");
    if (nombre === null) break; // usuario canceló
    const nivel = Number(prompt("Ingrese el nivel del Pokémon (número):")) || 1;
    const tiposRaw = prompt(
      "Ingrese los tipos separados por comas (ej: fuego,volador):"
    );
    const tipos = tiposRaw ? tiposRaw.split(",").map((t) => t.trim()) : [];
    const foto = prompt("Ingrese la URL de la foto (opcional):") || "";
    const hp_total = Number(prompt("Ingrese el HP total del Pokémon (número):")) || 50;
    const hp = Number(prompt("Ingrese el HP actual del Pokémon (número):")) || hp_total;
    const evolucion = prompt("¿Está en evolución? (si/no)") === "si";

    const nuevo = {
      nombre,
      nivel,
      tipo: tipos,
      foto,
      hp,
      hp_total,
      evolucion,
    };

    pokemones.push(nuevo);

    const resp = prompt("¿Desea cargar otro Pokémon? (si/no)");
    if (resp !== "si") seguir = false;
  }
}

function restarHp() {
  if (pokemones.length === 0) {
    alert("No hay pokemones cargados.");
    return;
  }

  const lista = pokemones.map((p, i) => `${i + 1}. ${p.nombre} (HP: ${p.hp}/${p.hp_total})`).join("\n");
  const eleccion = Number(prompt("Elija un pokémon por número:\n" + lista));
  if (!eleccion || eleccion < 1 || eleccion > pokemones.length) {
    alert("Selección inválida.");
    return;
  }
  const idx = eleccion - 1;
  const resta = Number(prompt("Ingrese cuánto HP restar (número):")) || 0;
  pokemones[idx].hp = Math.max(0, pokemones[idx].hp - resta);
}

// Menú principal
function menu() {
  let salir = false;
  while (!salir) {
    const opcion = prompt(
      "Seleccione una opción:\n1. Mostrar pokemones\n2. Cargar un nuevo pokémon\n3. Restar HP a un pokémon\n4. Salir"
    );
    if (opcion === null) break; // cancelar
    switch (opcion) {
      case "1":
        mostrarPokemones();
        break;
      case "2":
        cargarPokemon();
        mostrarPokemones();
        break;
      case "3":
        restarHp();
        mostrarPokemones();
        break;
      case "4":
        salir = true;
        break;
      default:
        alert("Opción inválida. Intente 1, 2, 3 o 4.");
    }
  }
}

// Ejecuta el menú al cargar la página
menu();

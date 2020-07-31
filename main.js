// const dinosaur = {
//   species: "trex",
//   period: "modern",
//   carnivore: true,
//   extinct: true,
// };

const makeDino = function(name, era, eatsMeat, isExtinct = false) {
  const dinosaur = {
    species: name,
    period: era,
    carnivore: eatsMeat,
    extinct: isExtinct,
  };
  return dinosaur;
}
// makeDino('trex', 'modern', true) //?

const makeSingular = function(obj) {
  let newDino = makeDino(obj.species, obj.period, obj.carnivore, obj.extinct);
    if (obj.species.slice(-2) === "us") {
      newDino.species = newDino.species.slice(0, -2);
      return newDino;
    } else {
      return newDino;
    }
    }  

const truncateSpecies = function(obj) {
  let newDino = makeDino(obj.species, obj.period, obj.carnivore, obj.extinct);
    if (obj.species.length > 10) {
      newDino.species = newDino.species.slice(0, 7) + "...";
      return newDino
    } else {
      return newDino;
    }
}





const makeExtinct = function(obj) {
  let newDino = makeDino(obj.species, obj.period, obj.carnivore, true)
    return newDino;
}

  



module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct
}
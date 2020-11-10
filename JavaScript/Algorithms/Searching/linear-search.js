// linear search or sequential search is a method for finding an element within a list. 
// It sequentially checks each element of the list until a match is found or the whole list has been searched.

// Best O(1)
// Worst O(n)

const beasts = ['Centaur', 'Godzilla', 'Mosura', 'Minotaur', 'Hydra', 'Nessie'];

console.log(beasts.indexOf('Godzilla'));

console.log(beasts.findIndex(function(item){
  return item === 'Godzilla';
}));

console.log(beasts.find(function(item){
  return item === 'Godzilla';
}));

console.log(beasts.includes('Godzilla'));


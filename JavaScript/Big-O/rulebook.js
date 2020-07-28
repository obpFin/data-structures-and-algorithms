// Rule 1: Worst Case
function findNemo(fish) {   // O(n)
  for (let i = 0; i < fish.length; i++) {
    if (fish[i] === 'nemo') {   // Assume that i is the last item in the list
      console.log('Found NEMO!');
    }
  }
}

// Rule 2: Remove Constants
function printFirstItemThenFirstHalfThenSayHi100Times(items) {    // O(1 + n/2 + 100) -> O(n)
  console.log(items[0]);

  var middleIndex = Math.floor(items.length / 2);
  var index = 0;

  while (index < middleIndex) {
      console.log(items[index]);
      index++;
  }

  for (var i = 0; i < 100; i++) {
      console.log('hi');
  }
}

// Rule 3: Different terms for inputs
function compressBoxesTwice(boxes, boxes2) {    // O(a + b)
  boxes.forEach(box => {
    console.log(box)
  });

  boxes2.forEach(box => {
    console.log(box)
  });
}

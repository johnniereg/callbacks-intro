// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(name, index, array) {
    if (name === "Waldo") {
      found(name, index, array);   // execute callback
    }
  });
}

function actionWhenFound(name, index, array) {
  console.log(name, "was found at index", index, "in array:", array);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
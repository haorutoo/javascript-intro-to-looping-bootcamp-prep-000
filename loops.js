function forLoop(array){
  for (let i = 0; i < 25; i++) {
    var j = parseInt(i) + 1
    if (j == 1) {
      array[i] = array.push("I am 1 strange loop.")
    }
    else {
      array[i] = array.push("I am ${j} strange loops.")
    }
  }
  return array
}

function whileLoop(n){
  //console.log(n)
  while (n > 0){
    console.log(--n)
  }
  return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do {
    array.length = array.length-1
  } while (array.length>0 && maybeTrue());
  return array
}

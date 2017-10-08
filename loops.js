function forLoop(array){
  for (let i = 0; i < 25; i++) {
    var j = parseInt(i) + 1
    if (j == 1) {
<<<<<<< HEAD
      array[i] = array.push("I am 1 strange loop.")
    }
    else {
      array[i] = array.push("I am ${j} strange loops.")
=======
      array[i] = ("I am 1 strange loop.")
    }
    else {
      array[i] = ("I am ${j} strange loops.")
>>>>>>> 5990db0ab2482b0538d3c173cbe3649e7629ad55
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
<<<<<<< HEAD

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do {
    array.length = array.length-1
  } while (array.length>0 && maybeTrue());
  return array
}
=======
>>>>>>> 5990db0ab2482b0538d3c173cbe3649e7629ad55

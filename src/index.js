
exports.min = function min (array) {
  let min = 0;
  if(!!array == false || array.legth === 0) {
  	return 0;
  }else {
    for (let i = 0; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
      }
    }
    return min;
  }
}

exports.max = function max (array) {
  let max = 0;
  if(!!array == false || array.legth === 0) {
  	return 0;
  }else {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i];
      }
    }
    return max;
  }
}

exports.avg = function avg (array) {
  let sum = 0;
  let counter = 0;
  if(!!array == false || array.length === 0) {
  	return 0;
	}
  for (let i = 0; i < array.length; i++) {
     sum += array[i];
     ++counter;
  }
  return sum/counter;
}
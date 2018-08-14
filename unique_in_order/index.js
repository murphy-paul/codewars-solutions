function uniqueInOrder(iterable) {
  if (iterable === undefined || iterable.lenght === 0) {
    return [];
  }

  const input = Array.isArray(iterable) ? iterable :  iterable.split('');

  return loop([], input);
}

/**
 * result - array containing the result
 * iterable - input array to the function
 */
function loop(result, iterable) {
  if(iterable.length === 0) {
    return result;
  }
  const next = iterable.shift();
  if (result.length === 0) {
    result.push(next);
  } else {
    const last = result[result.length - 1];

    if (last !== next) {
      result.push(next);
    }
  }
  return loop(result, iterable);
}

module.exports = uniqueInOrder;

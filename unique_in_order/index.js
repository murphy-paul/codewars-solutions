function uniqueInOrder(iterable) {
  if (iterable === undefined || iterable.length === 0) {
    return [];
  }

  const input = Array.isArray(iterable) ? iterable :  iterable.split('');

  return recur([], input);
}

/**
 * Recursive solution to remove duplicates
 *
 * result - array containing the result
 * iterable - input array to the function
 */
function recur(result, iterable) {
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
  return recur(result, iterable);
}

/**
 * Solution using a imperative loop
 */
function loop(it) {

  let result = [];
  let last;

  for (let i = 0; i < it.length; i++) {
    if (it[i] !== last) {
      result.push(last = it[i])
    }
  }

  return result

}

module.exports = uniqueInOrder;

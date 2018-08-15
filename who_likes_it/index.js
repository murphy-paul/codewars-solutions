/**
 * Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who
 * like an item. It must return the display text as shown in the examples:
 *
 * <pre>
 *  likes [] // must be "no one likes this"
 *  likes ["Peter"] // must be "Peter likes this"
 *  likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
 *  likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
 *  likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
 * </pre>
 *
 */

function likesWithRecur(names) {
  if (names === undefined || names.length === 0) {
    return "no one likes this"
  }

  const result = recur([], names);

  if (result.length === 1) {
    return `${result[0]} likes this`;
  } else if (result.length === 2) {
    return `${result.join(' and ') } like this`
  } else {
    return `${result[0]}, ${result[1]} and ${result[2]} like this`;
  }
}

function likes(names) {
  names = names || [];

  switch(names.length) {
    case 0: return 'no one likes this'; break;
    case 1: return `${names[0]} likes this`; break;
    case 2: return `${names[0]} and ${names[1]} like this`; break;
    case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`; break;
    default: return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`; break;
  }
}

/**
 * Recursive solution.
 *
 * @param result holds the result. Should be empty on first iteration
 * @param names holds the input values
 */
function recur(result, names) {
  if (names.length === 0) {
    return result;
  }

  if (result.length !== 3) {
    result.push(names.shift());

    return recur(result, names);
  }

  // Throw away the last name
  result.pop();

  result.push(`${names.length + 1} others`);

  return result;

}

module.exports = likes;

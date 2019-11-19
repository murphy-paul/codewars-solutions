/**
 * Write function bmi that calculates body mass index (bmi = weight / height ^ 2).
 * <pre>
 *      if bmi <= 18.5 return "Underweight"
 *
 *      if bmi <= 25.0 return "Normal"
 *
 *      if bmi <= 30.0 return "Overweight"
 *
 *      if bmi > 30 return "Obese"
 * </pre
 * @param weight
 * @param height
 * @returns {string} containing the result
 */
function bmi(weight, height) {
    let result = weight/(height*height);
    if (result <= 18.5) {
        return "Underweight";
    } else if (result <= 25.0) {
        return "Normal";
    } else if (result <= 30.0) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

module.exports = bmi;

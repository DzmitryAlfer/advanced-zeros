module.exports = function getZerosCount(number, base) {
    let multipliers = [];
    let num = 2;

    while (num <= base) {
        if (base % num === 0) {
            let power = 0;

            while (base % num === 0) {          
                base /= num;
                ++power;
            }

            multipliers.push({num: num, power: power});
        }

        ++num;
    }
  
    let result = -1;

    multipliers.forEach(multiplier => {
        let count = 0;
  
        for(let divisor = multiplier.num; divisor < number; divisor *= multiplier.num) {
            count += Math.floor(number / divisor);
        }
  
        count = Math.floor(count / multiplier.power);
  
        if(count < result || result < 0) {
            result = count;
        }
    });
  
    return result;
  }
/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        let init = x;
        for(let i=0; i<functions.length; i++){
            init = functions[functions.length-i-1](init);
        }
        return init;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

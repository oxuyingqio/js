// JS Math对象扩展

/**
 * 减法 subtrahend-minuend,精度precision
 * 
 * @param subtrahend
 * @param minuend
 * @param precision
 * @returns
 */
Math.subtract = function(subtrahend, minuend, precision) {
	var a = parseFloat(subtrahend);
	var b = parseFloat(minuend);

	return (a - b).toFixed(precision);
}
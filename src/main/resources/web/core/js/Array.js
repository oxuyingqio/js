/**
 * Array
 * 
 * 数组
 * 
 * 对象扩展
 */

/**
 * 清空数组
 */
Array.prototype.clear = function() {
	this.length > 0 && this.splice(0, this.length);
};

/**
 * 判断是否存在指定元素
 * 
 * @param item
 * @returns {Boolean}
 */
Array.prototype.contains = function(item) {
	var index = this.indexOf(item);
	return (index >= 0);
};

/**
 * 获取指定元素下标值
 * 
 * @param item
 * @returns {Number}
 */
Array.prototype.indexOf = function(item) {
	var length = this.length;

	if (length != 0) {
		for (var index = 0; index < length; index++) {
			if (this[index] === item) {
				return index;
			}
		}
	}

	return -1;
};

/**
 * 指定下标值插入元素
 * 
 * @param index
 * @param item
 */
Array.prototype.insert = function(index, item) {
	this.splice(index, 0, item);
};

/**
 * 删除指定元素
 * 
 * @param item
 */
Array.prototype.remove = function(item) {
	var index = this.indexOf(item);

	index >= 0 && this.splice(index, 1);
};

/**
 * 删除指定下标位置的元素
 * 
 * @param index
 */
Array.prototype.removeAt = function(index) {
	this.splice(index, 1);
};

/**
 * Array
 * 
 * 数组
 * 
 * 对象扩展
 */

/**
 * 清空数组
 * 
 * @returns
 */
Array.prototype.clear = function() {

	this.length > 0 && this.splice(0, this.length);
};

/**
 * 判断是否存在指定对象
 * 
 * @param obj
 *            对象
 * @returns {Boolean}
 */
Array.prototype.contains = function(obj) {

	var index = this.indexOf(obj);
	return (index >= 0);
};

/**
 * 获取指定对象下标值
 * 
 * @param obj
 *            对象
 * @returns {Number}
 */
Array.prototype.indexOf = function(obj) {

	var length = this.length;
	if (length != 0) {
		for (var index = 0; index < length; index++) {

			if (this[index] === obj) {
				return index;
			}
		}
	}

	return -1;
};

/**
 * 指定下标值插入对象
 * 
 * @param index
 *            下标索引
 * @param obj
 *            对象
 * @returns
 */
Array.prototype.insert = function(index, obj) {

	this.splice(index, 0, obj);
};

/**
 * 删除指定对象
 * 
 * @param obj
 *            对象
 * @returns
 */
Array.prototype.remove = function(obj) {

	var index = this.indexOf(obj);
	index >= 0 && this.splice(index, 1);
};

/**
 * 删除指定下标位置的对象
 * 
 * @param index
 *            下标索引
 * @returns
 */
Array.prototype.removeAt = function(index) {

	this.splice(index, 1);
};

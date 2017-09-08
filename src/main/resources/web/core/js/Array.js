/**
 * @name	Array
 * @package	core.js
 * @desc	数组
 * @type	类扩展
 * 
 * @method	Array	clear()								清空数组.
 * 			Boolean	contains(Object object)				是否存在指定对象.
 * 			Number	indexOf(Object object)				获取指定对象下标值.
 * 			Array	insert(Number index, Object object)	在指定下标位置插入对象.
 * 			Array	remove(Object object)				删除指定对象.
 * 			Array	removeAt(Number index)				删除指定下标位置的对象.
 * 
 * @date	2016年8月20日 09:45:15
 */

/**
 * 清空数组
 * 
 * @returns {Array}
 */
Array.prototype.clear = function() {

	// 长度>0,则清空
	this.length > 0 && this.splice(0, this.length);

	return this;
};

/**
 * 是否存在指定对象
 * 
 * @param object{Object}
 *            对象
 * @returns {Boolean}
 */
Array.prototype.contains = function(object) {

	// 获取对象下标值
	var index = this.indexOf(object);
	// 依据下标值判断是否存在该对象
	return (index >= 0);
};

/**
 * 获取指定对象下标值
 * 
 * @param object{Object}
 *            对象
 * @returns {Number}
 */
Array.prototype.indexOf = function(object) {

	// 遍历数组
	for (var index = 0, length = this.length; index < length; index++) {

		if (this[index] === object) {
			
			return index;
		}
	}

	return -1;
};

/**
 * 在指定下标位置插入对象
 * 
 * @param index{Number}
 *            下标值
 * @param object{Object}
 *            对象
 * @returns {Array}
 */
Array.prototype.insert = function(index, object) {

	this.splice(index, 0, object);

	return this;
};

/**
 * 删除指定对象
 * 
 * @param object{Object}
 *            对象
 * @returns {Array}
 */
Array.prototype.remove = function(object) {

	// 获取对应下标值
	var index = this.indexOf(object);
	// 存在则删除
	index >= 0 && this.splice(index, 1);

	return this;
};

/**
 * 删除指定下标位置的对象
 * 
 * @param index{Number}
 *            下标索引
 * @returns {Array}
 */
Array.prototype.removeAt = function(index) {

	this.splice(index, 1);

	return this;
};
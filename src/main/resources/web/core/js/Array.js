/**
 * @name	Array
 * @package	core.js
 * @desc	数组
 * @type	类扩展
 * 
 * @method	void	clear()								清空数组
 * 			Boolean	contains(Object object)				是否存在指定对象
 * 			Number	indexOf(Object object)				获取指定对象下标值
 * 			void	insert(Number index, Object object)	在指定下标位置插入对象
 * 			void	remove(Object object)				删除指定对象
 * 			void	removeAt(Number index)				删除指定下标位置的对象
 * 
 * @date	2016年8月20日 09:45:15
 */

/**
 * 清空数组
 * 
 * @returns
 */
Array.prototype.clear = function() {

	// 长度>0,则清空
	this.length > 0 && this.splice(0, this.length);
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

		if (this[index] === obj) {
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
 * @returns
 */
Array.prototype.insert = function(index, object) {

	this.splice(index, 0, object);
};

/**
 * 删除指定对象
 * 
 * @param object{Object}
 *            对象
 * @returns
 */
Array.prototype.remove = function(object) {

	// 获取对应下标值
	var index = this.indexOf(object);
	// 存在则删除
	index >= 0 && this.splice(index, 1);
};

/**
 * 删除指定下标位置的对象
 * 
 * @param index{Number}
 *            下标索引
 * @returns
 */
Array.prototype.removeAt = function(index) {

	this.splice(index, 1);
};
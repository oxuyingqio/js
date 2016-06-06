/**
 * Map
 * 
 * 集合
 * 
 * 类
 */

core.util.Map = function() {

	// 元素
	var elements = {};
	// 元素数
	var length = 0;

	/**
	 * 返回此映射中的键-值映射关系数
	 * 
	 * @returns {Number}
	 */
	this.size = function() {

		return length;
	};

	/**
	 * 如果此映射未包含键-值映射关系，则返回 true。
	 * 
	 * @returns {Boolean}
	 */
	this.isEmpty = function() {

		return (length === 0);
	};

	/**
	 * 如果此映射包含指定键的映射关系，则返回 true。
	 * 
	 * @param key
	 *            键
	 * @returns {Boolean}
	 */
	this.containsKey = function(key) {

		return (elements[key] !== undefined);
	};

	/**
	 * 如果此映射将一个或多个键映射到指定值，则返回 true。
	 * 
	 * @param value
	 *            值
	 * @returns {Boolean}
	 */
	this.containsValue = function(value) {

		for (key in elements) {

			if (elements[key] === value) {
				return true;
			}
		}

		return false;
	};

	/**
	 * 返回指定键所映射的值；如果此映射不包含该键的映射关系，则返回 null。
	 * 
	 * @param key
	 *            键
	 * @returns {Object}
	 */
	this.get = function(key) {

		return elements[key];
	};

	/**
	 * 将指定的值与此映射中的指定键关联（可选操作）。
	 * 
	 * @param key
	 *            键
	 * @param value
	 *            值
	 * @returns
	 */
	this.put = function(key, value) {

		!this.containsKey(key) && length++;
		elements[key] = value;
	};

	/**
	 * 如果存在一个键的映射关系，则将其从此映射中移除（可选操作）。
	 * 
	 * @param key
	 *            键
	 * @returns
	 */
	this.remove = function(key) {

		this.containsKey(key) && length--;
		delete elements[key];
	};

	/**
	 * 从此映射中移除所有映射关系
	 * 
	 * @returns
	 */
	this.clear = function() {

		elements = {};
	};
};
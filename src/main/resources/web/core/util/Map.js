/**
 * @name	Map
 * @package	core.util
 * @desc	映射
 * @type	类
 * 
 * @constructor	core.util.Map()
 * 
 * @method	number 			size() 							返回映射个数.
 * 			boolean			isEmpty()						映射是否包含键-值映射关系,未包含则返回 true.
 * 			boolean			containsKey(object key)			映射是否包含指定键的映射关系,包含则返回 true.
 * 			boolean			containsValue(object value)		映射是否包含指定值的映射关系,包含则返回 true.
 * 			object			get(object key)					返回指定键所映射的值;如果映射中不包含该键的映射关系,则返回 undefined.
 * 			core.util.Map	put(object key, object value)	将指定键-值映射保存;若存在键,则更新对应映射的值.
 * 			core.util.Map	remove(object key)				若存在指定键的映射关系,则将其删除.
 * 			core.util.Map	clear()							清除映射中所有映射关系.
 * 
 * @date	2016年8月20日 09:29:54
 */

core.util.Map = function() {

	/**
	 * 元素
	 */
	var elements = {};
	/**
	 * 元素个数
	 */
	var length = 0;

	/**
	 * 返回映射个数.
	 * 
	 * @returns {number}
	 */
	this.size = function() {

		return length;
	};

	/**
	 * 映射是否包含键-值映射关系,未包含则返回 true.
	 * 
	 * @returns {boolean}
	 */
	this.isEmpty = function() {

		return (length === 0);
	};

	/**
	 * 映射是否包含指定键的映射关系,包含则返回 true.
	 * 
	 * @param key{object}
	 *            键
	 * @returns {boolean}
	 */
	this.containsKey = function(key) {

		return (elements[key] !== undefined);
	};

	/**
	 * 映射是否包含指定值的映射关系,包含则返回 true.
	 * 
	 * @param value{object}
	 *            值
	 * @returns {boolean}
	 */
	this.containsValue = function(value) {

		for ( var key in elements) {

			if (elements[key] === value) {

				return true;
			}
		}

		return false;
	};

	/**
	 * 返回指定键所映射的值;如果映射中不包含该键的映射关系,则返回 undefined.
	 * 
	 * @param key{object}
	 *            键
	 * @returns {object}
	 */
	this.get = function(key) {

		return elements[key];
	};

	/**
	 * 将指定键-值映射保存;若存在键,则更新对应映射的值.
	 * 
	 * @param key{object}
	 *            键
	 * @param value{object}
	 *            值
	 * @returns {core.util.Map}
	 */
	this.put = function(key, value) {

		!this.containsKey(key) && length++;
		elements[key] = value;

		return this;
	};

	/**
	 * 若存在指定键的映射关系,则将其删除.
	 * 
	 * @param key{object}
	 *            键
	 * @returns {core.util.Map}
	 */
	this.remove = function(key) {

		this.containsKey(key) && length--;
		delete elements[key];

		return this;
	};

	/**
	 * 清除映射中所有映射关系.
	 * 
	 * @returns {core.util.Map}
	 */
	this.clear = function() {

		length = 0;
		elements = {};

		return this;
	};
};
/**
 * Map
 * 
 * 集合
 * 
 * 类
 */

core.util.Map = function() {

	// 条目
	var elements = {};
	// 条目数
	var length = 0;

	/**
	 * 返回此映射中的键-值映射关系数。
	 */
	this.size = function() {
		return length;
	};

	/**
	 * 如果此映射未包含键-值映射关系，则返回 true。
	 */
	this.isEmpty = function() {
		return (length == 0);
	};

	/**
	 * 如果此映射包含指定键的映射关系，则返回 true。
	 */
	this.containsKey = function(_key) {
		return (elements[_key] != undefined);
	};

	/**
	 * 如果此映射将一个或多个键映射到指定值，则返回 true。
	 */
	this.containsValue = function(_value) {
		for (key in elements) {
			if (elements[key] == _value) {
				return true;
			}
		}

		return false;
	};

	/**
	 * 返回指定键所映射的值；如果此映射不包含该键的映射关系，则返回 null。
	 */
	this.get = function(_key) {
		return elements[_key];
	};

	/**
	 * 将指定的值与此映射中的指定键关联（可选操作）。
	 */
	this.put = function(_key, _value) {
		if (!this.containsKey(_key)) {
			length++;
		}

		elements[_key] = _value;
	};

	/**
	 * 如果存在一个键的映射关系，则将其从此映射中移除（可选操作）。
	 */
	this.remove = function(_key) {
		delete elements[_key];
	};

	/**
	 * 从此映射中移除所有映射关系
	 */
	this.clear = function() {
		elements = {};
	};
};
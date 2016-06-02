/**
 * Singleton
 * 
 * 单例,懒加载,仅在首次调用时创建一次
 * 
 * 对象
 */

core.example.Singleton = (function() {

	// 单例对象
	var singleton;

	// 单例对象的构造函数
	var Constructor = function(_name) {

		this.name = _name;
	};

	/**
	 * 打印名称
	 */
	Constructor.prototype.printName = function() {

		alert(this.name);
	};

	return {

		// 获取单例对象
		getInstance : function(name) {

			// 判断单例对象是否存在
			if (!singleton) {

				// 不存在则创建对象
				singleton = new Constructor(name);
			}

			// 返回单例对象
			return singleton;
		}
	};
})();
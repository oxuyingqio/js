/**
 * Singleton
 * 
 * 单例,懒加载,仅在首次调用时创建一次
 */

core.example.Singleton = (function() {
	// 单例对象
	var singleton;
	// 个数
	var count = 0;

	// 单例对象的构造
	function constructor(name) {
		count++;

		this.printName = function() {
			alert(name);
		}

		this.printCount = function() {
			alert(count);
		}
	}

	return {
		// 获取单例
		getInstance : function(name) {
			// 判断单例是否存在
			if (!singleton) {
				// 不存在则赋值
				singleton = new constructor(name);
			}

			// 返回单例
			return singleton;
		}
	}
})();
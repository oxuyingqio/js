// JS 实现静态属性

/**
 * 在JS加载后,(function(){})();会自动执行
 * 
 * 然后return的function(){}交给StaticAttr对象
 * 
 * StaticAttrObjCount与getStaticAttrObjCount仅会在页面初始化时,执行一次
 * 
 * 而不会每次new StaticAttr()对象时,都重新生成一个,并且实现了闭包
 */
var StaticAttr = (function() {
	// 静态属性,new StaticAttr()对象的个数
	var StaticAttrObjCount = 0;

	// 静态方法,获取new StaticAttr()对象的个数
	function getStaticAttrObjCount() {
		return StaticAttrObjCount;
	}

	// 返回的对象
	var constructor = function() {
		// StaticAttr对象个数+1;
		StaticAttrObjCount++;

		this.printTest = function() {
			alert(0);
		}
	}

	// 返回对象的静态方法.调用静态方法getStaticAttrObjCount
	constructor.getObjCount = function() {
		return getStaticAttrObjCount();
	}

	return constructor;
})();
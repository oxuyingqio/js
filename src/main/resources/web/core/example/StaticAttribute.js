/**
 * Static Attribute
 * 
 * 静态属性
 */

/**
 * 在JS加载后,(function(){})();会自动执行
 * 
 * 然后return的constructor函数交给core.example.StaticAttribute对象
 * 
 * StaticAttrObjCount与getStaticAttrObjCount仅会在页面初始化时,执行一次
 * 
 * 而不会每次new core.example.StaticAttribute()对象时,都重新生成一个,并且实现了闭包
 */
core.example.StaticAttribute = (function() {
	// 静态属性,new StaticAttribute()对象的个数
	var StaticAttributeObjCount = 0;

	// 静态方法,获取new StaticAttribute()对象的个数
	function getStaticAttributeObjCount() {
		return StaticAttributeObjCount;
	}

	// 返回的对象
	var constructor = function() {
		// StaticAttributeObjCount对象个数+1;
		StaticAttributeObjCount++;
	}

	// 返回对象的静态方法.调用静态方法getStaticAttributeObjCount
	constructor.getObjCount = function() {
		return getStaticAttributeObjCount();
	}

	return constructor;
})();
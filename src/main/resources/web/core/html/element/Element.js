/**
 * @name	Element
 * @package	core.html.element
 * @desc	HTML元素
 * @type	接口
 * 
 * @method	String/core.html.element.Element	id()										获取/设置ID
 * 			String/core.html.element.Element	clazz()										获取/设置class
 * 			String/core.html.element.Element	style()										获取/设置样式
 * 			Object								getAttribute(Object key)					获取属性
 * 			core.html.element.Element			setAttribute(Object key, Object value)		设置属性
 * 			core.html.element.Element			removeAttribute(Object key)					移除属性
 * 			core.html.element.Element			clearAttributes()							清空属性
 * 			function/core.html.element.Element	load()										获取/设置加载事件
 * 			function/core.html.element.Element	click()										获取/设置点击事件
 * 			core.html.element.Element			show()										显示元素
 * 			core.html.element.Element			hide()										隐藏元素
 * 			core.html.element.Element			clear()										清空元素内容
 * 			void								destroy()									销毁元素
 * 			core.html.element.Element			append(Object child)						添加子元素
 * 			core.html.element.Element			appendTo(String target)						添加至
 * 			
 * 
 * @date	2016年8月20日 11:31:48
 */

core.html.element.Element = new core.lang.Interface("core.html.element.Element", [ "id", "clazz", "style", "show",
		"hide", "destroy", "append", "appendTo", "getAttribute", "setAttribute" ]);
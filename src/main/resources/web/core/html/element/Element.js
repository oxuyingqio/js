/**
 * @name	Element
 * @package	core.html.element
 * @desc	HTML元素
 * @type	接口
 * 
 * @method	String						getId()										获取ID
 * 			core.html.element.Element	show()										显示元素
 * 			core.html.element.Element	hide()										隐藏元素
 * 			core.html.element.Element	append(core.html.element.Element element)	添加子元素
 * 			core.html.element.Element	appendTo(String target)						添加至
 * 			Object						getAttribute(String key)					获取属性
 * 			core.html.element.Element	setAttribute(String key, Object value)		设置属性
 * 
 * @date	2016年8月20日 11:31:48
 */

core.html.element.Element = new core.lang.Interface("core.html.element.Element", [ "getId", "show", "hide", "destroy",
		"append", "appendTo", "getAttribute", "setAttribute" ]);
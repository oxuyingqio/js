/**
 * @name	Element
 * @package	core.html.element
 * @desc	HTML元素
 * @type	接口
 * 
 * @method	String						getId()					获取ID
 * 			core.html.element.Element	show()					显示元素
 * 			core.html.element.Element	hide()					隐藏元素
 * 			core.html.element.Element	appendTo(String target)	添加至
 * 
 * @date	2016年8月20日 11:31:48
 */

core.html.element.Element = new core.lang.Interface("core.html.element.Element",
		[ "getId", "show", "hide", "appendTo" ]);
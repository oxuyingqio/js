/**
 * @name	Element
 * @package	core.html.element
 * @desc	HTML元素
 * @type	接口
 * 
 * @method	string/core.html.element.Element	id(string id)								获取/设置ID
 * 			string/core.html.element.Element	title(string title)							获取/设置额外信息
 * 			string/core.html.element.Element	clazz(string clazz)							获取/设置样式类名
 * 			string/core.html.element.Element	style(string style)							获取/设置样式
 * 			function/core.html.element.Element	onInit(function onInit)
 * 			object								getAttribute(object key)					获取属性
 * 			core.html.element.Element			setAttribute(object key, object value)		设置属性
 * 			core.html.element.Element			removeAttribute(object key)					移除属性
 * 			core.html.element.Element			clearAttributes()							清空属性
 * 			string								convertHtml()								转为HTML
 * 			object								$jQuery()									获取jQuery对象
 * 			core.html.element.Element			append(object child)						添加子元素
 * 			core.html.element.Element			appendTo(string target)						添加至
 * 			
 * @date	2018年5月10日 10:43:50
 */
core.html.element.Element = new core.lang.Interface("core.html.element.Element", [ "id", "title", "clazz", "style",
		"onInit", "getAttribute", "setAttribute", "removeAttribute", "clearAttributes", "convertHtml", "$jQuery",
		"append", "appendTo" ]);

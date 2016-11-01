/**
 * @name	ElementProcess
 * @package	core.html.element
 * @desc	HTML元素处理
 * @type	接口
 * 
 * @method	Boolean	exist()			元素是否存在
 * 			String	convertHtml()	转为HTML
 * 
 * @date	2016年8月20日 11:43:53
 */

core.html.element.ElementProcess = new core.lang.Interface("core.html.element.ElementProcess",
		[ "exist", "convertHtml" ]);
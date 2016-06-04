/**
 * Element
 * 
 * 元素
 * 
 * 接口
 */

/**
 * @method appendTo 添加元素到
 * @method show 展示元素
 * @method hide 隐藏元素
 * @method destroy 销毁元素
 * @method add 添加子元素
 * @method remove 移除子元素
 * @method find 检索子元素集合,包含子元素的子元素
 */
core.html.element.Element = new core.lang.Interface("core.html.element.Element", [ "appendTo", "show", "hide",
		"destroy", "add", "remove", "find" ]);
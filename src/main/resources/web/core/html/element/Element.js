/**
 * Element
 * 
 * 元素
 * 
 * 接口
 */

/**
 * @method getId 获取元素ID
 * @method getjQuery 获取元素jQuery对象
 * @method show 展示元素
 * @method hide 隐藏元素
 * @method destroy 销毁元素
 * @method appendTo 添加元素到
 * @method add 添加子元素
 * @method remove 移除子元素
 * @method getChildren 获取子元素集合
 * @method find 检索子元素集合,包含子元素的子元素
 */
core.html.element.Element = new core.lang.Interface("core.html.element.Element", [ "getId", "getjQuery", "show",
		"hide", "destroy", "appendTo", "add", "remove", "getChildren", "find" ]);
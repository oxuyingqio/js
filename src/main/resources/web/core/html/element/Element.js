/**
 * Element
 * 
 * 元素
 * 
 * 接口
 */

/**
 * @method getId 获取元素ID
 * @method convertHtml 转换为HTML
 * @method dealHtml 处理HTML
 * @method destroy 销毁本元素
 * @method add 添加子元素
 * @method remove 移除子元素
 * @method find 通过条件检索子元素集合
 * @method getChildren 获取子元素集合-----------------是否需要
 */
core.component.form.model.Element = new core.lang.Interface("core.component.form.model.Element", [ "getId",
		"convertHtml", "dealHtml", "destroy", "add", "remove", "find", "getChildren" ]);
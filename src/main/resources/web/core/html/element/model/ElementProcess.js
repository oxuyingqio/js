/**
 * ElementProcess
 * 
 * 元素处理
 * 
 * 接口
 */

/**
 * @method getId 获取元素ID
 * @method exist 元素是否存在
 * @method convertHtml 转为HTML
 * @method dealHtml 处理HTML
 */
core.html.element.model.ElementProcess = new core.lang.Interface("core.html.element.model.ElementProcess", [ "getId",
		"convertHtml", "dealHtml" ]);
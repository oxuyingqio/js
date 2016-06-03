/**
 * ButtonCreator
 * 
 * 按钮创建者
 * 
 * 对象
 */

core.html.element.controller.ButtonCreator = {

	/**
	 * 获取按钮
	 * 
	 * @param type
	 *            类型
	 * @return {core.html.element.model.Button}
	 */
	getButton : function(type) {

		// 按钮
		var button;

		switch (type) {
		// 基础Button按钮
		case core.html.element.model.ButtonType.button:
			button = core.html.element.viewer.button.Button.getButton();
			break;
		// EasyUI Linkbutton按钮
		case core.html.element.model.ButtonType.easyui.linkbutton:
			button = core.html.element.viewer.button.easyui.Linkbutton.getButton();
			break;
		default:
			return undefined;
		}

		// 判断是否实现接口方法
		core.lang.Interface.ensureImplements(button, core.html.element.model.Button);
		// 返回实例
		return button;
	}
};
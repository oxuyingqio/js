/**
 * InputCreator
 * 
 * 输入框创建者
 * 
 * 对象
 */

core.html.element.controller.InputCreator = {

	/**
	 * 获取输入框
	 * 
	 * @param type
	 *            类型
	 * @return {core.html.element.model.Input}
	 */
	getInput : function(type) {

		// 输入框
		var input;

		switch (type) {
		case core.html.element.model.InputType.text:
			// 基础Text输入框
			input = core.html.element.viewer.input.Text.getInput();
			break;
		case core.html.element.model.InputType.easyui.combobox:
			// EasyUI Combobox输入框
			input = core.html.element.viewer.input.easyui.Combobox.getInput();
			break;
		case core.html.element.model.InputType.easyui.datebox:
			// EasyUI Datebox输入框
			input = core.html.element.viewer.input.easyui.Datebox.getInput();
			break;
		case core.html.element.model.InputType.easyui.datetimebox:
			// EasyUI Datetimebox输入框
			input = core.html.element.viewer.input.easyui.Datetimebox.getInput();
			break;
		case core.html.element.model.InputType.easyui.filebox:
			// EasyUI Filebox输入框
			input = core.html.element.viewer.input.easyui.Filebox.getInput();
			break;
		case core.html.element.model.InputType.easyui.numberbox:
			// EasyUI Numberbox输入框
			input = core.html.element.viewer.input.easyui.Numberbox.getInput();
			break;
		case core.html.element.model.InputType.easyui.numberspinner:
			// EasyUI Numberspinner输入框
			input = core.html.element.viewer.input.easyui.Numberspinner.getInput();
			break;
		case core.html.element.model.InputType.easyui.searchbox:
			// EasyUI Searchbox输入框
			input = core.html.element.viewer.input.easyui.Searchbox.getInput();
			break;
		case core.html.element.model.InputType.easyui.slider:
			// EasyUI Slider输入框
			input = core.html.element.viewer.input.easyui.Slider.getInput();
			break;
		case core.html.element.model.InputType.easyui.textbox:
			// EasyUI Textbox输入框
			input = core.html.element.viewer.input.easyui.Textbox.getInput();
			break;
		case core.html.element.model.InputType.easyui.timespinner:
			// EasyUI Timespinner输入框
			input = core.html.element.viewer.input.easyui.Timespinner.getInput();
			break;
		default:
			return undefined;
		}

		// 判断是否实现接口方法
		core.lang.Interface.ensureImplements(input, core.html.element.model.Input);
		// 返回实例
		return input;
	}
};
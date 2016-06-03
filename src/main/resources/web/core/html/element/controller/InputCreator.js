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
		// 基础Text输入框
		case core.html.element.model.InputType.text:
			input = core.html.element.viewer.input.Text.getInput();
			break;
		// EasyUI Combobox输入框
		case core.html.element.model.InputType.easyui.combobox:
			input = core.html.element.viewer.input.easyui.Combobox.getInput();
			break;
		// EasyUI Datebox输入框
		case core.html.element.model.InputType.easyui.datebox:
			input = core.html.element.viewer.input.easyui.Datebox.getInput();
			break;
		// EasyUI Datetimebox输入框
		case core.html.element.model.InputType.easyui.datetimebox:
			input = core.html.element.viewer.input.easyui.Datetimebox.getInput();
			break;
		// EasyUI Filebox输入框
		case core.html.element.model.InputType.easyui.filebox:
			input = core.html.element.viewer.input.easyui.Filebox.getInput();
			break;
		// EasyUI Numberbox输入框
		case core.html.element.model.InputType.easyui.numberbox:
			input = core.html.element.viewer.input.easyui.Numberbox.getInput();
			break;
		// EasyUI Numberspinner输入框
		case core.html.element.model.InputType.easyui.numberspinner:
			input = core.html.element.viewer.input.easyui.Numberspinner.getInput();
			break;
		// EasyUI Searchbox输入框
		case core.html.element.model.InputType.easyui.searchbox:
			input = core.html.element.viewer.input.easyui.Searchbox.getInput();
			break;
		// EasyUI Slider输入框
		case core.html.element.model.InputType.easyui.slider:
			input = core.html.element.viewer.input.easyui.Slider.getInput();
			break;
		// EasyUI Textbox输入框
		case core.html.element.model.InputType.easyui.textbox:
			input = core.html.element.viewer.input.easyui.Textbox.getInput();
			break;
		// EasyUI Timespinner输入框
		case core.html.element.model.InputType.easyui.timespinner:
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
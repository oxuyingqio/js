/**
 * OutputorCreator
 * 
 * 输出创建者
 * 
 * 对象
 */

core.log.output.OutputorCreator = {

	// 获取输出者
	getOutputor : function(mode) {
		var outputor;

		switch (mode) {
		case core.log.output.Mode.console:
			// 获取控制台输出者实例
			outputor = new core.log.output.Console.getOutputor();
			break;
		case core.log.output.Mode.popup:
			// 获取弹出框输出者实例
			outputor = new core.log.output.Popup.getOutputor();
			break;
		}

		// 判断是否实现接口方法
		core.lang.Interface.ensureImplements(outputor, core.log.output.Outputor);
		// 返回实例
		return outputor;
	}
};
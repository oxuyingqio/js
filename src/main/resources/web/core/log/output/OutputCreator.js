/**
 * Output
 * 
 * 输出创建者
 * 
 * 对象
 */

core.log.output.OutputCreator = {

	// 获取输出者
	getOutputor : function(mode) {
		switch (mode) {
		case core.log.output.Mode.console:
			// 获取控制台输出者实例
			var outputor = new core.log.output.Console.getOutputor();
			// 判断是否实现接口方法
			core.lang.Interface.ensureImplements(outputor, core.log.output.Outputor);
			// 返回实例
			return outputor;
		case core.log.output.Mode.popup:
			// 获取弹出框输出者实例
			var outputor = new core.log.output.Popup.getOutputor();
			// 判断是否实现接口方法
			core.lang.Interface.ensureImplements(outputor, core.log.output.Outputor);
			// 返回实例
			return outputor;
		}
	}
};
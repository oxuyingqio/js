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
			var console = new core.log.output.Console.getInstance();
			// 判断是否实现接口方法
			core.lang.Interface.ensureImplements(console, core.log.output.Output);
			// 返回实例
			return console;
		case core.log.output.Mode.popup:
			// 获取弹出框输出者实例
			var popup = new core.log.output.Popup.getInstance();
			// 判断是否实现接口方法
			core.lang.Interface.ensureImplements(popup, core.log.output.Output);
			// 返回实例
			return popup;
		}
	}
};
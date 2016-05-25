/**
 * Output
 * 
 * 输出创建者
 * 
 * 对象
 */

core.log.output.OutputCreator = {
	getOutputor : function(mode) {
		switch (mode) {
		case core.log.output.Mode.console:
			var console = new core.log.output.Console.getInstance();
			core.lang.Interface.ensureImplements(console, core.log.output.Output);
			return console;
		case core.log.output.Mode.popup:
			var popup = new core.log.output.Popup.getInstance();
			core.lang.Interface.ensureImplements(popup, core.log.output.Output);
			return popup;
		}
	}
};
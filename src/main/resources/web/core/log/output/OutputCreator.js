/**
 * Output
 * 
 * 输出创建者
 * 
 * 类
 */

core.log.output.OutputCreator = function() {
}

core.log.output.OutputCreator.prototype.getOutputor = function(mode) {
	switch (mode) {
	case core.log.output.Mode.console:
		var console = new core.log.output.Console();
		core.lang.Interface.ensureImplements(console, core.log.output.Output);
		return console;
	case core.log.output.Mode.popup:
		var popup = new core.log.output.Popup();
		core.lang.Interface.ensureImplements(popup, core.log.output.Output);
		return popup;
	}
}
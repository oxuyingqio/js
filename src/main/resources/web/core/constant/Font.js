/**
 * Font
 * 
 * 常用字
 * 
 * 枚举
 */

core.constant.Font = (function() {

	// 常用字
	var font;

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 获取浏览器语言设置
		var language = navigator.language;
		if (!language)
			language = navigator.browserLanguage;

		if (language.toLowerCase().indexOf("zh") >= 0) {
			return {
				add : "新增",
				edit : "修改",
				del : "删除",
				view : "查看",
				affirm : "确认",
				cancel : "取消",
				save : "保存",
				back : "返回",
				clear : "清除",
				print : "打印",
				exporter : "导出",
				upload : "上传",
				download : "下载"
			}
		} else if (language.toLowerCase().indexOf("en") >= 0) {
			return {
				add : "Add",
				edit : "Edit",
				del : "Del",
				view : "Query",
				affirm : "Confirm",
				cancel : "Cancel",
				save : "Save",
				back : "Back",
				clear : "Remove",
				print : "Print",
				exporter : "Export",
				upload : "Upload",
				download : "Download"
			}
		}
	}

	return {
		getFont : function() {
			// 懒加载,调用时才创建,同时仅创建一个
			if (!font) {
				font = new Constructor();
			}

			// 返回日志管理者
			return font;
		}
	}
})();
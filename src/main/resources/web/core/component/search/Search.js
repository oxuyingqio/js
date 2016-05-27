/**
 * Search
 * 
 * 搜索组件
 * 
 * 类
 */

core.component.search = (function() {

	// 已创建的搜索组件实例集合
	var searchs = [];

	/**
	 * 搜索组件基础框架初始化
	 * 
	 * @param $search
	 *            搜索组件的jQuery对象
	 */
	function frameworkInit($search) {
		// 清空传入DIV内容
		$search.empty();
		$search.addClass("coreComponentSearch");

		// 创建Search组件的基础框架
		var framework = [];
		framework.push("<table border=2><tr></tr></table>");
		$search.append(framework.join(""));
	}

	/**
	 * 搜索条件配置初始化
	 * 
	 * @param $search
	 *            搜索组件的jQuery对象
	 * @param configs
	 *            搜索条件
	 */
	function configInit($search, configs) {
		// 遍历搜索条件
		for (var i = 1, length = configs.length; i <= length; i++) {
			// 获取对应条件的配置
			var config = configs[i - 1];

			// 获取配置的字段
			var field = config.field;
			if (field == undefined) {
				throw "core.component.search:构造参数异常.config.field为必填属性";
			}

			// 获取配置的类型
			var type = config.type;
			if (type == undefined) {
				throw "core.component.search:构造参数异常.config.type为必填属性";
			}

			// 获取对应view层处理对象
			var view = SearchComponentView[type];
			if (view == undefined) {
				throw "core.component.search:构造参数异常.config.type为必填属性";
			}

			// 调用对应类型的生成HTML方法,插入到最后一行中
			$searchTable.find("tr:last").append(view.createHtml(config));
			// 调用对应类型的处理HTML方法,对页面元素处理
			view.processHtml($searchTable, config);

			// 当条件足够一行的个数时,添加<tr>进行换行
			if (i % _this.rowNumber == 0) {
				$searchTable.append("<tr></tr>");
			}
		}
	}

	/**
	 * 构造函数
	 * 
	 * @param divid
	 *            搜索组件所在的Div ID
	 * @param config
	 *            搜索条件配置
	 */
	var Constructor = function(_divid, _cofigs) {

		// 保存创建的新实例
		searchs.push(this);

		// 搜索组件所在的Div ID
		var divid = _divid;
		// 搜索组件的搜索条件配置
		var configs = _cofigs;

		// 搜索组件的jQuery对象
		var $search = $("#" + _divid);

		this.getDivid = function() {
			return divid;
		}

		this.getConfigs = function() {
			return configs;
		}

		this.setConfigs = function(_configs) {
			configs = _configs;
		}

		this.getSearchjQuery = function() {
			return $search;
		}
	}

	/**
	 * 搜索组件初始化
	 */
	Constructor.prototype.init = function() {
		frameworkInit(this.getSearchjQuery());
		configInit(this.getSearchjQuery(), this.getConfigs());
	}

	return {
		// 获取一个新的搜索组件实例
		newInstance : function(divid, configs) {
			return new Constructor(divid, configs);
		},
		// 获取一个搜索组件实例
		getInstance : function(divid, configs) {
			// 查找搜索组件实例是否已创建,若已创建,则使用已创建的对象,并设置对应的config属性
			for (var i = 0, length = searchs.length; i < length; i++) {
				var search = searchs[i];
				if (search.getDivid() === divid) {
					search.setConfigs(configs);
					return search;
				}
			}

			// 若未找到则创建新对象
			return new Constructor(divid, configs);
		}
	};
})();
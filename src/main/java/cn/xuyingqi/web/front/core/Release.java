package cn.xuyingqi.web.front.core;

import java.io.File;

import org.apache.log4j.Logger;

import cn.xuyingqi.util.tool.operatefile.impl.CopyFileContent2SpecifiedFile;
import cn.xuyingqi.util.tool.operatefile.impl.HandleSpecifyFormatFile;
import cn.xuyingqi.util.util.FileUtils;

/**
 * 合并前台核心JS
 * 
 * @author XuYQ
 *
 */
public class Release {

	private static Logger logger = Logger.getLogger(Release.class);

	public static void main(String[] args) {
		// 项目路径
		String projectPath = System.getProperty("user.dir");
		// 前台核心公共路径
		String jsCommonPath = "/src/main/resources/web/core/";
		// 前台核心包路径集合
		String[] packagePaths = { "js", "package.js", "lang", "constant", "util", "event", "log" };

		// 文件类型
		String fileType = ".js";
		// 生成文件路径
		File coreFile = new File("D:/Users/XuYQ/Desktop/core.js");

		for (int i = 0; i < packagePaths.length; i++) {
			FileUtils.recursionFile(new File(projectPath + jsCommonPath + packagePaths[i]),
					new HandleSpecifyFormatFile(fileType, new CopyFileContent2SpecifiedFile(coreFile)));
		}

		logger.debug("操作结束");
	}
}

package cn.xuyingqi.js;

import java.io.File;

import cn.xuyingqi.utils.FileUtils;
import cn.xuyingqi.utils.tool.operate.file.impl.CopyFileContent2SpecifiedFile;
import cn.xuyingqi.utils.tool.operate.file.impl.HandleSpecifyFormatFile;

/**
 * 发布程序
 * 
 * @author XuYQ
 *
 */
public final class Release {

	/**
	 * 项目路径
	 */
	private static final String PROJECT_PATH = System.getProperty("user.dir");
	/**
	 * 公共路径
	 */
	private static final String COMMON_PATH = "/src/main/resources/static/core/";

	/**
	 * 生成JS发布文件
	 * 
	 * @param packagePaths    包路径集合
	 * @param releaseFilePath 发布文件路径
	 */
	public static void releaseJs(String[] packagePaths, String releaseFilePath) {

		// 操作的文件类型
		String fileType = ".js";

		// 发布文件
		File releaseFile = new File(releaseFilePath);
		// 若发布文件存在,则先删除
		if (releaseFile.exists()) {

			// 删除文件
			releaseFile.delete();
		}

		// 遍历包路径集合
		for (int i = 0; i < packagePaths.length; i++) {

			// 打印信息
			System.out.println("进度：" + (i + 1) + "/" + packagePaths.length);

			// 递归处理文件
			FileUtils.recursionFile(new File(PROJECT_PATH + COMMON_PATH + packagePaths[i]),
					new HandleSpecifyFormatFile(fileType, new CopyFileContent2SpecifiedFile(releaseFile)));
		}

		// 打印信息
		System.out.println("操作结束");
	}

	/**
	 * Main函数测试
	 * 
	 * @param args
	 */
	public static void main(String[] args) {

		// core.js
		Release.releaseJs(new String[] { "js", "package.js", "lang", "constant", "utils", "html", "plugins" }, "D:/Users/XuYQ/Desktop/core.js");
	}
}
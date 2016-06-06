function changePackage(selectPackage) {
	var url = selectPackage.replaceAll("\\.", "/");

	$("#class").attr("src", "/~/core/API/" + url + "/class.html");
	$("#desc").attr("src", "/~/core/API/" + url + "/desc.html");
}
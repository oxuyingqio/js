// 
Object.prototype.clone = function() {
	function Clone() {
	}
	Clone.prototype = this;
	return new Clone;
}
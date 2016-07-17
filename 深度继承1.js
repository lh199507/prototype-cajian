function SuperClass(){
	this.name="liuheng";
}
SuperClass.prototype.getName=function(){
	alert(this.name);
}
SuperClass.extends=function(config){
	var self=this;
	var child=function(){
		self.apply(this ,arguments);
		for(var i in config){
			this[i] = config[i];
		}
	}
		child.prototype=Object.create(self.prototype);
		child.extends=arguments.callee;
		return child;
};

var a = SuperClass.extends({});//此时返回child
		var obj=new a;
		obj.getName();
var b = a.extends({
	name:"aaa"
});
		var obj1=new b;
		obj1.getName();
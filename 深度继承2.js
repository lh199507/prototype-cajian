function SuperClass(){
	this.name="liuheng";
}
SuperClass.prototype.getName=function(){
	alert(this.name)
}
SuperClass.extends=function(config){
	var self=this;
	var child =function(){
		self.call(this ,arguments);
	}
	child.prototype = Object.create(self.prototype);
	for(var i in config){
		child.prototype[i]=config[i];
	}
	child.extends=arguments.callee;
	return child;
}
var ChildClass=SuperClass.extends({});
var obj =new ChildClass;
obj.getName();

//var SubClass=function(){
//	this.name="liugetheng";
//}
//SubClass.prototype.getName=function(){
//	alert(this.name);
//}
//SubClass.extends=function(config){
//	var self=this;
//	var child = function(){
//		self.call(this ,arguments);
//	}
//	child.prototype =Object.create(self.prototype);
//	for(var i in config){
//		child.prototype[i]=config[i];
//	}
//	child.extends =arguments.callee;
//	return child;
//}

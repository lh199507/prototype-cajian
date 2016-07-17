
function BaseClass(){
	this.name="liuheng"
}
BaseClass.prototype.init=function(){
	alert(this.name);
}
BaseClass.extends=function(config){
	var self=this;
	var temp =function(){
		self.apply(this ,arguments);
	}
	temp.prototype=Object.create(self.prototype);
	
	var child=function(){};
	
	child.prototype=new temp();
	child.extends=arguments.callee;
	
	for(var i in config){
		child.prototype[i] = config[i];
	}
	child.prototype.constructor=child;
	return child;
}

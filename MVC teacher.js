var BaseClass = function(){

}
BaseClass.prototype.init = function(){

}

BaseClass.extends = function(config){
	var self = this;

	var temp = function(){
		self.apply(this,arguments);
	}

	temp.prototype  =  Object.create(self.prototype);

	var Child = function(){}
	///
	Child.prototype = new temp();
	Child.extends = arguments.callee;
	for(var k in config){
		Child.prototype[k] = config[k];
	}
	Child.prototype.constructor = Child;
	return Child;
}


var Model = BaseClass.extends({
	getData : function(){
		return {
			name : "fy"
		}
	},
	saveData : function(){

	}
});

var View = BaseClass.extends({
	template : "<h1>as【        {name}       】df</h1>",
	renderTo : "body",
	render : function(data){
		var compiledHtml = this.template.replace(/{(\w+)}/g,function(A,B){
			return data[arguments[1]];
		});

		document.querySelector(this.renderTo).innerHTML = compiledHtml;

	}
})

var Controller = BaseClass.extends({
	Model : Model,
	View  : View ,
	init : function(){
		var model = new Model();
		var view  = new View();
		view.render(model.getData());
	}
})


// var Router  = BaseClass.extends({
	
// })
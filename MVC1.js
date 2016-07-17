var BaseClass=function(){
	
}
BaseClass.prototype.init=function(){
	
}
BaseClass.extends=function(config){
	var self=this;
	var temp =function(){
		self.call(this,arguments);
	}
	temp.prototype=Object.create(self.prototype);
	var child=function(){};
	child.prototype=new temp;
	for(var i in config){
		child.prototype[i]=config[i]
	}
	child.extends = arguments.callee;
	child.prototype.constructor=child;
	return child;
}

var Model=BaseClass.extends({
	getData:function(){
		return {
			name:"liuheng"
		}
	},
	setData:function(){	
	}
})

var View=BaseClass.extends({
	temp:"<input name='name' value={name}>",
	renderTo:"body",
	render:function(data){
		var html=this.temp.replace(/{(\w+)}/g ,function(){
			return data[arguments[1]];
		})
		document.querySelector(this.renderTo).innerHTML=html;
	}
})

var Controller=BaseClass.extends({
	Model: Model,
	View: View,
	init:function(){
		var model=new Model();
		var view=new View();
		view.render(model.getData());
	}
})

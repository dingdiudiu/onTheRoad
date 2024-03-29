var EventUtil = {
			addHandler:function(element,type,handler){
				if (element.addEventListener) {
					element.addEventListener(type,handler,false);
				}else if(element.attachEvent){
					element.attachEvent("on"+type,handler);
				}else{
					element["on"+type] = handler;
				}
			},
			getTarget:function(event){
				return event.target?event.target:event.srcElement;
			},
			removeHandler:function(element,type,handler){
				if (element.removeEventListener) {
					element.removeEventListener(type,handler,false);
				}else if(element.detachEvent){
					event.detachEvent("on"+type,handler);
				}else{
					element["on"+type] = null;
				}
			},
		};

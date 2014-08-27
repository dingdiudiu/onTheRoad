(function(){
	var nowNum = 1;
	var willNum;
	var floor = 0;
	var building = document.getElementsByTagName("tbody")[0];
	var now = document.getElementsByTagName("td")[6];
	var close = document.getElementById("close");
	var open = document.getElementById("open");
	var showText = document.getElementById("showText");
	var ready = {
		init:function(){
			this.bindEvent();
		},
		bindEvent:function(){
			var self =this;
			EventUtil.addHandler(close,"click",self.choose);

			EventUtil.addHandler(open,"click",self.cout);
		},
		choose:function(){
				showText.textContent=("您可以选择楼层了");
				EventUtil.addHandler(building,"click",ready.move);
		},
		move:function (event){
			event = EventUtil.getTarget(event);
				now.className = "old";
				event.className="now";
				willNum = Number(event.textContent);
				if(willNum<0)
					willNum = 0;
				floor = willNum-nowNum;
				nowNum = willNum;
				now = event;
		},
		cout:function (){
			debugger;
			if(floor>0)
				showText.textContent=("您上了"+floor+"层");
			else if(floor==0){
				showText.textContent=("您未上任何楼层");
			}
			else{
				showText.textContent=("您下了"+(-floor)+"层");
			}
			floor = 0;
			EventUtil.removeHandler(building,"click",this.move);
			EventUtil.removeHandler(close,"click",this.move);
			EventUtil.removeHandler(open,"click",this.move);
	
		}
	}

	ready.init();
})();		
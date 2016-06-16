(function(){
	function Enlarge(id){
		this.target = document.getElementById(id);
		this.width = 402;
		this.height = 536;
		this.url = "../img/big.jpg";
		this.scale = 4;
	}
	Enlarge.prototype = {
		init : function(){
			//主函数
			this.createHTML();
			this.onHover();
		},
		createHTML : function(){
			//生成左侧小图DIV
			this.leftDiv = document.createElement("div");
			this.leftDiv.style.cssText = "width:"+this.width+"px; height:"+this.height+"px; position:relative;";

			//生成缩略图
			this.smallImg = document.createElement("img");
			this.smallImg.src = this.url;
			this.smallImg.style.cssText = "width:"+this.width+"px; height:"+this.height+"px;"

			//生成滤镜
			this.lay = document.createElement("span");
			this.lay.style.cssText = "display:block; width:"+this.width / this.scale +"px; height:"+ this.height / this.scale+"px; border:solid 1px #666; background:#fff;"
							  + "opacity:0.5; filter:alpha(opacity:50); position:absolute; left:0; top:0;display:none;";

			//生成右侧DIV
			this.rightDiv = document.createElement("div");
			this.rightDiv.style.cssText = "width:"+this.width+"px; height:"+this.height+"px; position:absolute;"
								   + "left:"+(this.target.offsetLeft + this.width + 10)+"px; "
								   + "top:"+this.target.offsetTop+"px; overflow:hidden; display:none;";

			//生成全尺寸大图
			this.bigImg = document.createElement("img");
			this.bigImg.src = this.url;
			this.bigImg.style.cssText = "width:"+(this.width * this.scale)+"px; height:"+(this.height * this.scale)+"px;";

			this.leftDiv.appendChild(this.smallImg);
			this.leftDiv.appendChild(this.lay);
			this.rightDiv.appendChild(this.bigImg);
			this.target.appendChild(this.leftDiv);
			this.target.appendChild(this.rightDiv);
		},
		onHover : function(){
			//事件处理
			var that = this;
			this.leftDiv.onmousemove = function(e){
				that.rightDiv.style.display = "block";
				that.lay.style.display = "block";
				e = e || event;
				var lx = e.clientX - this.offsetLeft - that.lay.offsetWidth / 2;
				var ly = e.clientY - this.offsetTop - that.lay.offsetHeight / 2;
				if(lx < 0){
					lx = 0;
				}
				if(lx > this.offsetWidth - that.lay.offsetWidth){
					lx = this.offsetWidth - that.lay.offsetWidth;
				}
				if(ly < 0){
					ly = 0;
				}
				if(ly > this.offsetHeight - that.lay.offsetHeight){
					ly = this.offsetHeight - that.lay.offsetHeight;
				}
				that.lay.style.left = lx + "px";
				that.lay.style.top = ly + "px";
				that.bigImg.style.marginLeft = -1 * lx * that.scale + "px";
				that.bigImg.style.marginTop = -1 * ly * that.scale + "px";
			}
			this.leftDiv.onmouseout = function(){
				that.lay.style.display = "none";
				that.rightDiv.style.display = "none";
			}
		},
		show : function(){
			this.target.style.display = "block";
		},
		hide : function(){
			this.target.style.display = "none";
		}
	}

	window.$ = function(id){
		return new Enlarge(id);
	}
})();
	(function start(){
			function setRem(){
	            document.documentElement.style.fontSize = window.innerWidth / 20 + "px";
	            }
	            window.onresize = function(){
	                setRem();
	            };
			function clickLa(){
				var la = document.querySelector(".la");
				var fix = document.querySelector(".fix");
				console.log(la);
				la.addEventListener("touchend",function(){
					console.log(123);
					fix.style.display="none";
				},0);	
			}
			function clickHead(){
				var clickHead = document.querySelector(".click-head");
				var fiden = document.querySelector(".fiden");
				clickHead.addEventListener("touchend",function(){
					fiden.style.height = fiden.style.height=="7.125rem"?"0":"7.125rem";
				},0);	
			}
			function clickBanner(){
				var titOut = document.querySelector(".tit-out");
				var clickA = titOut.querySelectorAll("a");
				for(var i = 0,len = clickA.length;i < len ;i++ ){
					clickA[i].addEventListener("touchend",function(){
						for(var j = 0;j<len;j++){
							clickA[j].classList.remove("cur");
						}
						this.classList.add("cur");

					});
				}
			} 
			setRem();
			clickLa();
			clickHead();
			clickBanner();
		})();
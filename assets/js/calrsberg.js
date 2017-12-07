	$.fn.moveIt = function(){
	  var $window = $(window);
	  var instances = [];
	  
	  $(this).each(function(){
	    instances.push(new moveItItem($(this)));
	  });
	  
	  window.onscroll = function(){
	    var scrollTop = $window.scrollTop();
	    instances.forEach(function(inst){
	      inst.update(scrollTop);
	    });
	  }
	}
	
	var moveItItem = function(el){
	  this.el = $(el);
	  this.speed = parseInt(this.el.attr('data-scroll-speed'));
	};
	
	moveItItem.prototype.update = function(scrollTop){
	  this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
	};
	
	$(function(){
	  $('[data-scroll-speed]').moveIt();
	});
	
	var ancho = $(window).width();
	console.log(ancho);
	
	$(window).scroll(function (event) {
		var scroll = $(window).scrollTop();
		console.log(scroll);


		if(scroll>=115){
			$('#receta1').removeClass('hide');
		}

		if(scroll>=500){
			$('#receta2').removeClass('hide');
		}

		if(scroll>=800){
			$('#receta3').removeClass('hide');
		}

		if(scroll>=1100){
			$('#receta4').removeClass('hide');
		}

		if(scroll>=300){
			$('#comprar').removeClass('hide');
			setTimeout(function(){
				$('#comprar img.txt').removeClass('hide');
			}, 300);
			setTimeout(function(){
				$('#comprar img.logos').removeClass('hide');
			}, 500);
		}
	
	});
	
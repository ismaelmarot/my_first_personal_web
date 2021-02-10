let animated = document.querySelectorAll('.animated');
let animatedLeft = document.querySelectorAll('.about-me-photo');
let animatedRight = document.querySelectorAll('.about-me-info');
let buttonGoUp = document.getElementById('btn-go-up');

function mostrarScroll(){
	let scrollTop = document.documentElement.scrollTop;	
	if (scrollTop > 200){
		buttonGoUp.style.opacity = 1;
	} else{
		buttonGoUp.style.opacity = 0;
	}

	for(var i=0 ; i<animated.length ; i++){
		let alturaAnimado = animated[i].offsetTop;
		if((alturaAnimado - 300) < scrollTop){
			animated[i].style.opacity = 1;
		} 
	}	
	
	for(var i=0 ; i<animatedLeft.length ; i++){
		let alturaAnimado = animatedLeft[i].offsetTop;
		if((alturaAnimado -300) < scrollTop){
			animatedLeft[i].style.opacity = 1;
			animatedLeft[i].classList.add('animatedLeft');
		}
	}

	for(var i=0 ; i<animatedRight.length ; i++){
		let alturaAnimado = animatedRight[i].offsetTop;
		if((alturaAnimado -300) < scrollTop){
			animatedRight[i].style.opacity = 1;
			animatedRight[i].classList.add('animatedRight');
		}
	}
}

window.addEventListener('scroll',mostrarScroll);
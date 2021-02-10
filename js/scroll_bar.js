let scroll_Pos_1 = window.pageYOffset;

window.onscroll = function(){
	let scroll_Pos_2 = window.pageYOffset;
	let header_bar = document.getElementById('header') 
	if(scroll_Pos_1 >= scroll_Pos_2){
		header_bar.style.top = '0';
	}
	else{
		header_bar.style.top = '-20em';
	}
	scroll_Pos_1 = scroll_Pos_2;
}
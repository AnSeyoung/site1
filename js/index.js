//  nav scroll
function navScroll(){
	$('nav>ul>li>a').on('click',function(e){
		let num = $(this).attr('href');
		let numPos = $(num).offset().top;
		let secH = parseInt($('#headerWrap').innerHeight());
		// 사이즈 기준
		let basicW = $('#wrap').width();
		if(basicW < 980){
			let navW = $('nav').innerWidth();
			$('#btn').show();
			$('nav').css('left','-'+navW+'px')
		};
		$('body,html').animate({scrollTop:numPos-secH},1000);

		return false;
	});
}
function navBtn(){
	$('#btn').on('click',function(e){
		$(this).hide();
		$('nav').animate({left:'0'},400);
	});
	$('nav>.close').on('click',function(e){
		let navW = $('nav').innerWidth();
		$('#btn').show();
		$('nav').css('left','-'+navW+'px');
	});
}
function asideBtn(){
	// css 정리 window height - aside height() - aside height() /2 -> -값
	let windowH = $(window).height();
	console.log(windowH);
	let asideH = $('#submenu').height();
	console.log(asideH);
	let asideMtop = asideH/2;
	console.log(asideMtop);
	$('#submenu').css('margin-top','-'+asideMtop+'px');
	// a -> click 각각의 a의 herf -> top -> animation
	$('#submenu ul>li>a').on('click',function(e){
		let secPos = $(this).attr('href');
		let headerH = $('#headerWrap').innerHeight();
		console.log(secPos,headerH);
		// 위치
		let sec = $(secPos).position().top;
		console.log(sec);
		// animation
		$('html,body').stop().animate({scrollTop:sec-headerH},1200);
		return false;
	});
	// scroll 이벤트
	$('#submenu ul>li:first>a').addClass('on');
	$(window).on('scroll',function(e){
		let dScroll = $(window).scrollTop();
		//console.log(dScroll);
		let dTop1 = $('#box01').position().top;
		let dTop2 = $('#box02').position().top;
		let dTop3 = $('#box03').position().top;
		let dTop4 = $('#box03').position().top;
		let dTop5 = $('#box04').position().top;
		//console.log(dTop1,dTop2,dTop3,dTop4, dTop5);
		if(dScroll >= dTop1 && dScroll < dTop2){
			$('#submenu>ul>li>a').removeClass('on');
			$('#submenu>ul>li:eq(0)>a').addClass('on');
		}
		if(dScroll >= dTop2 && dScroll < dTop3){
			$('#submenu>ul>li>a').removeClass('on');
			$('#submenu>ul>li:eq(1)>a').addClass('on');
		}
		if(dScroll >= dTop3 && dScroll < dTop4){
			$('#submenu>ul>li>a').removeClass('on');
			$('#submenu>ul>li:eq(1)>a').addClass('on');
		}
	});
};
function mainGallery(){
	// 준비하기
	// 기존 사이즈
	let secW = $('#box01 section').outerWidth(true);
	console.log(secW);
	setInterval(function(){
		$('#box01>article').animate({marginLeft:'-='+secW+'px'},5000,function(){
			$('#box01>article>section:first').appendTo('#box01>article');
			$('#box01>article').css('margin-left','0');
		});
	},5000);
};
function gallery(){
	// 준비하기
	// 기존 사이즈
	// let wWidth = $('#wrap').width();
	let figureW = $('#box04>article>div>div>figure').width();
	$('#all>figure:last').prependTo('#all');
			$('#all').css('margin-left','-'+figureW+'px');

	// 이벤트 -> click
	$('#box04 p.right').on('click',function(e){
		
		$('#all').animate({marginLeft:'-='+figureW+'px'},1000,function(){
			// 준비하기
			$('#all>figure:first').appendTo('#all');
			$('#all').css('margin-left','-'+figureW+'px');
		});
	});
	$('#box04 p.left').on('click',function(e){
		// let figureW = $('#box04>article>div>div>figure').width();
		$('#all').animate({marginLeft:'+='+figureW+'px'},1000,function(){
			// 준비하기
			$('#all>figure:last').prependTo('#all');
			$('#box04>article>div>div').css('margin-left','-'+figureW+'px');
		});
	});
};
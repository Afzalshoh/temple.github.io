/*burgermenu*/
$(document).ready(function() {
	var link = $('.menu-link');
	var link_active = $('.menu-link_active');
	var menu = $('.menu');
	var nav_link = $('.menu a');

	link.click(function() {
		link.toggleClass('menu-link_active');
		menu.toggleClass('menu_active');
	});
	nav_link.click(function() {
		link.toggleClass('menu-link_active');
		menu.toggleClass('menu_active');
	});

	$('h2').addClass('b');

		//$('#button-1').click(function() {
		// alert('Hello!');
		//$('#top-header').toggleClass('pincColor');
	//});

	/*Одноразовое нажатия*/

	$('#button-1').on('click', function(){
		$('#top-header').toggleClass('pincColor');
	});

	/*Двайное нажатия*/

	//$('#button-1').on('dblclick', function(){
		//$('#top-header').toggleClass('pincColor');
	//});

	/*Наведение мыша*/

	$('#textArea').on('mouseenter', function(){
		$(this).toggleClass('orangeBg');
	});

	/*Уведение мыша*/

	$('#textArea').on('mouseleave', function(){
		$('#textArea').toggleClass('orangeBg');
	});

	/*Фокус Элемента*/

	$('#inputName').on('focus', function(){
		$(this).addClass('focus');
	});

	/* Удаляет фокус Элемента*/

	$('#inputName').on('blur', function(){
		$(this).removeClass('focus');
	});

	/*Выводит значеные после Удаляет фокуса*/

	//$('#inputName').on('change', function(){
		//$('#textHolder').text('Привет');
		//$('#textHolder').text($(this).val());
	//});

	/*Выводит значеные онлайн*/

	$('#inputName').on('keyup', function(){
		//$('#textHolder').text('Привет');
		$('#textHolder').text($(this).val());
	});

	/*Назначает события по нажатия клавишь*/

	$('#inputName').on('keyup', function(event){
		//$('#textHolder').text('Привет');
		if (event.which == 27) {
			$('#textHolder').text('');
		}
	});

	/*Добавить класс по клику мыша*/

	$('#addGreen').on('click', function(){
		$('#textBox').addClass('greenBg');
	});

	/* Удаляет класс с Элемента по клику мыша*/

	$('#removeGreen').on('click', function(){
		$('#textBox').removeClass('greenBg');
	});

	/* Удаляет или добавить класс с Элемента по клику мыша*/

	$('#taggleGreen').on('click', function(){
		$('#textBox').toggleClass('greenBg');
	});

	/*  добавить в класс CSS стиль*/

	$('#customCSS').on('click', function(){
		$('#textBox').css('border','5px solid #00796B');
	});


	/*изменить CSS свойства с анимацией*/

	$('#customWidht').on('click', function(){
		$('#testBox').animate({'width': '200px'}, 2000);
		$('#testBox').animate({'height': '50px'}, 2000);
	});

	$('#customOpacity').on('click', function(){
		$('#testBox').animate({'opacity': '0'}, 1000);
	});

	/*  Скрываеть Элементь*/

	$('#hide').on('click', function(){
		$('#testBox').hide(1000);
	});

	/*  Показывает Элементь*/

	$('#show').on('click', function(){
		$('#testBox').show(1000);
	});

	/* Скрывает и Показывает Элементь с задержкой*/

	$('#hideAndShow').on('click', function(){
		$('#testBox').hide(1000).delay(1000).show(1000);
	});

	/* Пропадаеть Элементь */

	$('#fadeOut').on('click', function(){
		$('#testBox').fadeOut(1000);
	});

	/* Поевлаеца Элементь */

	$('#fadeIn').on('click', function(){
		$('#testBox').fadeIn(1000);
	});

	/* Пропадаеть и Поевлаеца Элементь */

	$('#fadetoggle').on('click', function(){
		$('#testBox').fadeToggle(1000);
	});

	/* Пропадаеть Элементь */

	$('#slideUp').on('click', function(){
		$('#testBox').slideUp(1000);
	});

	/* Поевлаеца Элементь */

	$('#slideDown').on('click', function(){
		$('#testBox').slideDown(1000);
	});

	/* Пропадаеть и Поевлаеца Элементь */

	$('#slideToggle').on('click', function(){
		$('#testBox').slideToggle(1000);
	});

	$('#formSum').on('submit', function(event) {
		event.preventDefault();

		var numberOne,
			numberTwo,
			summ;

		numberOne = $('#numberOne').val();
		numberTwo = $('#numberTwo').val();

		numberOne = parseInt(numberOne);
		numberTwo = parseInt(numberTwo);

/*		alert(numberOne);
		alert(numberTwo);*/

		if (isNaN(numberOne)) {
			numberOne = 0
		}

		if (isNaN(numberTwo)) {
			numberTwo = 0
		}

		summ = numberOne + numberTwo;
		
		/*alert(summ);*/

		$('#sumResult').text(summ);

	});


	$('#testbox').text('tect');

	/*$('#testbox').html('<h2>tect</h2>');*/

	$newcontent = $(

		'<h4>Заголовок</h4>' +
		'<p>Абзац с текстом</p>' +
		'<ul>' +
		'<li>пункт 1 </li>' +
		'<li>пункт 2 </li>' +
		'<li>пункт 3 </li>' +
		'</ul>'
	);

/*	$newcontent.hide();*/

	$('#testbox').html($newcontent);

/*	$('#testbox').on('click', function(){
		$newcontent.fadeIn();
	});*/

	/*$newcontent.fadeIn();*/

	$('#testbox').prepend('<p>добавить <b>новы текст</b> внутри и в начале элемента </p>');

	$('#testbox').append('<p>добавить <b>новы текст</b> внутри и в конце элемента </p>');

	$('#testbox').before('<p>добавить <b>новы текст</b> перед элемента </p><br>');

	$('#testbox').after('<p>добавить <b>новы текст</b> после элемента </p>');

	$('#textNoWrap').wrap('<div class="pinkBorder"></div>');

	/*$('#textInWrap').unwrap();*/

	/*$('#textInWrap').unwrap('.greenBorder');*/

	/*$('#textInWrap').unwrap('.BlueBorder');*/

	/*$('#toDeleteEmpty').empty('');*/

	/*$('#toDeleteRemove').remove('');*/

	$('#testbox').on('click', function(){

		var $cloneElement = $(this).clone();

		$cloneElement.addClass('greenBorder');

		$cloneElement.html('<h2>Абсолютно другой текст</h2>');

		$('#testbox').after($cloneElement);
	});
	
});
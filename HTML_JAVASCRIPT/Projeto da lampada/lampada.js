//constantes
	const turnOn = document.getElementById('turnOn');
	const turnOff = document.getElementById('turnOff');
	const lamp = document.getElementById('lamp');

//funções
	function isLampBroken () {
	return lamp.src.indexOf ('lampada_quebrada') > -1;}

	function lampOn () {
	if (!isLampBroken ()) 
	{lamp.src = 'lampada_acesa.jpg';}}	
	
	function lampOff () {
	if (!isLampBroken ()) 
	{lamp.src = 'lampada.jpg';}}
	
	function lampBroken () {
	lamp.src = 'lampada_quebrada.jpg';}

//Eventos
	turnOn.addEventListener ( 'click', lampOn );
	turnOff.addEventListener ( 'click', lampOff );


	lamp.addEventListener ('mouseover', lampOn);
	lamp.addEventListener ('mouseleave', lampOff);
	lamp.addEventListener ('dblclick', lampBroken);


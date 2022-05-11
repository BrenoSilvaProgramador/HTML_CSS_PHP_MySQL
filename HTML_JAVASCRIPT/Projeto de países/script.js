function origemPais()
	{	var nat = window.document.querySelector('input#tex');
		var x = Number(tex.value);
		var pais = window.document.querySelector('div#res');

		if (x == 55)
		{res.innerText = (`Seu DDI é ${x}. Talvez você seja brasileiro!`);}
		else if (x == 1)
		{res.innerText = (`Seu DDI é ${x}. Talvez você seja americano!`);}
		else if (x == 33)
		{res.innerText = (`Seu DDI é ${x}. Talvez você seja frances!`);}
		else if (x == 39)
		{res.innerText = (`Seu DDI é ${x}. Talvez você seja italiano!`);}
		else
		{res.innerText = (`Você é um estrangeiro não catalogado!`)}
	}
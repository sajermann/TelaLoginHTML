$(document).ready(function(){
    $('.modal').modal();
});

function login(){
	if(document.querySelector('.loginUser').value == '' || document.querySelector('.loginPass').value == ''){
		if( document.querySelector('.loginUser').value == ''){
			M.toast({html: 'Usuário não Preenchido'});
		}
		if( document.querySelector('.loginPass').value == ''){
			M.toast({html: 'Senha não Preenchida'});
		}
	}else{
		$('.progressBar').fadeIn(500);
		$('.loginUser').attr('disabled','disabled');
		$('.loginPass').attr('disabled','disabled');
		$('.buttonEnter').attr('disabled','disabled');
		
		//Sucess
		//M.toast({html: 'Logado'});
		//Error
		$('.progressBar').fadeOut(500);
		$('.loginUser').removeAttr('disabled');
		$('.loginPass').removeAttr('disabled');
		$('.buttonEnter').removeAttr('disabled');
		M.toast({html: 'Credenciais Inválidas'});
	}
}

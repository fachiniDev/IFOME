

    function cardapio(){
        location.href = 'cardapio.html';
    }
  function cupons(){
      location.href = 'cupons.html';
    }
    function faleConosco(){
      location.href = 'contato.html';
    }
    function inicio(){
      location.href = 'index.html';
    }

    


    function resgate(){

    let btn = document.querySelectorAll('#btn'); 
    

    btn.forEach(x => {
      x.addEventListener('click', () => x.innerHTML ='Cupom resgatado')  
    });
    

    }

    
     


      
   /* let btnAcao = document.querySelector('btn');
      btnAcao.addEventListener("clicar"), () => {
        this.disabled = true;}
    */
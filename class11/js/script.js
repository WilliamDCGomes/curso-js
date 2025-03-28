
function buttonClicked() {
    let result = confirm('Deseja realmente sair da página?')
    alert(result)
    if(result){
        window.close();
    }
}

/*window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
  });*/
  


function adicionarCaracter(caracter){
    const valorInput = document.querySelector('.display').value
    
    document.querySelector('.display').value = valorInput + caracter
}

function limparTela(){
    document.querySelector('.display').value = ''
}

function calcular(){
  const valorInput = document.querySelector('.display').value

  document.querySelector('.display').value = eval(valorInput)
}

function invert(){
    const valorInput = document.querySelector('.display').value
    
     document.querySelector('.display').value = valorInput * -1
}


    document.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        event.preventDefault() 
        calcular()
    }
})


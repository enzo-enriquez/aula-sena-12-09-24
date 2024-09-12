function ok() {

  const codigo = document.getElementById('codigo').value;
  localStorage.setItem('chave',codigo)
  console.log(codigo)
  console.log('voce armazenou com sucesso')
  
}

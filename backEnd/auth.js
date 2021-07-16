//este arquivo faz a autenticacao da conta no fireBase e retorna se teve o acesso permitido ou negado

var authForm = document.getElementById('authForm');

authForm.onsubmit = function(event){
    event.preventDefault()

    firebase.auth().signInWithEmailAndPassword(authForm.email.value, authForm.password.value).then(function(user){
        console.log('acesso!!')
        console.log(user)
    }).catch(function(error){
        console.log('negado!!')
        console.log(error)
    })

}
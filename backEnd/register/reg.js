var regForm = document.getElementById('regForm')

regForm.onsubmit = function(event){
    event.preventDefault()

    firebase.auth().createUserWithEmailAndPassword(regForm.email.value, regForm.password.value).then(function(user){
        console.log('cadastrado')
        console.log(user)
    }).catch(function(error){
        console.log('nao cadastrado')
        console.log(error)
    })
}
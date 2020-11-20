const login = document.getElementById("button")

login.addEventListener("click", function (event) {
    event.preventDefault()
    const nama = document.getElementById("name")
    const pass = document.getElementById("password")
    
       
    if(nama.value === "admin" && pass.value === "admin"){ 
        window.location.href = "homepage.html"
    }else{
        alert(`Username dan Password salah`)
    }
})
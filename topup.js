const topUp = document.getElementById("saveTop")

topUp.addEventListener("click", function () {
    // console.log("menekan")
    event.preventDefault()
    const uang = document.getElementById("nominal")
    const hal = document.getElementById("perihal")
    const id = document.getElementById("id")   

    if(hal.value !== '' && uang.value !== '' && id.value !== ''){ 
        if(id.value.length >= 10){ 
            if (uang.value < 50.000) {
                alert(`Minimal Top Up sebesar 50.000`)
                uang.value = ''
            }else{
                alert(`Selamat Transaksi telah berhasil sebesar ${uang.value} dengan ID: ${id.value}, Pengisian: ${hal.value}`)
                id.value = ''
                uang.value = ''
                hal.value = ''
            }
        }else{
            alert(`ID minimal 12 digit`)
            id.value = ''
        }
        
    }else if(hal.value === '' && uang.value === '' && id.value === ''){
        alert(`Masukkan Nominal Uang ,ID dan Perihal`)
        id.value = ''
        uang.value = ''
        hal.value = ''
    }else if(hal.value === '' && uang.value !== '' && id.value === ''){
        alert(`Masukkan ID dan Perihal`)
        id.value = ''
        hal.value = ''
    }else if(hal.value !== '' && uang.value !== '' && id.value === ''){
        alert(`Masukkan ID`)
        id.value = ''
    }else if(hal.value === '' && uang.value !== '' && id.value !== ''){
        alert(`Masukkan Perihal`)
        hal.value = ''
    }else if(hal.value !== '' && uang.value == '' && id.value === ''){
        alert(`Masukkan Nominal Uang dan ID`)
        id.value = ''
        uang.value = ''
    }else if(hal.value === '' && uang.value === '' && id.value !== ''){
        alert(`Masukkan Perihal dan Nominal Uang`)
        uang.value = ''
        hal.value = ''
    }
    
})
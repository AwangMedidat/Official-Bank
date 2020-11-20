const pay = document.getElementByvirtual("savePay")

pay.addEventListener("click", function () {

    event.preventDefault()
    const uang = document.getElementByvirtual("nominal")
    const hal = document.getElementByvirtual("perihal")
    const virtual = document.getElementByvirtual("id")   

    if(hal.value !== '' && uang.value !== '' && virtual.value !== ''){ 
        if(virtual.value.length >= 10){ 
            if (uang.value < 50.000) {
                alert(`Minimal Transfer sebesar 50.000`)
                uang.value = ''
            }else{
                alert(`Selamat Transaksi telah berhasil sebesar ${uang.value} dengan No.Virtual: ${virtual.value}, Pengisian: ${hal.value}`)
                virtual.value = ''
                uang.value = ''
                hal.value = ''
            }
        }else{
            alert(`No.virtual minimal 11 digit`)
            virtual.value = ''
        }
        
    }else if(hal.value === '' && uang.value === '' && virtual.value === ''){
        alert(`Masukkan Nominal Uang ,No. Virtual dan Perihal`)
        virtual.value = ''
        uang.value = ''
        hal.value = ''
    }else if(hal.value === '' && uang.value !== '' && virtual.value === ''){
        alert(`Masukkan No. Virtual dan Perihal`)
        virtual.value = ''
        hal.value = ''
    }else if(hal.value !== '' && uang.value !== '' && virtual.value === ''){
        alert(`Masukkan No. Virtual`)
        virtual.value = ''
    }else if(hal.value === '' && uang.value !== '' && virtual.value !== ''){
        alert(`Masukkan Perihal`)
        hal.value = ''
    }else if(hal.value !== '' && uang.value == '' && virtual.value === ''){
        alert(`Masukkan Nominal Uang dan No. Virtual`)
        virtual.value = ''
        uang.value = ''
    }else if(hal.value === '' && uang.value === '' && virtual.value !== ''){
        alert(`Masukkan Perihal dan Nominal Uang`)
        uang.value = ''
        hal.value = ''
    }
    
})

const transfer = document.getElementById("saveTf")

transfer.addEventListener("click", function () {
    
    event.preventDefault()
    const uang = document.getElementById("nominal")
    const nama = document.getElementById("namaOrang")
    const nomor = document.getElementById("norek")

if(nama.value !== '' && uang.value !== '' && nomor.value !== '')
    if(nomor.value.length >= 10)
        if (uang.value < 10.000) {
            alert(`Minimal Transfer sebesar 10.000`)
            uang.value = ''
        }else{
            alert(`Selamat Transaksi telah berhasil sebesar ${uang.value} dengan Nama: ${nama.value}, No.Rekening: ${nomor.value}`)
            nama.value = ''
            uang.value = ''
            nomor.value = ''
        }
    else{
        alert(`No. Rekening minimal 10 digit`)
        nomor.value = ''
    }
else if(nama.value === '' && uang.value === '' && nomor.value === ''){
    alert(`Masukkan Nominal Uang ,Nama Rekening Tujuan dan No Rekening`)
    nama.value = ''
    uang.value = ''
    nomor.value = ''
}else if(nama.value === '' && uang.value !== '' && nomor.value === ''){
    alert(`Masukkan Nama Rekening Tujuan dan Nomor Rekening`)
    nomor.value = ''
    nama.value = ''
}else if(nama.value !== '' && uang.value !== '' && nomor.value === ''){
    alert(`Masukkan Nomor Rekening`)
    nomor.value = ''
}else if(nama.value === '' && uang.value !== '' && nomor.value !== ''){
    alert(`Masukkan Nama Rekening Tujuan`)
    nama.value = ''
}else if(nama.value !== '' && uang.value == '' && nomor.value === ''){
    alert(`Masukkan Nominal Uang dan Nomor Rekening`)
    nomor.value = ''
    uang.value = ''
}else if(nama.value === '' && uang.value === '' && nomor.value !== ''){
    alert(`Masukkan Nama Rekening Tujuan dan Nominal Uang`)
    uang.value = ''
    nama.value = ''
}
})
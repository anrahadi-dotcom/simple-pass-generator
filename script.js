let random = Math.floor(Math.random()*10)
const adjectives = ['baik','cantik','pintar','besar','kecil','cepat','lambat','keras','lembut','manis']
const nouns = ['buku','meja','kursi','rumah','kucing','air','pohon','mobil','sekolah','waktu']
const symbols = ['@','.',',','!','?',':','%','-','/',';']
let newUsername
let newPassword
let userOption = Number(prompt('Pilih opsi 1 atau 2')) 


const generate = (option) => {
    if(option === 1){
        newUsername = `${adjectives[random]}${nouns[random]}`
        console.log(newUsername)
    }else if(option === 2) {
        newPassword = `${adjectives[random].toUpperCase()}${nouns[random]}${random}${symbols[random]}`
            console.log(newPassword)
    }else {
        alert('harus pilih 1 atau 2!')
    }
   
}


while (userOption !== 1 && userOption !== 2) {
    userOption = Number(prompt('Pilih opsi 1 atau 2')) 
}

generate(userOption)










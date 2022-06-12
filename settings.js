const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.xyz', //apabila link api eror, segera laporkan ke owner
}

// Free apikey
global.APIKeys = {
	'https://api.zeeoneofc.xyz': 'your apikey',  // login https://api.zeeoneofc.xyz to get apikey || https://api-alphabot.herokuapp.com
}

// setting 
global.autoread = false // auto read pesan / message
//global.autorecording = true //status auto merekam ( auto record )
//global.autoketik = false //status auto mengetik (auto typing)
//global.available = false //status online (online)

// Other
global.botname = "CekilBott-Mdོ" //namabot kalian
global.ownername= "Cekil-Official ×፝֟͜×" //nama kalian
global.myweb ="https://s.id/gcJb" //bebas asal jan hapus
global.youtube = "https://s.id/gcJb" //bebas asal jan hapus
global.github = "https://github.com/cekilxd" //bebas
global.email = "cekilxd@gmail.com" //bebas
global.region = "Indonesia" //bebas
global.ownernomer = "6289515023118" // nomor wa kalian
global.ownernomerr = "+6289515023118" //nmr wa kalian
global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi.jpg" // foto donasi di folder image
global.background_welcome="https://telegra.ph/file/90a931648de597820bc08.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.ownerp = ["6289515023118"] //ganti agar fitur owner bisa di gunakan
global.packname = '© CekilBot-Mdོ' //sticker wm ubah
global.author = 'Di Buat Oleh CekilBot-MD' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '🤗Done! !!, Kontol',
    admin: 'Perintah Ini Hanya Bisa Digunakan Oleh Admin Kontol !',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Kontol!',
    owner: 'Perintah Ini Hanya Bisa Digunakan Oleh Owner Kontol 😎!',
    group: 'Perintah Ini Hanya Bisa Digunakan Di Group Goblok😏 !',
    private: 'Perintah Ini Hanya Bisa Digunakan Di Private Goblok😛 !',
	bot: 'Fitur Khusus Pengguna Nomor Bot',
    errtoimg: 'Error kontol !',
    wait: '⏳ Lagi Proses Kontol',
	lockCmd: 'Fitur Tidak Diaktifkan Oleh Owner!',
	example1: 'Selamat Datang Peler @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

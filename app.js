/*
ESİRGEYEN VE BAĞIŞLAYAN ALLAHIN İSMİ İLE 

EVSEL SU ARITMA CİHAZI İÇİN SCADA SİSTEMİ 
BAŞLANGIÇ TARİHİ : 16 AĞUSTOS 2018 12:00



*/

var five = require("johnny-five");
var boards = new five.Board();


boards.on("ready",()=>{

    var dusukBasinc = new five.Button(8)
    var yuksekBasinc = new five.Button(9)
    var motor = new five.Led(11)

    dusukBasinc.on("down",()=>{
        // Düşük Basın Switch Sinyal geldi
        console.log("Cihaz Çalıştı "+ new Date() )
        motor.on()
    })

    dusukBasinc.on("up",()=>{
        /// düşük basınç kapandı 

        console.log("Düşük Basınç Kapandı  "+ new Date() )

        motor.off()

    })

    yuksekBasinc.on("down",()=>{
        // Yüksek Basınç devreye girince 

        motor.off()

    })

})
 


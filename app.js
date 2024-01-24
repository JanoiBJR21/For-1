let roind = prompt("คุณจะทายผล หัว หรือ ก้อย กี่รอบ ?")

for (var i = 1; i <= roind; i++) {
    var answer = prompt("หัว หรือ ก้อย")

    document.getElementById("itemlist").innerHTML += "สิ่งที่คณทายผลครั้งที่" + i + " : " + answer + "<br>"

    var random_answer = Math.floor(Math.random() * 10)

    if (random_answer <= 4) {
        //หัว
        random_answer = "หัว"
    } else {
        //ก้อย
        random_answer = "ก้อย"
    }
    if (answer == random_answer) {
        //alert("ถูกต้อง")
        document.getElementById("result").innerHTML += "ผลทายครั้งที่ " + i + " : " + "ออกผล  " + random_answer + "   " + "...ยินดีด้วย..! คุณทายผลถูกต้อง" + "<br>"
    } else {
        //alert("ไม่ถูก")
        document.getElementById("result").innerHTML += "ผลทายครั้งที่ " + i + " : " + "ออกผล  " + random_answer + "    " + "...เสียใจด้วย..! คุณทายผลไม่ถูก" + "<br>"
    }
}
function copys() {
    var fisrt = document.getElementById("first").value
    var second = document.getElementById("second").value
    var third = document.getElementById("third").value
    var four = document.getElementById("four").value
    var five = document.getElementById("five").value
    var pela = document.getElementById("pela")
    var dosra = document.getElementById("dosra")
    var teesra = document.getElementById("teesra")
    var chota = document.getElementById("chota")
    var panchwa = document.getElementById("panchwa")
    if (fisrt === "") {
        pela.value = "Write your name first"
    }
    else {
pela.value = "Your name is " + " " + fisrt;
    }
     if (second === "") {
        dosra.value = "Write your father first"
    }
    else{
 dosra.value = "Your Father name is " + " " + second;
    }
     if (third === "") {
        teesra.value = "Write your address first"
    }
    else{
  teesra.value = "Your address is " + " " + third;
    }
     if (four=== "") {
        chota.value = "Write your email first"
    }
    else{
 chota.value = "Your gmail is " + " " + four;
    }
     if (five=== "") {
        panchwa.value = "Write your phone number first"
    }
    else{

    panchwa.value = "Your phone number is " + " " + five;
    }
   
    }
function submits () {
    alert("Your Form is submitted")
}
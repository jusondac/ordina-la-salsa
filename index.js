const arr = [
  "sal? :)",
  "baca pelan-pelan yahh",
  "aku doain kamu dipermudah buat lulus",
  "dan kelak, kamu bakal lebih semangat dari hari ini",
  "sehat-sehat ya sal",
  "besok akan jadi hari baru",
  "jangan marah-marah",
  "jangan lupa makan",
  "stay sekali lagi, jan makan yoghurt buat sarapan",
  "dan lagi, tetaplah makan siang selagi bisa",
  "sekali lagi, kalo kamu stress dan ga tau mau ngapain. makan yahh",
  "klik aja link ini kalo kangen",
  "kamu adalah orang yang berusaha memaafkan diri sendiri",
  "bukan tentang aku, ini semua tentang kamu",
  "tetap semangat orang baik",
  "kita adalah emas dimata orang yang mencintai kita",
  "kita adalah orang hebat dimata mereka yang mengenal kita",
  "semua hal tentang kita",
  "love youuu!! >_<"
]

button = document.getElementById("btn");
i = 1;
hidden = document.getElementsByClassName('hidden')[0];
displaybox = document.getElementsByClassName('text')[0];
hidden.style.display = "none"
// hidden.style.display = "block"
displaybox.innerHTML = "<p>"+arr[0]+"</p>";
button.addEventListener('click', function(){
  displaybox.innerHTML = "<p>"+arr[i]+"</p>";
  i += 1;
  if(arr.length+1 == i){
    button.style.display = 'none';
    displaybox.style.display = 'none';
    hidden.style.display = "block";
  }
})

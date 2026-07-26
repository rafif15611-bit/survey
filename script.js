// ===============================
// GANTI DENGAN URL APPS SCRIPT
// ===============================
const URL_SCRIPT = "https://script.google.com/macros/s/PASTE_URL_KAMU/exec";

// ===============================
// ANIMASI PARTIKEL
// ===============================
particlesJS("particles-js",{
  particles:{
    number:{
      value:80,
      density:{
        enable:true,
        value_area:800
      }
    },
    color:{
      value:"#ffffff"
    },
    shape:{
      type:"circle"
    },
    opacity:{
      value:0.5,
      random:true
    },
    size:{
      value:3,
      random:true
    },
    line_linked:{
      enable:true,
      distance:150,
      color:"#66ccff",
      opacity:0.4,
      width:1
    },
    move:{
      enable:true,
      speed:2
    }
  },
  interactivity:{
    detect_on:"canvas",
    events:{
      onhover:{
        enable:true,
        mode:"grab"
      },
      onclick:{
        enable:true,
        mode:"push"
      }
    },
    modes:{
      grab:{
        distance:180,
        line_linked:{
          opacity:1
        }
      },
      push:{
        particles_nb:4
      }
    }
  },
  retina_detect:true
});

// ===============================
// PROGRESS BAR
// ===============================
const form = document.getElementById("form");
const bar = document.getElementById("bar");

const input = form.querySelectorAll("textarea,input");

function updateProgress(){

let isi = 0;

input.forEach(i=>{

if(i.type==="radio"){

if(document.querySelector("input[name='ganteng']:checked"))
isi++;

}else{

if(i.value.trim()!="")
isi++;

}

});

const total = 5;

bar.style.width = (isi/total)*100+"%";

}

input.forEach(i=>{

i.addEventListener("input",updateProgress);
i.addEventListener("change",updateProgress);

});

// ===============================
// KIRIM DATA
// ===============================
form.addEventListener("submit",async function(e){

e.preventDefault();

const tombol = document.querySelector("button");

tombol.disabled=true;

tombol.innerHTML="Mengirim...";

try{

await fetch(URL_SCRIPT,{
method:"POST",
body:new FormData(form)
});

alert("✅ Jawaban berhasil dikirim.");

form.reset();

bar.style.width="0%";

}catch(err){

alert("❌ Gagal mengirim.\nPeriksa URL Apps Script.");

}

tombol.disabled=false;

tombol.innerHTML="Kirim Jawaban 🚀";

});

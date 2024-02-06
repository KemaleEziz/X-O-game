
//yenile() ishlemir
window.addEventListener("load", function () {
  const scoreX = document.getElementById("X");
  const scoreO = document.getElementById("O");
  const box = document.querySelectorAll(".game div");
  const clear = document.getElementById('clear')
  
  
  var pointer = "X-img";

//   scoreX.innerText = 0;
//   scoreO.innerText = 0;

  scoreX.innerText = localStorage.getItem('scoreX') || 0;
  scoreO.innerText = localStorage.getItem('scoreO') || 0;

  for (let i = 0; i < box.length; i++) {
    box[i].addEventListener("click", function () {
      var xo = box[i].classList[0];

      if (xo !== "X-img" && xo !== "O-img") {
        yaz(i);
      } else {
        alert("bosh dama sech");
      }
    });
  }

  clear.addEventListener('click',function(){
    var sual = confirm('Oyunu yenileyek?')
    if(sual){
        localStorage.clear();
        open('/','_parent')
    }
  })
  function yaz(i) {
    box[i].classList.remove(pointer === "X-img" ? "O-img" : "X-img");
    box[i].classList.add(pointer);
    yoxla(0, 1, 2);
    yoxla(3, 4, 5);
    yoxla(6, 7, 8);
    yoxla(0, 3, 6);
    yoxla(1, 4, 7);
    yoxla(2, 5, 8);
    yoxla(0, 4, 8);
    yoxla(2, 4, 6);
    pointer = pointer === "X-img" ? "O-img" : "X-img";
  }

  function yoxla(i, j, k) {
    let a = box[i].classList[0];
    let b = box[j].classList[0];
    let c = box[k].classList[0];

    if (a === b && b === c && c) {
      alert(`oyun bitdi ${pointer} qazandi`);

      if (pointer === "X-img") {
        // scoreX.innerText = Number(scoreX.innerText) + 1;
      localStorage.setItem('scoreX',Number(scoreX.innerText) + 1)
    } else {
        // scoreO.innerText = Number(scoreO.innerText) + 1;
        localStorage.setItem('scoreO',Number(scoreO.innerText) + 1)
      }
      open('/','_parent')
    }
  }
});

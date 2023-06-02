$(document).ready(function () {
    //za link na kome se nalazimo
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
    });
    let korisnik=localStorage.getItem("korisnik");
    if(korisnik==null || korisnik==""){
     
      $("#rec").text("Nemate nikakvih ponuda.").css({
          "color":"green",
          "font-size":"30px",
          "font-weight":"bold"
      });
      return;
  }
  let ponude=[{
    ponudaKor:0,
    komentarKor: "",
    naslovKor: ""
}]
    //dohvatam ponude
    if(localStorage.getItem(korisnik)==null){
        $("#rec").text("Nemate nikakvih ponuda.").css({
            "color":"green",
            "font-size":"30px",
            "font-weight":"bold"
        });
        return;
     }else ponude=JSON.parse(localStorage.getItem(korisnik));
     //dinamicki dodajem paginacije
     let brojPaginacija=Math.ceil((ponude.length-1)/3);
     dodajPaginacije();
    function dodajPaginacije(){
    for(let i = 2; i <= brojPaginacija; i++) {
        var pageLink = $('<button>').addClass('page-link').attr('id', 'link' + i).text(i);
        var pageItem = $('<li>').addClass('page-item').append(pageLink);
        $('.pagination').append(pageItem);
      }
    }
      //popunjavam stranicu pri ucitavanju
      popuniStranicu(1);
    //dinamicki dodajem komentare 
    function popuniStranicu(indeks){
        $('.recenzije').empty();
        for(let i=indeks;i<ponude.length && i<indeks+3;i++){
            if(ponude[i].naslovKor=="")continue;
        let elem = "<div class='col-md-4'><div class='card'><div class='card-header'><h5></h5></div><div class='card-body'><p></p><p></p><button>Обриши</button></div></div></div>";
          let recenzija = $(elem);
          recenzija.find('h5').text(ponude[i].naslovKor).css({"font-weight":"bold",
          "font-size":"20px"
        });
          recenzija.find('.card-body > p:first-child').text(ponude[i].ponudaKor+"$").css({"font-weight":"bold",
          "color":"#9e1b32"
        });
          recenzija.find('.card-body > p:last-child').text(ponude[i].komentarKor).css("min-height","50px"); 
          recenzija.find("button").addClass("btn btn-secondary").attr("id",i); 
          recenzija.appendTo('.recenzije');
        }
    }
    //dodajem klik na dugmad paginacije
    $('.pagination').on('click', '.page-link', function() {
      let pageId = $(this).attr('id');
      let broj=parseInt(pageId.substring(4,));
      $('.page-link').removeClass('active');
      $(this).addClass('active');
      popuniStranicu((broj-1)*3+1);
     
    });

    //dodajem dugme za brisanje
    $(".btn-secondary").click(function(){
      let indeks=parseInt($(this).attr("id"));
      let naslov=ponude[indeks].naslovKor;
      let korisnici=JSON.parse(localStorage.getItem(naslov));
      for(let i=0;i<korisnici.length;i++){
        if(korisnici[i].korisnik==korisnik){
          korisnici.splice(i,1);
          localStorage.set(naslov,korisnici);
          break;
        }
      }
      ponude.splice(indeks,1);
      localStorage.setItem(korisnik,ponude);
      popuniStranicu(1);
    })
   
}
)
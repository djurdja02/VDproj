$(document).ready(function () {
    //ako je postavio uspesno ponudu korisnik se preusmerio ovde, a ako je odmah izabrao da vidi ponude onda nema poruke
    let uspeh=localStorage.getItem("uspeh");
    if(uspeh!=null && uspeh!=""){
        $("#uspeh").text(uspeh).css({
            "color":"green",
            "font-size":"20px",
            "font-weight":"bold"
        });
        localStorage.setItem("uspeh","");
    }
    let putanja1=localStorage.getItem("putanja1");
    let putanja2=localStorage.getItem("putanja2");
    let naslov=localStorage.getItem("artikal");
    let korisnici=[{
        korisnickoIme:"",
        ponuda: 0,
        komentar: ""
    }];
    //za breadcrumb
    let naziv="";
        switch(putanja1){
            case "slike":
                naziv="Слике";
                break;
            case "skulpture":
                naziv="Скулптуре";
                break;
            case "ostalo":
                naziv="Остало";
                break;

        }
        let link1=putanja1.concat(".html");
        $("#prviNav a").attr("href", link1);
        $("#prviNav a").text(naziv);

        $("#drugiNav a").text(putanja2);
    //dohvatam komentare za dati naziv
    if(localStorage.getItem(naslov)==null){
        localStorage.setItem(naslov,JSON.stringify(korisnici));
    }
    else korisnici=JSON.parse(localStorage.getItem(naslov));
    //dodajem paginaciju u zavisnosti koliko korisnika imam
    let brojPaginacija=Math.ceil((korisnici.length-1)/3);
    
    for(let i = 2; i <= brojPaginacija; i++) {
        var pageLink = $('<button>').addClass('page-link').attr('id', 'link' + i).text(i);
        var pageItem = $('<li>').addClass('page-item').append(pageLink);
        $('.pagination').append(pageItem);
      }
    popuniStranicu(1);
    //dinamicki dodajem komentare 
    function popuniStranicu(indeks){
        $('.recenzije').empty();
        for(let i=indeks;i<korisnici.length && i<indeks+3;i++){
            if(korisnici[i].korisnickoIme=="")continue;
        let elem = "<div class='col-md-4'><div class='card'><div class='card-header'><h5></h5></div><div class='card-body'><p></p><p></p></div></div></div>";
          let recenzija = $(elem);
          recenzija.find('h5').text(korisnici[i].korisnickoIme).css({"font-weight":"bold",
          "font-size":"20px"
        });
          recenzija.find('.card-body > p:first-child').text(korisnici[i].ponuda+"$").css({"font-weight":"bold",
          "color":"#9e1b32"
        });
          recenzija.find('.card-body > p:last-child').text(korisnici[i].komentar).css("min-height","50px");       
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
    
}
)
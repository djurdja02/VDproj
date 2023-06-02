$(document).ready(function () {
    //dohvatamo artikal o kome se radi i putanje za breadcrumb
    let naslov=localStorage.getItem("artikal");
    let putanja1=localStorage.getItem("putanja1");
    let putanja2=localStorage.getItem("putanja2");
    let slika=localStorage.getItem("slika1");
    popuniStranicu();
    function popuniStranicu(){
        //popunjavamo navigaciju
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
        $("#naslov").text(naslov);
        $("#slika").attr("src",slika );
        
    }
    //predavanje forme
    $("#posalji").click(function(){
        $("#greska").text("");
        let korisnik=$("#korisnickoIme").val();
        let ponuda=$("#ponuda").val();
        if(/^[a-zA-Z].{4,}/.test(korisnik)==false){
            $("#greska").text("Нисте унели добро корисничко име(мора почињати словом и бити минималне дужине од 5 карактера).").css({"color":"red","font-size":"20px"});
            $("#korisnickoIme").val("");
            return;
        }
        if(/^\d+/.test(ponuda)==false 
        || parseInt(ponuda)<1){
            $("#greska").text("Нисте унели добру понуду.").css({"color":"red","font-size":"20px"});
            $("#ponuda").val("");
            return;
        }
        //za svaki naslov se cuvaju posebne ponude i za svakog korisnika se cuvaju njegove ponude
        let korisnici=[{
            korisnickoIme:"",
            ponuda: 0,
            komentar: ""
        }];
        let ponude=[{
            ponudaKor:0,
            komentarKor: "",
            naslovKor: ""
        }]
        let komentarK=$("#komentar").val();
        if(komentarK==null)komentarK="";
        //prvo dodajemo u ponude za naslov
        if(localStorage.getItem(naslov)==null){
            localStorage.setItem(naslov,JSON.stringify(korisnici));
        }
        
        else korisnici=JSON.parse(localStorage.getItem(naslov));
        korisnici.push({
            korisnickoIme:korisnik,
            ponuda: ponuda,
            komentar:komentarK
         });
         localStorage.setItem(naslov,JSON.stringify(korisnici));
         //sad dodajemo u ponude korisnika
         if(localStorage.getItem(korisnik)==null){
            localStorage.setItem(korisnik,JSON.stringify(ponude));
         }else ponude=JSON.parse(localStorage.getItem(korisnik));
         ponude.push({
            ponudaKor:ponuda,
            komentarKor: komentarK,
            naslovKor: naslov
         });
         localStorage.setItem(korisnik,JSON.stringify(ponude));
         //sad dodajemo korisnika trenuntog u sesiju i poruku o uspesnom postavljanju ponude
         localStorage.setItem("korisnik",korisnik);
         localStorage.setItem("uspeh","Успешно сте додали понуду.");
         localStorage.setItem("putanja1",putanja1);
         localStorage.setItem("putanja2",putanja2);
         window.location.href = "pregledPonuda.html";
         return false;
    })
    
}
)
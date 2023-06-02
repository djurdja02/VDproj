$(document).ready(function () {
    //posto je uniformni izgled stranice nema potrebe za 20 html stranica
    //nego cemo sve raditi preko iste html stranice kojoj cemo dinamicki dodavai stvari
    let naslov=localStorage.getItem("naslov");
    let tekst=localStorage.getItem("tekst");
    let slika1=localStorage.getItem("slika1");
    let slika2=localStorage.getItem("slika2");
    let slika3=localStorage.getItem("slika3");
    let putanja1=localStorage.getItem("putanja1");
    let putanja2=localStorage.getItem("putanja2");

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
        //popunjavamo tekst
        $("#naslov").text(naslov);
        $("#tekst").text(tekst);
        $("#slika").attr("src",slika1 );
        $("#slika2").attr("src",slika2 );
        $("#slika3").attr("src",slika3 );

        
    }
    //svaki korisnik moze da ostavi ponudu
    $("#ponuda").click(function(){
        localStorage.setItem("artikal",naslov);
        localStorage.setItem("putanja1",putanja1);
        localStorage.setItem("putanja2",putanja2);
        window.location.href = "ostavljanjePonude.html";
        return false;
    })
    //pregled ponuda
    $("#pogledaj").click(function(){
        localStorage.setItem("artikal",naslov);
        localStorage.setItem("putanja1",putanja1);
        localStorage.setItem("putanja2",putanja2);
        window.location.href = "pregledPonuda.html";
        return false;
    })
}
)
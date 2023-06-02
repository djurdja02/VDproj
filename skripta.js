$(document).ready(function () {
    //ovo ces da vidis u svim js fajlovima i to je da bi se podebljao link na kojem se trenutno nalazimo
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
    if (link.href === window.location.href ||
        link.href.concat("#") === window.location.href) {
        link.classList.add('active');
    }
    });
    //ovo link1 i link2 je za opcije prva i druga strana na pocetnoj ovako ces da radis i za engleski tj da popunjavas dinamicki tekst
    $("#link1").click(function(){
        $(".prva img").attr("src","slike/postavka.jpg")
        $(".prva h3").text("Поставке");
        $(".prva p").text("Нова поставка Галерије Београд биће отворена за посете од понедељка, 5. јуна 2023. године. За публику ће бити отворена и изложба Слике великих формата – сведочанства епоха у Великој сали „Сава Текелија“.");
        $(".druga img").attr("src", "slike/urosPredic.jpg");
        $(".druga h3").text("Уметници");
        $(".druga p").text("У години обележавања значајног јубилеја – 175 година од оснивања Галерије Београд, реализујемо велику монографску изложбу посвећену стваралаштву једног од најистакнутијих националних сликара Уроша Предића.");
        $(".treca img").attr("src", "slike/foto_crtez-pariz_milan-kerac_1970_1920x910.jpg");
        $(".treca h3").text("Цртеж Милана Керца");
        $(".treca p").text("Уочи манифестације Месец франкофоније у Галерији Београд, архитекта Сава Форкапић поклонио је Галерији Матице српске цртеж Милана Керца са приказом Париза из 1970. године.");
        $(".cetvrta img").attr("src", "slike/soba-secanja-portreti-1536x768.jpg");
        $(".cetvrta h3").text("Соба сећања – портрети из колекције Вујичић");
        $(".cetvrta p").text("Галерија Београд је 2019. године за своју колекцију откупила два портрета, радове Арсенија Теодоровића, док је трећи портрет, рад Павела Ђурковића, поклон Маријете Вујичић.");
        
    })
    $("#link2").click(function(){
        $(".prva img").attr("src","slike/joanSofija.jpg")
        $(".prva h3").text("Портрети Јоана и Софије Јоановић-Бекеш");
        $(".prva p").text("Набавка портрета из породице Јоановић представљала је подстицај који је ван очекивања донео низ нових сазнања о животу и делатности портретисаних, о уметнику, као и о њиховом окружењу.");
        $(".druga img").attr("src", "slike/bogomir.jpg");
        $(".druga h3").text("Четири дрвореза Богомила Карлавариса");
        $(".druga p").text("Прикази фигуре и портрета супруге, као и портрет сина и аутопортрет одштампани су 2020. године у атељеу Слободана Кнежевића од оригиналних матрица. ");
        $(".treca img").attr("src", "slike/konzervacija.jpg");
        $(".treca h3").text("Конзерваторски пројекти и истраживања");
        $(".treca p").text("Пројекти који обухватају проучавање, конзервацију, рестаурацију и излагање одабраних предмета кроз међународну сарадњу и дугогодишње пројекте.");
        $(".cetvrta img").attr("src", "");
        $(".cetvrta h3").text("");
        $(".cetvrta p").text("");
        
    })   


})
$(document).ready(function () {
    //za link na kome se nalazimo
    const navLinks = document.querySelectorAll('.dropdown-menu .dropdown-item');
    navLinks.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
    });
    //dodaje za pregled slika informacije koje ce da se prikazu na stranici sa konkretnomUmetninom
    //posto se pokazuje u istom formatu 
    $("#prvi").click(function(){
        localStorage.setItem("naslov","Иконица са ликом Св. Николе ,Војин Бакић, 1945, сребро, Трњане.");
        localStorage.setItem("tekst","Јован Бијелић (Војин Бакић је без сумње један од највећих српских вајара 20. века, уметник европског формата: аутор који је успео да у авангардизма апстракције оствари монументалност и непосредност које су, традиционалистички гледано, обележја класичне фигуративне скулптуре. Процењена вредност уметнине износи 400$.");
        localStorage.setItem("slika1","slike/grncarija1.jpg");
        localStorage.setItem("slika2","slike/ostalo11.jpg");
        localStorage.setItem("slika3","slike/ostalo12.jpg");
        localStorage.setItem("putanja1","ostalo");
        localStorage.setItem("putanja2","Иконица са ликом Св. Николе");
        window.location.href = "konkretnaUmetnina.html";
        return false;
    })
    $("#drugi").click(function(){
        localStorage.setItem("naslov","Наушнице, Петар Палавичини, 1922, злато, Мачванска Митровица");
        localStorage.setItem("tekst","Петар Палавичини (итал. Petar Pallavicini; Корчула, 15. јун 1887 — Дубровник, 22. октобар 1958) био је српски и југословенски вајар.Клесарски занат учио на Корчули, а вајарство на Вајарско-каменорезачкој школи у Хоржицама .Процењена вредност уметнине износи 200$.");
        localStorage.setItem("slika1","slike/grncarija2.jpg");
        localStorage.setItem("slika2","slike/ostalo11.jpg");
        localStorage.setItem("slika3","slike/ostalo12.jpg");
        localStorage.setItem("putanja1","ostalo");
        localStorage.setItem("putanja2","Фронтална поставка");
        window.location.href = "konkretnaUmetnina.html";
        return false;
    })
    $("#treci").click(function(){
        localStorage.setItem("naslov","Иконица са ликом Св. Николе, Ђорђе Јовановић, 1907, сребро, позлата, оникс, Славковица код Љига");
        localStorage.setItem("tekst","Ђорђе Ђока Јовановић (Нови Сад, 21. јануар 1861 — Београд, 23. март 1953) био је српски вајар и академик Српске академије наука и уметности.Као један од оснивача Уметничке школе, из које је касније настала Уметничка академија, Јовановић је био веома посвећен педагошком раду. Процењена вредност уметнине износи 800$.");
        localStorage.setItem("slika1","slike/grncarija3.jpg");
        localStorage.setItem("slika2","slike/ostalo11.jpg");
        localStorage.setItem("slika3","slike/ostalo12.jpg");
        localStorage.setItem("putanja1","ostalo");
        localStorage.setItem("putanja2","Пролеће");
        window.location.href = "konkretnaUmetnina.html";
        return false;
    })
}
)
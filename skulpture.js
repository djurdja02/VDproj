$(document).ready(function () {
    //za link na kome se nalazimo
    const navLinks = document.querySelectorAll('.dropdown-menu .dropdown-item');
    navLinks.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
    });
    //dodaje za pregled skulptura informacije koje ce da se prikazu na stranici sa konkretnomUmetninom
    //posto se pokazuje u istom formatu 
    $("#prvi").click(function(){
        localStorage.setItem("naslov","Ђорђе Јовановић, Мирис ружа, 1914, карарски мермер, 62 x 43 x 33,5 цм");
        localStorage.setItem("tekst","Ђорђе Ђока Јовановић (Нови Сад, 21. јануар 1861 — Београд, 23. март 1953) био је српски вајар и академик Српске академије наука и уметности.Као један од оснивача Уметничке школе, из које је касније настала Уметничка академија, Јовановић је био веома посвећен педагошком раду. Процењена вредност уметнине износи 8000$.");
        localStorage.setItem("slika1","slike/skulptura1.jpg");
        localStorage.setItem("slika2","slike/skulptura11.jpg");
        localStorage.setItem("slika3","slike/skulptura12.jpg");
        localStorage.setItem("putanja1","skulpture");
        localStorage.setItem("putanja2","Мирис ружа");
        window.location.href = "konkretnaUmetnina.html";
        return false;
    })
    $("#drugi").click(function(){
        localStorage.setItem("naslov","Петар Палавичини, Девојка са зделом, 1932, камен, 71,5 x 27 x 28,5 цм");
        localStorage.setItem("tekst","Петар Палавичини (итал. Petar Pallavicini; Корчула, 15. јун 1887 — Дубровник, 22. октобар 1958) био је српски и југословенски вајар.Клесарски занат учио на Корчули, а вајарство на Вајарско-каменорезачкој школи у Хоржицама .Процењена вредност уметнине износи 10500$.");
        localStorage.setItem("slika1","slike/skulptura2.jpg");
        localStorage.setItem("slika2","slike/skulptura11.jpg");
        localStorage.setItem("slika3","slike/skulptura12.jpg");
        localStorage.setItem("putanja1","skulpture");
        localStorage.setItem("putanja2","Девојка са зделом");
        window.location.href = "konkretnaUmetnina.html";
        return false;
    })
    $("#treci").click(function(){
        localStorage.setItem("naslov","Ристо Стијовић, Седећи акт – Злата, 1925, ружичасти мермер, 26,6 x 23 x 13 цм");
        localStorage.setItem("tekst","Ристо Стијовић (Подгорица, 8. октобар 1894 — Београд, 20. децембар 1974) био је српски и југословенски вајар и академик САНУ.Студирао вајарство у уметничкој школи у Београду од 1912. до 1914, потом у Марсељу 1916 -1917 па у Паризу у „Школи лепих уметности“ од 1917. до 1923.Процењена вредност уметнине износи 5000$.");
        localStorage.setItem("slika1","slike/skulptura3.jpg");
        localStorage.setItem("slika2","slike/skulptura11.jpg");
        localStorage.setItem("slika3","slike/skulptura12.jpg");
        localStorage.setItem("putanja1","skulpture");
        localStorage.setItem("putanja2","Седећи акт – Злата");
        window.location.href = "konkretnaUmetnina.html";
        return false;
    })
}
)
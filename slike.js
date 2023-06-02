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
        localStorage.setItem("naslov","Јован Бијелић, Љубавници у пределу, 1921, уље на платну, 160 х 110 цм");
        localStorage.setItem("tekst","Јован Бијелић (Ревеник, 30. јуни 1884.— Београд, 12. март 1964) био је српски и југословенски сликар. Бијелић је један од најзначајнијих југословенских ликовних стваралаца између два светска рата и један од најзначајнијих српских представника колористичког експресионизма. Процењена вредност уметнине износи 4000$.");
        localStorage.setItem("slika1","slike/slika1.jpg");
        localStorage.setItem("slika2","slike/slika11.jpg");
        localStorage.setItem("slika3","slike/slika12.jpg");
        localStorage.setItem("putanja1","slike");
        localStorage.setItem("putanja2","Љубавници у пределу");
        window.location.href = "konkretnaUmetnina.html";
        return false;
    })
    $("#drugi").click(function(){
        localStorage.setItem("naslov","Леонид Шејка, Фронтална поставка, 1955, уље на платну, 76 х 75 цм");
        localStorage.setItem("tekst","Леонид Шејка (1932 — 1970) био је југословенски архитекта и сликар. Био је један од оснивача уметничке групе Медијала и учествао је на свим изложбама групе до 1970. године. Његова дела блиска су надреализму а на њима је заступљена богата симболика и дубока интелектуалност.Процењена вредност уметнине износи 3200$.");
        localStorage.setItem("slika1","slike/slika2.jpg");
        localStorage.setItem("slika2","slike/slika11.jpg");
        localStorage.setItem("slika3","slike/slika12.jpg");
        localStorage.setItem("putanja1","slike");
        localStorage.setItem("putanja2","Фронтална поставка");
        window.location.href = "konkretnaUmetnina.html";
        return false;
    })
    $("#treci").click(function(){
        localStorage.setItem("naslov","Леон Коен, Пролеће, око 1902, уље на картону, 74 х 102 цм");
        localStorage.setItem("tekst","Леон Коен (Београд, 1859 – Вршац, 15. мај 1934) био је српски сликар. Најзначајнији је представник симболизма у Србији.Процењена вредност уметнине износи 5000$.");
        localStorage.setItem("slika1","slike/slika3.jpg");
        localStorage.setItem("slika2","slike/slika11.jpg");
        localStorage.setItem("slika3","slike/slika12.jpg");
        localStorage.setItem("putanja1","slike");
        localStorage.setItem("putanja2","Пролеће");
        window.location.href = "konkretnaUmetnina.html";
        return false;
    })
}
)
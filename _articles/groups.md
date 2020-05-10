---
title: Csoportok
permalink: "/csoportok/"
comments: false

---
<style>
    main .content {
        width: 100%;
        background-image: url(/assets/img/groups/books-background.png);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        margin-top: 0;
        padding-top: 3rem;
    }

    .content p {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .title-with-source-edit {
        display: none;
    }

    .opengroups-right, .opengroups-left {
        display: flex;
        flex-direction: row;
        margin-bottom: 3rem;
        margin-top: 3rem;
    }

    .opengroups-right {
        background: #1c92d2;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #f2fcfe, #1c92d2);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #f2fcfe, #1c92d2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }

    .opengroups-left {
        background: #1c92d2;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to left, #f2fcfe, #1c92d2);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to left, #f2fcfe, #1c92d2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }

    .opengroup-text, .closedgroup-text {
        display: flex;
        flex-direction: column;
        width: 60%;
        color: #f2f2f2;
        font-weight: bold;
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .opengroup-text h2, .closedgroup-text h2 {
        opacity: 1;
        font-size: 2rem;
    }

    .opengroup-text {
        padding-left: 4rem;
    }

    .closedgroup-text {
        padding-right: 4rem;
        text-align: right;
    }

    .opengroup-image {
        width: 40%;
    }

    .closedgroup-image {
        width: 40%;
    }

    .opengroup-image img, .closedgroup-image img {
        width: 100%;
        height: 100%;
    }

    .group-event-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        margin-bottom: 3rem;
    }

    .calendar-link {
        text-decoration: none;
        padding-top: 10px;
        padding-bottom: 10px;
        color: #045B8A;
    }

    .calendar-link:hover, .calendar-link:focus {
        opacity: 0.7;
    }

</style>
<div id="nyitott-csoportok"></div>
<div class="opengroups-left">
<div class="opengroup-text"><h2>Nyitott csoportok</h2><p>Érdekel az irodalomterápia, de még sosem voltál csoporton? Dolgoznál az önismereteden, de nem akarsz elköteleződni egy hosszabb folyamatra? Részt vennél egy mély beszélgetésen, izgalmas és fontos témákról? Újfajta kulturális élményre vágysz? Felszabadítanád kreatív és játékos energiáid? Átélnél egy olyan közösségi élményt, ahol valódi kapcsolódásban van részed?</p>  
<p>Akkor gyere el egy nyitott csoportomra! Elköteleződés nélkül vehetsz részt, ám, ha tetszik, amit tapasztalsz, általában folytatásra is van lehetőséged. A nyitott csoportjaimat sokszor egy sorozatra fűzöm fel: akár az egész sorozatba is bekapcsolódhatsz. Kezedben a döntés, alakítsd saját igényeidhez a folyamatot!</p>
{% assign openCounter = 0 %}
{% for event in site.events %}
{% if event.event_type == 'Nyitott csoport' %}
{% assign openCounter = openCounter | plus: 1 %}
{% if openCounter == 1 %}
<a class="calendar-link" href="#event_calendar">Aktuális nyitott csoportjaimért kattints ide!</a>{% endif %}{% endif %}{% endfor %}</div><div class="opengroup-image"><img src="/assets/img/groups/opengroup.png"></div></div>

<div id="zárt-csoportok"></div>
<div class="opengroups-right">
<div class="closedgroup-image"><img src="/assets/img/groups/zartcsoport-cut.png"></div>
<div class="closedgroup-text"><h2>Zárt csoportok</h2><p>Ha egy fokozatosan elmélyülő folyamat során szeretnél dolgozni életed egy-egy területén, akkor a zárt csoportjaimon a helyed. Ez egy 6-8 alkalmas folyamatot jelent, heti vagy kétheti rendszerességgel. Itt a folyamatot ugyanazzal a közösséggel csináljuk végig, ez komoly közös kapcsolódást jelent. A zárt irodalomterápiás csoportjaimon általában egy téma kerül a fókuszba: fontos, hogy azzal dolgozunk, ami a résztvevőknek releváns és központi témája, így menet közben, együtt alakítjuk a fókuszt. </p>  
<p>Egy zárt biblioterápiás csoport során életed bizonyos kérdéseiben úgy láthatsz rá magadra, ahogy addig még soha. A szövegek és a téged kísérő csoporttársak tükrök lesznek számodra és működési módjaid számára. Az önismereti munkának ez a formája intenzív, sokszor kemény kérdésekkel szembesít, de ha végigcsinálod, biztosan értékes tanulságokkal fog szolgálni számodra.</p>
{% assign closedCounter = 0 %}
{% for event in site.events %}
{% if event.event_type == 'Zárt csoport' %}
{% assign closedCounter = closedCounter | plus: 1 %}
{% if closedCounter == 1 %}
<a class="calendar-link" href="#event_calendar">Aktuális zárt csoportjaimért kattints ide!</a>{% endif %}{% endif %}{% endfor %}</div></div>

<div id="workshopok"></div>
<div class="opengroups-left">
<div class="opengroup-text"><h2>Workshopok</h2><p>Szeretnél egy konkrét irodalmi műről vagy gondolatébresztő témáról beszélgetni, hasonló érdeklődésű emberekkel? Szeretnéd játékos és interaktív gyakorlatok során eddzeni önreflexiós képességeidet, felszabadítani kreatív erőforrásaidat? Szereted az intellektuális kihívásokat és vitákat, aminek során kihozod magadból a legtöbbet? </p>  
<p>Akkor ajánlom neked workshopjaimat! Miben más egy irodalomterápiás workshop, mint egy önismereti csoport? Egy workshopon kevésbé az önismereti kérdéseken van a hangsúly, a mint inkább a választott témán vagy irodalmi művön.</p>
<p>Ám, mivel szemléletem alapvetően személyközpontú és önreflexív, ezért a workshopokon is lehetőséged van saját magadra reflektálni, gondolkodni működési módjaidról. A foglalkozás célja azonban nem elsősorban az önismereted fejlesztése, hanem mindig az adott workshop témája mentén való kapcsolódás.</p>
{% assign workshopCounter = 0 %}
{% for event in site.events %}
{% if event.event_type == 'Workshop' %}
{% assign workshopCounter = workshopCounter | plus: 1 %}
{% if workshopCounter == 1 %}
<a class="calendar-link" href="#event_calendar">Aktuális workshopjaimért kattints ide!</a>{% endif %}{% endif %}{% endfor %}</div><div class="opengroup-image"><img src="/assets/img/groups/opengroup.png"></div></div>

<div id="event_calendar" class="group-event-container">
{% include closedgroup.html %}{% include workshop.html %}{% include opengroup.html %}
</div>
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
<a class="calendar-link" href="#event_calendar"><button class="link-button">Aktuális nyitott csoportjaimért kattints ide!</button></a>{% endif %}{% endif %}{% endfor %}</div><div class="opengroup-image"><img src="/assets/img/groups/opengroup.png"></div></div>

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
<a class="calendar-link" href="#event_calendar"><button class="link-button">Aktuális zárt csoportjaimért kattints ide!</button></a>{% endif %}{% endif %}{% endfor %}</div></div>

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
<a class="calendar-link" href="#event_calendar"><button class="link-button">Aktuális workshopjaimért kattints ide!</button></a>{% endif %}{% endif %}{% endfor %}</div><div class="opengroup-image"><img src="/assets/img/groups/opengroup.png"></div></div>

<div id="event_calendar" class="group-event-container">
{% include closedgroup.html %}{% include workshop.html %}{% include opengroup.html %}
</div>
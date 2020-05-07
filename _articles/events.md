---
layout: default
permalink: /esemenyek/
title: Események
comments: false
tags: események, irodalomterápia, biblioterápia, rudolfpanka, workshop, csoport
---

<style>
    /*
    .event-main-list-item {
        display: flex;
        flex-direction: column;
        background-image: url(/assets/img/events/calendar.png);
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center;
        margin-top: 4rem;
        padding-top: 10rem;
        padding-left: 4rem;
        padding-right: 4rem;
        padding-bottom: 2rem;
        width: 100%;
    }

    .event-main-list-item h2 {
        margin-bottom: 0;
        margin-top: -6rem;
        flex: 1 1 auto;
        color: white;
        font-size: 2rem;
    }

    .event-main-list-item h3 {
        margin-bottom: 0;
        margin-top: 2rem;
        flex: 1 1 auto;
    }

    <div class="events-container">
{% for event in site.events %}
    <div class="event-main-list-item">
        <h2>{{ event.title }}</h2>
        <h3>{{ event.event_date | date: '%Y. %m. %d., %H:%M' }}</h3>
        <div class="event-description"><p>{{ event.description }}</p></div>
        <div class="url"><a href="{{ event.url }}">A részletekért katt ide &gt;&gt;</a></div>
    </div>
{% endfor %}
</div>
    */

.events-list {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    background-image: url(/assets/img/events/calendar.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    list-style-type: none;
    list-style-position: outside;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 2rem;
}

.events-list-item {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    border-bottom: solid 2px darkred;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-family: Bebas Neue, cursive;
    letter-spacing: 1px;
    font-size: 1.3rem;
    text-align: center;
}

a.events-list-item-link {
    text-decoration: none;
    color: darkred;
}

a.events-list-item-link:hover {
    text-decoration: underline;
}

.events-aligner {
    height: 200px;
    color: white;
    text-align: center;
    font-family: Bebas Neue, cursive;
    letter-spacing: 1px;
    font-size: 3rem;
    margin-left: auto;
    margin-right: auto;
    padding: 6rem 0 4rem;
}
</style>

<ul class="events-list">
<li><div class="events-aligner">Események</div></li>
{% for event in site.events limit: 4 %}
    <a class="events-list-item-link" href="{{ event.url }}"><li class="events-list-item">{{ event.title }}{% if event.event_date %} - {{ event.event_date | date: '%Y. %m. %d. %H:%M' }}{% endif %}</li></a>
{% endfor %}
</ul>
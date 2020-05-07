---
layout: default
permalink: /esemenyek/
title: Események
comments: false
tags: események, irodalomterápia, biblioterápia, rudolfpanka, workshop, csoport
---

<ul class="events-list">
<li><div class="events-aligner">Események</div></li>
{% for event in site.events limit: 4 %}
    <a class="events-list-item-link" href="{{ event.url }}"><li class="events-list-item">{{ event.title }}{% if event.event_date %} - {{ event.event_date | date: '%Y. %m. %d. %H:%M' }}{% endif %}</li></a>
{% endfor %}
</ul>
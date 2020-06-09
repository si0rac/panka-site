---
layout: default
permalink: /blog/
comments: false
title: Blog
tags: irodalomterápia, biblioterápia, blog, rudolfpanka
description: "Rudolf Panka irodalomterapeuta blogja"
---

<ul class="blogpost-ul">
  {% for post in site.posts %}
    <li class="blogpost-li">
      <h2 class="post-title"><img class="blogpost-img" src="{{ post.image }}"><a href="{{ post.url }}">{{ post.title }}</a></h2>
      {{ post.description }}
    </li>
  {% endfor %}
</ul>
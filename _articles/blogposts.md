---
layout: default
permalink: /blogposts/
---

<ul class="blogpost-ul">
  {% for post in site.posts %}
    <li class="blogpost-li">
      <h2 class="post-title"><img class="blogpost-img" src="{{ post.image_url }}"><a href="{{ post.url }}">{{ post.title }}</a></h2>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>
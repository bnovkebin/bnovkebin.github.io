---
title: "Tags"
permalink: /tags/
layout: tags
author_profile: true
sidebar_main: true
types: posts
---
{% assign posts = site.categories['tags']%}
{% for post in posts %}
  {% include archive-single.html type=page.entries_layout %}
{% endfor %}

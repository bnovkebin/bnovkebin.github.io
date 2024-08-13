---
title: "Categories"
permalink: /categories/
layout: categories
author_profile: true
sidebar_main: true
types: posts
---
{% assign posts = site.categories['categories']%}
{% for post in posts %}
  {% include archive-single.html type=page.entries_layout %}
{% endfor %}

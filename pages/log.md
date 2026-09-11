---
layout: default
title: log
permalink: /log/
---

<div class="blog-page log-page">
  <h1>Log</h1>

  <p class="log-intro"><em>An ongoing chronicle of dispatches, slices, trails, and cultural inputs.</em></p>

  <hr>

  <div class="travelers-log">
  {% for item in site.data.log %}
    <article class="log-entry">
      <header class="log-header">
        <span class="log-date">{{ item.date | date: "%B %d, %Y" }}</span>
        {% if item.location %}<span class="log-location">- {{ item.location }}</span>{% endif %}
        {% if item.tag %}<span class="log-tag">[{{ item.tag }}]</span>{% endif %}
      </header>

      {% if item.title %}
        <h2 class="log-title">{{ item.title }}</h2>
      {% endif %}

      <p class="log-body">{{ item.entry }}</p>
      {% if item.links %}
        <p class="log-links">
          {% for link in item.links %}
            <a href="{{ link.url }}" rel="{{ link.rel | default: 'noopener noreferrer' }}">{{ link.label }}</a>{% unless forloop.last %} · {% endunless %}
          {% endfor %}
        </p>
        <p class="log-disclosure">WorldCat is informational. Bookshop and Amazon links are affiliate links; I may earn a small commission if you buy through them, at no extra cost to you.</p>
      {% endif %}
    </article>
    <hr class="log-divider">
  {% endfor %}
  </div>
</div>
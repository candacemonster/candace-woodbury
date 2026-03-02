---
layout: page
title: essays
permalink: /essays/
---

# Essays

longer reflections on systems, technology, and the human experience.
{: .subtitle}

{% for post in site.categories.essays %}
## [{{ post.title }}]({{ post.url | relative_url }})

{{ post.date | date: "%B %d, %Y" }}

{{ post.excerpt | strip_html | truncatewords: 40 }}

[read more →]({{ post.url | relative_url }})

{% endfor %}

{% if site.categories.essays.size == 0 %}
*No essays yet. Check back soon!*
{: .text-center .text-muted}
{% endif %}

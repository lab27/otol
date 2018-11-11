---
order: 7
include: sections/alternate.html
title: Unterstützerinnen 2018
anchor: unterstuezerinnen

---
{% for partner in site.data.partners %}
- [{{partner.name}}]({{partner.link}}){:target="_blank"}

{% endfor %}
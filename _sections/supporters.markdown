---
order: 7
include: sections/reverse.html
title: Unterstützerinnen 2019/2020
anchor: unterstuezerinnen

---
{% for partner in site.data.partners %}
- [{{partner.name}}]({{partner.link}}){:target="_blank"}

{% endfor %}

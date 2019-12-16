---
order: 7
include: sections/reverse.html
title: Wer uns 2019/2020 unterstützt
anchor: unterstuetzerinnen

---
{% for partner in site.data.partners %}
- [{{partner.name}}]({{partner.link}}){:target="_blank"}

{% endfor %}
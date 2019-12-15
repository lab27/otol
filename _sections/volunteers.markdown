---
order: 4
include: sections/normal.html
title: Wer 2019/2020 mit uns aufforstet
anchor: die-voluntaere

---
{% for person in site.data.volunteers %}
<div class="person">
<div class="portrait">
<img src="{{person.image}}" alt="{{person.name}}">
</div>
<h3>{{person.name}}</h3>
<div class="details">
{% for item in person.details %}
<h4>{{item.title}}</h4>
<p>{{item.info}}</p>
{%endfor%}
</div>
<h4>Motivation</h4>
<p>{{person.motivation}}</p>
</div>
{% endfor %}
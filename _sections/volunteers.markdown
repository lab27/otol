---
order: 2
include: sections/reverse.html
title:  "Die Voluntärin"
---
{% for person in site.data.volunteers %} 
  <div class="person">
    <div class="portrait">
        <img src="assets/img/portraits/{{person.image}}" alt="{{person.name}}">
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
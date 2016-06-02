class <%- className %>Controller {
  public text: string;

  constructor() {
    this.text = 'My brand new component!';
  }
}

<% if (modules === 'inject') { -%>
<% include inject/component.babel %>
<% } else { -%>
<% include modules/component.babel %>
<% } -%>

define([],function(){var a=Backbone.View.extend({events:{},initialize:function(a){this.render(a)},render:function(a){var b=this.templateRow();return this.setElement(b({group:a})),this.$el.show(),this},templateRow:function(){return _.template(['<tr class="" data-id="<%- group.get("id") %>">','<td><a href="/groups/<%= group.get("id") %>"><%= group.get("name") %></a></td>',"<td>description</td>",'<td><%= group.get("total_members") %></td>','<td><%= group.get("total_repos") %></td>',"</tr>"].join(""))}});return{GroupRowView:a}});
//# sourceMappingURL=../../../maps/mvc/groups/group-grouprow-view.js.map
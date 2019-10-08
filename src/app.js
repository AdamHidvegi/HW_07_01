import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue ({
    el: "#app",
    data: {
      styleLow: {
        border: '2px solid green',
        padding: '3px'
      },
      styleHigh: {
        border: '2px solid red',
        padding: '3px'
      },
      styleList: {
        maring: '10px',
        padding: '10px',
        listStyle: 'none'
      },
      todos: [
        {name: "cut the grass", priority: "low"},
        {name: "clean the bathroom", priority: "high"},
        {name: "cook dinner", priority: "high"},
        {name: "shop groceries", priority: "low"},
        {name: "dust the shelves", priority: "high"}
      ],
      newItem: ""
    },
    methods: {
      saveNewItem: function() {
        this.todos.push({
          name: this.newItem,
          priority: 'low',
        });
        this.newItem = "";
      }
      // lowPrio: function() {
      //   this.newItem.priority: 'low'
      // },
      // highPrio: function() {
      //   this.newItem.priority: 'high'
      // }
    }
  });
})

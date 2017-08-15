// function mandatory() {
//   throw new Error('Missing parameter');
// }
// function foo(mustBeProvieded = mandatory()) {
//   // if(!arguments.length)
//   //   throw new Error('必须传参');
//   return mustBeProvieded;
// }
// foo();

// const arr = ['a','b','c'];
// arr.forEach((ele, index) => {
//   console.log(`index=${index}, elem=${ele}`);
// })
// let i = 0;
// for(let ele of arr) {
//   console.log(`index=${i}, elem=${ele}`);
//   i++;
// }

// for(const [index, ele] of arr.entries()) {
//   console.log(`index=${index}, elem=${ele}`);
// }

// for(const newArr of arr.entries()) {
//   console.log(newArr);
// }
// let a = 2, b = 3;
// [a,b] = [b,a];
// console.log(a,b);

//定义组件
const weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const month = ["January", "February", "Mach", "April",
"May", "June", "July", "August", "September",
"October", "November", "December"]
let Header = Vue.extend({
  template: '#todo-header',
  data: function() {
    return {
      date: '',
      weekDay: '',
      month: '',
      year: ''
    }
  },
  created: function() {
    let d = new Date();
    this.date = d.getDate();
    this.weekDay = weekday[d.getDay()];
    this.month = month[d.getMonth()];
    this.year = d.getFullYear();
  }
});
let Report = Vue.extend({
  template: '#todo-report',
  data () {
    return {
      taskDone: 1,
      taskTotal: 10
    }
  }
});
let TodoItem = Vue.extend({
  template: '#todo-item',
  data () {

  }
});
let TodoList = Vue.extend({
  template: '#todo-list',
  data() {
    return {
      collection: [
        1,2,3,4,5,6,7
      ]
    }
  },
  components: {
    'todo-item': TodoItem
  }
});
let TodoFooter = Vue.extend({
  template: '#todo-footer',
  data () {

  }
});
//组件拼装
let todo = new Vue({
  el: '#app',
  components: {
    'todo-header': Header,
    'todo-report': Report,
    'todo-list': TodoList,
    'todo-footer': TodoFooter
  }
})

var app = new Vue({
  el:"#app",
  data:{
    message:"hello Vue.js,这是第一个vue"
  }
})
var app2 = new Vue({
  el:"#app_2",
  data:{
    message:"页面加载于"+ new Date().toLocaleString()
  }
})
var app3 = new Vue({
  el:"#app_3",
  data:{
    seen:true
  }
})
new Vue({
  el:"#transition",
  data:{
    show:true
  }
})
new Vue({
  el:"#example-1",
  data:{
    show:"true "
  }
})
var obj={
  a:9
};
// Object.freeze(obj)
var example2 = new Vue({
  el:"#example-2",
  data: obj
})
console.log(example2.a);

example2.$watch('a', function (newValue, oldValue) {
  // 这个回调将在 `vm.a` 改变后调用
  console.log(newValue, oldValue);
})
new Vue({
  data: {
    a: 222
  },
  created: function () {
    // `this` 指向 vm 实例
    console.log('a is: ' + this.a)
  }
})
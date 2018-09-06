<template>
  <div id="app">
   <h1 v-text="title"></h1>
   <p v-html="info"></p>
   <ul>
<li v-for="item in items" >
  <input type="checkbox" v-on:click="addClass">{{item.label}}</li>
   </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data:function(){
    return{
      title:"To Do List",
      info:"<span>To Be Better</span>",
      items:[
        {
          label:"coding",
          isFinished:false
        },
        {
           label:"walking",
          isFinished:true
        }
      ],
      
    }
  },
  methods:{
    addClass:function(){
      console.log(items.isFinished)
    },
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.isFinished{
  color:#aeaeae;
}
</style>

<template>
<div id="container">
  <cognoteHeader></cognoteHeader>

<p>Type your notes below, and hit "Submit" to make a quiz!!</p>

<input id="name" type="text" placeholder="Enter your name"><br><br>

  <textarea id="notes" type="text" >

  </textarea><br>
    <button @click="splitData()">Submit</button>




    </div>
</template>

<style>
button {
        background: #4D7498;
        border: #48466D solid 3px;
        color: white;
        padding: 10px 30px 10px 30px ;
    }
</style>

<style scoped>



#container {
  font-family: sans-serif;
  position: absolute;
  left: 0px;
  top: 0px;
  height: 100%;
  width: 100%;
  text-align: center;
  justify-content: center;
  flex-flow: column;
  background: #46CDCF;
}
#name {
  background-color: #F5FEFF;
  width:80vw;
  height:25px;
  outline: none;
  border: none;
}
#notes {
  height: 20vh;
  width: 80vw;
}
</style>

<script>

import cognoteHeader from './CognoteHeader.vue'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }

  },

  components: {
      cognoteHeader
  },

methods: {
     // function is invoked when a list is parsed (signified by '-' and 'TAB')
     splitList: function(field, index){
       console.log("splitList invoked")
       //appending field to previous answer
       this.root.questions[index].answer.push("\n" + field);
     }

     splitData: function() {
       console.log("hello world");
       var s = document.getElementById('notes').value;
       console.log(s);
       var fields = s.split('\n');
       var counter = 0;
       var holder;
       //
       while (counter < fields.length){
         console.log(fields[counter]);
         //checks to see if field element is a list
         if(fields[counter][0] == '-' || fields[counter][0] == '\t'){
           splitList(fields[counter], counter);
         }
         counter++;
       }
     }
   }
 }
   //this.root.questions[index]
</script>

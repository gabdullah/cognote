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
     // Invoked when a list is parsed (signified by '-' and 'TAB')
     parseList: function(field, pos){
       console.log("parseList invoked. Container index: " + pos);
       // Remove list signifier character(s)
       var temp = field.substring(1);
       temp.trim();
       // Append field information to previous concept
       this.$root.questions[pos].detail.push(temp);
       // TEST OUTPUT
       //var test = this.$root.questions[pos].detail;
       //console.log("parseList push: " + test);
     },

     parseConcept: function(field, pos, type, splitter) {
       // Invoked to parse out concept information
       console.log("parseConcept invoked");
       this.$root.questions[pos].type = type;
       this.$root.questions[pos].word = field.split(splitter)[0];
       this.$root.questions[pos].detail.push(field.split(splitter)[1]);
       /*var temp1 = this.$root.questions[pos].type;
       var temp2 = this.$root.questions[pos].word;
       var temp3 = this.$root.questions[pos].detail.pop();
       console.log(temp1 + '|' + temp2 + '|' + temp3);*/
     },

     splitData: function() {
       console.log("splitData");
       // Read in text from main text input
       var s = document.getElementById('notes').value;
       console.log(s);
       var fields = s.split('\n');  // Notes broken by line
       var counter = 0;             // Index for fields
       var holder;
       var containerPos = 0;        // Position in question array

       // Step through source text statements
       while (counter < fields.length){
         console.log("field text: " + fields[counter]);
         // Checks to see if field element is a list
         if(fields[counter][0] == '-' || fields[counter][0] == '\t'){
           // Add field element to previous concept
           this.parseList(fields[counter], containerPos);
         }
         else if(fields[counter].match(" - ")){ 
          this.parseConcept(fields[counter], containerPos, "simple", '-');
         }
         else if(fields[counter].match(':')){
          this.parseConcept(fields[counter], containerPos, "simple", ':');
         }
         else if(fields[counter].match("->")){
          this.parseConcept(fields[counter], containerPos, "simple", "->");
         }
          else {
           // Note information is for a new key concept
           ++containerPos;

           //console.log("Concept parse here");
         }

        // this.root.questions[index]
         counter++;
       }
     }
   }
 }
</script>

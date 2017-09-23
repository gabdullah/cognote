<template>
<div id="container">
  <div id="header">
    <h1>COGNOTE</h1>
    <h3 id="subtitle">AN EASIER WAY TO STUDY</h3>
  </div>

<p>Type your notes below, and hit "Submit" to make a quiz!!</p>

<input id="name" type="text" placeholder="Enter your name"><br><br>

  <textarea id="notes" type="text" >

  </textarea><br>
    <button @submit="splitData()">Submit</button>




    </div>
</template>

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


#header {
  width: 100%;
  margin-top: 0px;
  padding: 0px;
  height: 140px;
  background: #48466D;
  color: white;
  position: relative;
}
h1 {
  position: absolute;
  bottom: 20px;
  left: 3px;
  font-size: 50px;
  font-style: italic;
  margin: 0px;
}

#subtitle {
  position: absolute;
  bottom: -5px;
  font-style: italic;
  left: 10px;
  font-size: 12px;
}
</style>

<script>

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }

  },
  methods: {
 +    splitData: function() {
 +      console.log("hello world");
 +      var s = document.getElementById('notes').value;
 +      console.log(s);
 +    var fields = s.split('\n');
 +    var perosn1 = fields[0];
 +    console.log(person1);
 +    var perosn2 = fields[1];
 +    console.log(person2);
 +    }
 +  }


}
</script>

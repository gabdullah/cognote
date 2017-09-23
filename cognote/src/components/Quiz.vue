<template>
<div id="container">
  <div id="header">
    <h1>COGNOTE</h1>
    <h3 id="subtitle">AN EASIER WAY TO STUDY</h3>
  </div>

<p>Quiz Time!</p>
  <div id="flashContainer">
    <div class="flashcard front" 
         v-bind:class="{ flipUp: showFront,
                         flipDown: !showFront}">
        
    Front
    </div>
    
    <div class="flashcard back" 
         v-bind:class="{ flipUp: !showFront,
                         flipDown: showFront}">
        
    Back
    </div>
  </div>
    <button @click="flipCard()">Flip</button>
  
    
    
    
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
    
    .flashcard {
        width: 60vw;
        height: 30vw;
        
        color: white;
        position: absolute;
    }
    
    .front {
        background: #3D84A8;
    }
    .back {
        background: #4D7498
    }
    
    #flashContainer {
        width: 60vw;
        height: 30vw;
        perspective: 500px;
        margin: auto;
    }

    .flipUp {
        transform-style: preserve-3d;
        animation: flipUp 1s linear;
    }
    .flipDown {
        transform-style: preserve-3d;
        animation: flipDown .5s linear;
        transform: rotateX(-90deg);
    }
    
    @keyframes flipUp {
        0% {
            transform: rotateX(90deg);
        } 50% {
            transform: rotateX(90deg);
        } 100% {
            transform: rotateX(0deg);
        }
    }
    @keyframes flipDown {
        0% {
            transform: rotateX(0deg);
        } 100% {
            transform: rotateX(-90deg);
        }
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
  name: 'quiz',
  data () {
    return {
      questions: {},
      showFront: true,
      showBack: false,
    }
  },
    
  methods: {
      flipCard: function() {
          this.showFront = !this.showFront;
      }
  }
}

</script>
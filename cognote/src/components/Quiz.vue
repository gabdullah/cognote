<template>
<div id="container">
  <cognoteHeader></cognoteHeader>

<p>Quiz Time!</p>
    <p>You're on question {{ questionIndex }} of 
        {{ $root.questions.length }}</p>
  <div id="flashContainer">
    <div class="flashcard front" 
         v-bind:class="{ flipUp: showFront,
                         flipDown: !showFront
                       }">
        
    <p class="cardText">
        {{ $root.questions[questionIndex - 1].word }}
        </p>
    </div>
    
    <div class="flashcard back" 
         v-bind:class="{ flipUp: !showFront,
                         flipDown: showFront,
                       hidden: !loaded}">
        
    <p class="cardText">
        {{$root.questions[questionIndex - 1].answer}}</p>
    </div>
  </div>
    <button @click="flipCard()">Flip</button>
    
    <div id="finish" v-if="flipped">
        <button @click="next(false)">I got it right! :)</button>
        <button @click="next(true)">I got it wrong :(</button>
    </div>
  
    
    
    
    </div>
</template>

<style scoped>
    
    button {
        background: #4D7498;
        border: #48466D solid 3px;
        color: white;
        padding: 10px 30px 10px 30px ;
        margin: 20px;
        outline: none;
    }
    
    button:hover {
        background: #3D84A8;
        border: #4D7498 solid 3px;
    }
    
    #finish {
        display: flex;
        align-self: center;
        justify-content: center;
    }
    
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
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
    }
    
    .front {
        background: #3D84A8;
        z-index: 1000;
    }
    .back {
        background: #ABEDD8;
        color: #4D7498;
    }
    
    .hidden {
        opacity: 0;
    }
    
    #flashContainer {
        width: 60vw;
        height: 30vw;
        perspective: 500px;
        margin: auto;
    }

    .flipUp {
        transform-style: preserve-3d;
        animation: flipUp .6s linear;
    }
    .flipDown {
        transform-style: preserve-3d;
        animation: flipDown .3s linear;
        transform: rotateX(-90deg);
    }
    
    .cardText {
        padding: 20px;
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
import cognoteHeader from './CognoteHeader.vue'

    
export default {
  name: 'quiz',
  data () {
    return {
      questionIndex: 1,
      showFront: true,
      loaded: false,
      flipped: false
    }
  },
    
  components:{
      cognoteHeader
  },
    
  mounted: function() {
      var vm = this;
      setTimeout(function(){ 
          vm.loaded = true;
      }, 600);
  },
    
  methods: {
      flipCard: function() {
          this.showFront = !this.showFront;
          this.flipped = true;
      },
      next: function(failed) {
          this.flipped = false;
          this.loaded = false;
          this.showFront = true;
          
          var questionPoint = this.$root.questions[this.questionIndex - 1]
          
          if (failed) {
              questionPoint.status = 'Incorrect';
          } else {
              if (questionPoint.status == 'incorrect' || questionPoint.status == 'none') {
                  this.$root.correct++;
              }
              questionPoint.status = 'Correct';
              
          }
          
          if (this.questionIndex < this.$root.questions.length) {
          
            this.questionIndex++;
            var vm = this;
            setTimeout(function(){ 
                vm.loaded = true;
            }, 600);
          }
          else {
              this.$router.push('/finish');
          }
      }
  }
}

</script>
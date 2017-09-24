<template>
    <main>
<div id="container" v-if="answers">
  <cognoteHeader></cognoteHeader>
    <link href="https://afeld.github.io/emoji-css/emoji.css" rel="stylesheet">

    <p>Results: {{ $root.correct }} / {{ $root.questions.length }}</p>
    <p v-for="index in $root.questions[0].max">
    Question {{index}} : {{ $root.questions[index - 1].status }}
    
    </p>
    <vue-easy-pie-chart 
                        :bar-color="'#00FF00'"
                        :track-color="'#FF3333'"
                        :line-width="6"
                        :percent="perc"
                        ></vue-easy-pie-chart>
    
    
    </div>
<div id="container" v-if="!answers">
    <cognoteHeader></cognoteHeader>
    <p>No data found :(</p>
    <router-link to="/" class="routerLink">
    
    <p style="color:black;">Click here to go home!</p>
          </router-link>
    </div>
        </main>
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
  background: #ABEDD8;
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
        background: #4D7498
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
import VueEasyPieChart from 'vue-easy-pie-chart'
import 'vue-easy-pie-chart/dist/vue-easy-pie-chart.css'
import cognoteHeader from './CognoteHeader.vue'

    
export default {
  name: 'quiz',
  data () {
    return {
      questions: {},
      showFront: true,
      showBack: false,
      loaded: false,
      answers: true,
        perc: 0
    }
  },
    
  calculated: {
      percentage: function () {
          var perc = Math.floor((this.$root.correct / this.$root.questions[0].max) * 100);
          console.log(perc);
          return perc;
      }
  },
    
  components:{
      cognoteHeader,
      VueEasyPieChart
  },
    
  mounted: function() {
      if (this.$root.questions[0].status == 'none') {
          this.answers = false;
      }
      var vm = this;
      setTimeout(function(){ 
          vm.loaded = true;
      }, 2000);
      
      this.perc = Math.floor((this.$root.correct / this.$root.questions[0].max) * 100);
      console.log(this.perc);
  },
    
  methods: {
      flipCard: function() {
          this.showFront = !this.showFront;
      }
  }
}

</script>
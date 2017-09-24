<template>
<div id="container">
  <cognoteHeader></cognoteHeader>

<p>Type your notes below, and hit "Submit" to make a quiz!!</p>

<!--<input id="name" type="text" placeholder="Enter your name"><br><br>-->

  <textarea id="notes" type="text" v-model="notes">

  </textarea><br>
    <button @click="splitData()">Submit</button>
    <br><br>
    <button @click="sampleNotes()">Click here to populate w sample notes</button>




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
  font-size: 14px;
}
</style>

<script>
import cognoteHeader from './CognoteHeader.vue'
export default {
  name: 'hello',
  data () {
    return {
      notes: ''
    }
  },
  components: {
      cognoteHeader
  },
  methods: {
      // Invoked when a list is parsed (signified by '-' and 'TAB')
      parseList: function(field, pos){
        var question = this.$root.questions[pos];
          
        console.log("parseList invoked. Container index: " + pos);
        // Remove list signifier character(s)
        var temp = field.substring(1);
        temp.trim();
        // Append field information to previous concept
        question.type = "list";

        // if(question.detail.length == 0){
          // this.$root.questions[pos].word = field[counter-1];
        // }
//        console.log("||" + this.$root.questions[pos].word + "||");
        question.detail.push(temp);
        // TEST OUTPUT
        //var test = this.$root.questions[pos].detail;
        //console.log(this.$root.questions[pos].detail.length);
      },

      parseConcept: function(field, noteType, splitter) {
          
        var question = 	{
          'type': noteType,
          'word': '',
          'detail': [],
          'status': 'none'
        }
          
        // Invoked to parse out concept information
        console.log("parseConcept invoked; splitter: " + splitter);
        // Create a header word type
        if ( splitter == "" ) {
          console.log("Header called");
          question.word = field;
        } else {
          // Parse definition into word and meaning
          //field.trim();
          var fieldHalves = field.split(splitter);
          console.log( "fieldHalves break: " + fieldHalves );
          question.word = fieldHalves[0];
          // Check for existence of meaning

          if (fieldHalves[1] != '') {
            console.log("Passed\n");
            question.detail.push(fieldHalves[1]);
          }
        }
          
        this.$root.questions.push(question);
        console.log("parceConcept word: " + question.word );
        if ( splitter != "" ) {
          console.log( "parseConcept detail: " + question.detail );
        }
      },

      parseQuestion: function( field ) {
        // Questions are notes user leaves for themselves or rhetorical
        // Information is structured with the question as concept and answer as (simple) detail
        var qAndA = field.split("?");
        var question = 	{
          'type': 'Question',
          'word': '',
          'detail': [],
          'status': 'none'
        }

        question.word = qAndA[0] + "?";
        question.detail.push( qAndA[1] );

        this.$root.questions.push( question );

      },

      parseDate: function( field, date ) {
        // Date notes register a key date as the word, and the full event as the detail
        var question = 	{
          'type': 'Date',
          'word': date,
          'detail': [
            field
          ],
          'status': 'none'
        }
        // var date = field.substring(dateStart, dateStart + 3);
        this.$root.questions.push( question );
      },

      splitData: function() {
        this.$root.questions = [];
          
        console.log("splitData");
        this.$root.questions = [];
        // Read in text from main text input
        
        var s = this.notes;
        console.log(s);
        var fields = s.split('\n');  // Notes broken by line
        var counter = 0;             // Index for fields
        var containerPos = 0;        // Position in question array
        // Step through source text statements
        while (counter < fields.length){
          console.log("field text: " + fields[counter] + "; containerpos: " + containerPos);
          // Checks to see if field element is a list
          if(fields[counter][0] == '-' || fields[counter][0] == '\t'){
            // Add field element to previous concept
            this.parseList(fields[counter], containerPos-1);
          } else {
            // Concept notes
            // var year = fields[counter].replace( /^\D+/g, '');
            // year = year.replace( /g+/^\D, '');
            console.log( "year: " + year );
            // var year = fields[counter].search(/[1000 - 2050]/);
            // if (year != -1 && !isNaN(parseInt(fields[counter][year + 3] ) ) ) {
            if ( false ) {
            // if ( year != -1 ) {
              // Create a date note
              console.log("Calling parseDate()");
              // this.parseDate( fields[counter], fields[counter].substring( year, year + 3 ) );
            // } else if ( false ) {
              // Question note
            } else if ( fields[counter].match("\\?") ) {
              console.log("question line");
              this.parseQuestion( fields[counter] );
            } else if (fields[counter].match(" - ")){
              console.log("hyphen signifier");
              this.parseConcept(fields[counter], "simple", '-');
            } else if(fields[counter].match(':')){
              console.log("colon signifier");
              this.parseConcept(fields[counter], "simple", ':');
            } else if(fields[counter].match("->")){
              console.log("arrow signifier");
              this.parseConcept(fields[counter], "simple", "->");
            } else {
              console.log("heading");
              this.parseConcept(fields[counter], "header", "" );
            }
            // Incrementing question data structure index
            ++containerPos;
          }
          // Move fields index along
          counter++;
        }
      this.$router.push('/quiz');
    },
      
    sampleNotes: function() {
        this.notes = "Mitochondria: The Powerhouse of a cell\nCitoplasm: the gooey stuff on the inside, where everything floats around\n- Gooey\n- Stuff floats around\nNucleus:\n- Has DNA\n- Source info for protiens\nCells are cool\nPlant cells -> made of cellulose\nAnimal cells\n- Squishy\nThe war of 1812 is donk\nBack to cells\n\tVery cool\n\tExtremely cool\nMitochondria - Powerhouse\n- Invented in 2002\n- Powers the Cell";
    }
  }
}
</script>

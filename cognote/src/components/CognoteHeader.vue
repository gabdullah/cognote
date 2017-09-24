<template>
<div id="header">
      <router-link to="/" class="routerLink">
    <h1>CogNote</h1>
    <h3 id="subtitle">A BETTER WAY TO STUDY</h3>
          </router-link>
  </div>
</template>

<style>
    .routerLink {
        color: white;
        text-decoration: none;
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
  padding-bottom: 30px;
    transition-duration: 3s;
}
    
    h1:hover {
        letter-spacing: 20px;
    }

#subtitle {
  position: absolute;
  bottom: -5px;
  font-style: italic;
  left: 10px;
  font-size: 12px;
  padding-bottom: 25px;
    transition-duration: 3s;
}
    #subtitle:hover {
        letter-spacing: 20px;
    }
    

</style>
<template>
  <div>
    <v-img src="../reserve/wh3.jpg" class="kenburns-top">
    <v-layout wrap pa-12 justify-center >
      
      <v-flex xs5  class="slide-in-left">
        <span class="size">
          In this example, the words array contains four separate words. The
          v-for directive is used to loop over the words array and insert each
          word into a li element. The key attribute is used to provide a unique
          identifier for each iteration of the loop, which is important for
          performance reasons. The value of the current word is displayed within
          the li element using curly brace syntax.
        </span>
      </v-flex>
      <v-fex xs5 class="imgsize slide-in-right" c>
        <v-img src="../reserve/wh2.jpg"></v-img>
      </v-fex>
     
    </v-layout>
    </v-img>
  </div>
</template>
<style scoped>
.size {
  font-size: 30px;
}
.imgsize {
  height: 30%;
  width : 30%;
  
}
.slide-in-left {
	animation: slide-in-left 1000ms cubic-bezier(0.250, 0.460, 0.450, 0.940) ;
}
@keyframes slide-in-left {
  0% {
    transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.slide-in-right {
	animation: slide-in-right 1000ms cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
@keyframes slide-in-right {
  0% {
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}


.kenburns-top {
	animation: kenburns-top 30s linear infinite alternate-reverse ;
}
@keyframes kenburns-top {
  0% {
    transform: scale(1) translateY(0);
    transform-origin: 50% 16%;
  }
  100% {
    transform: scale(1.25) translateY(-15px);
    transform-origin: top;
  }
}



</style>
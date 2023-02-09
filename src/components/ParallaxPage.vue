<template>
  <div id="app">
    <atropos >
      
      <img src="../assets/cylinder-purple-stage-background-pedestal-podium-product-display-show-product-purple-background-3d-rendering.jpg" data-atropos-offset="-50" />
        <!--
        Element with no offset will not move
        -->
        <img src="../assets/18209685_jfl1_rvy9_210708-removebg-preview.png" data-atropos-offset="0" />
        <!--
        Element with positive offset will move in same direction,
        making it appear in front of the scene
        -->
        <img src="../assets/text1.png" data-atropos-offset="50" />
      
    </atropos>
  </div>
</template>
<script>
import Atropos from "atropos/vue";

export default {
  components: {
    Atropos,
  },
  setup() {
    const onEnter = () => console.log("Enter");
    const onLeave = () => console.log("Leave");
    const onRotate = (x, y) => console.log("Rotate", x, y);
    return {
      onEnter,
      onLeave,
      onRotate,
    };
  },
};
</script>
<style>
.my-atropos {
  width: ;
  height: 1080px;
}
</style>
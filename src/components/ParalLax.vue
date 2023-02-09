<template>
  <div class="parallax-container">
    <div class="parallax-layer" 
      :style="{ transform: 'translate3d(0, ' + (parallax * 0.3) + '%, 0)' }"></div>
    <div class="parallax-layer" 
      :style="{ transform: 'translate3d(0, ' + (parallax * 0.6) + '%, 0)' }"></div>
    <div class="parallax-layer" 
      :style="{ transform: 'translate3d(0, ' + (parallax * 0.9) + '%, 0)' }"></div>

    <div class="parallax-content">
      <h2>{{ headline }}</h2>
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      parallax: 0,
      headline: 'Welcome to the Parallax Animation',
      content: 'Scroll up and down to see the effect'
    };
  },
  mounted() {
    window.addEventListener('scroll', this.updateParallax);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.updateParallax);
  },
  methods: {
    updateParallax() {
      this.parallax = window.pageYOffset / -10;
    }
  }
};
</script>

<style>
.parallax-container {
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.parallax-layer {
  background-image: url('https://picsum.photos/id/1015/800/600');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  transition: transform 0.3s ease-out;
}

.parallax-content {
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  text-align: center;
  z-index: 1;
}
</style>

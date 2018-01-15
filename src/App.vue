<template>
  <div id="app">
    <div class="banner-body">
     
      <keep-alive>
        <transition name="fade" mode="out-in">
        <router-view></router-view>
        </transition>
      </keep-alive>
    
    </div>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import FooterComponent from './components/footer.vue'
export default {
  name: 'app',
  components: {
		FooterComponent
	},
}
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}

.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}



</style>



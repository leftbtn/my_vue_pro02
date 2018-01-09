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



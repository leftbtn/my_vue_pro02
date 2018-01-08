<template>
  <div id="app">
    <div class="banner-body">
     
      <keep-alive>
        <transition name="fade" mode="out-in">
        <router-view></router-view>
        </transition>
      </keep-alive>
    
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>



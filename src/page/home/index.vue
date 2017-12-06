<template>
<div class="container">

<div class="banner-body-content"> 

<LeftNavOneComponent></LeftNavOneComponent>
<CarouselComponent></CarouselComponent>
<div class="clearfix"> </div>
<LeftNavTwoComponent></LeftNavTwoComponent>
<NewsHComponent></NewsHComponent>
<div class="clearfix"> </div>

</div>

</div>
</template>

<script>
import LeftNavOneComponent from '../../components/leftNavOne.vue';
import LeftNavTwoComponent from '../../components/leftNavTwo.vue';
import CarouselComponent from '../../components/carousel.vue';
import NewsHComponent from '../../components/newsH.vue';
import FooterComponent from '../../components/footer.vue';
export default{
     components: {
    LeftNavOneComponent,
    LeftNavTwoComponent,
    CarouselComponent,
    NewsHComponent,
    FooterComponent
  },

}






</script>
<template>
<div class="container">

<div class="banner-body-content"> 

<LeftNavOneComponent></LeftNavOneComponent>
<RightNavOneComponent></RightNavOneComponent>
<div class="clearfix"> </div>
<LeftNavTwoComponent></LeftNavTwoComponent>
<RightNavTwoComponent></RightNavTwoComponent>
<div class="clearfix"> </div>

</div>

</div>
</template>

<script>
import LeftNavOneComponent from '../../components/leftNavOne.vue';
import LeftNavTwoComponent from '../../components/leftNavTwo.vue';
import RightNavOneComponent from '../../components/rightNavOne.vue';
import RightNavTwoComponent from '../../components/rightNavTwo.vue';
import FooterComponent from '../../components/footer.vue';
export default{
     components: {
    LeftNavOneComponent,
    LeftNavTwoComponent,
    RightNavOneComponent,
    RightNavTwoComponent,
    FooterComponent
  },

}






</script>
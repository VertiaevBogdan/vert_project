<template>
  <MainHeader/>
  <MainAbout/>
  <EducationPreview/>
</template>

<script>
import MainHeader from '@/components/main-page/header/MainHeader.vue'
import MainAbout from '@/components/main-page/about/MainAbout.vue'
import EducationPreview from '@/components/main-page/education-preview/MainPreview.vue'


export default {
  components: {
    MainHeader,
    MainAbout,
    EducationPreview,
  },
  setup() {

  }
}
</script>


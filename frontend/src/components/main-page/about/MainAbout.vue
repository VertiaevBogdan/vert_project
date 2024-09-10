<template>
  <div class="wrapper">
    <section class="about_content">
      <h3 class="primary-color bold mb-2-em">About Us</h3>
      <h1 class="about_main_title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, quaerat.</h1>
      <p class="mb-2-em">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, aut debitis est explicabo itaque molestias necessitatibus optio quasi quidem sunt.</p>
      <div>
        <v-btn
        class="nav_link--is-signup mr-1-em"
        text="Sign Up"
        text-color="white"
        size="large"
      />
      <v-btn
        class="nav_link--light"
        text="Learn More"
        size="large"
        variant="outlined"
      />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  setup() {

  }
}
</script>

<style lang="scss">
@import "@/assets/scss/global.scss";
.nav_link {
  color: $main-text-color;
  border-color: $primary-color;
}

.nav_link--is-signup {
  color: $main-text-color !important;
}
</style>

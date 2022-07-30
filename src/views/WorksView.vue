<template>
  <div>
    <div class="d-flex justify-content-center" id="title-margin">
      <img src="@/assets/images/works.jpg" alt="works-image" id="works-image" />
    </div>

    <h2 class="text-center">
      <span class="red-title-hover">works.</span>
    </h2>

    <p class="text-center">to be added...</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#works-image {
  height: 10em;
}

#title-margin {
  margin-top: 2em;
  margin-bottom: 1em;
}

@media (min-width: 1366px) and (min-height: 768px) {
  #works-image {
    height: 20em;
  }
  #title-margin {
    margin-top: 3em;
  }
}
</style>

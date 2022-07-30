<template>
  <div>
    <div class="d-flex justify-content-center" id="title-margin">
      <img
        src="@/assets/images/404.jpg"
        alt="not-found-image"
        id="not-found-image"
      />
    </div>

    <h2 class="text-center">
      <span class="swap-title-hover">
        <span class="text-not">not</span> <span class="text-found">found.</span>
      </span>
    </h2>

    <p class="text-center">
      something's <span class="red-text">wrong</span>, please
      <a href="/">return to the home page.</a>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#not-found-image {
  height: 10em;
}

#title-margin {
  margin-top: 2em;
  margin-bottom: 1em;
}

@media (min-width: 1366px) and (min-height: 768px) {
  #not-found-image {
    height: 20em;
  }
  #title-margin {
    margin-top: 3em;
  }
}

.swap-title-hover:hover .text-not {
  color: #c0caf5;
  transition: all ease 0.2s;
}

.swap-title-hover:hover .text-found {
  color: red;
  transition: all ease 0.2s;
}

.swap-title-hover .text-found {
  color: #c0caf5;
  transition: all ease 0.2s;
}

.swap-title-hover .text-not {
  color: red;
  transition: all ease 0.2s;
}
</style>

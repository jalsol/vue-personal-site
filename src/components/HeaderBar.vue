<template>
  <header>
    <div class="d-flex justify-content-around fixed-top" id="header-bar">
      <p class="text-center">
        <router-link class="nav-item nav-link" to="/">home</router-link>
      </p>

      <p class="text-center">
        <!-- <a class="nav-item nav-link" href="/about">about</a> -->
        <router-link class="nav-item nav-link" to="/about">about</router-link>
      </p>

      <p class="text-center">
        <router-link class="nav-item nav-link" to="/works">works</router-link>
      </p>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
@media (min-width: 1200px) {
  #header-bar {
    padding-right: 30em;
    padding-left: 30em;
  }
}

@media (min-width: 1024px) and (max-width: 1199px) {
  #header-bar {
    padding-right: 20em;
    padding-left: 20em;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  #header-bar {
    padding-right: 15em;
    padding-left: 15em;
  }
}

@media (min-width: 300px) and (max-width: 767px) {
  #header-bar {
    padding-right: 5em;
    padding-left: 5em;
  }
}

#header-bar {
  padding-top: 1em;
  border-bottom: 1px solid #333333;
  background-color: #1a1b26;
}

a:hover {
  color: red;
}
</style>

<template>
  <header>
    <div class="d-flex justify-content-around fixed-top" id="header-bar">
      <p class="text-center">
        <router-link class="nav-item nav-link" to="/">home</router-link>
      </p>

      <p class="text-center">
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
@media (min-width: 1281px) {
  #header-bar {
    padding-right: 25em;
    padding-left: 25em;
  }
}

@media (min-width: 1025px) and (max-width: 1280px) {
  #header-bar {
    padding-right: 20em;
    padding-left: 20em;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
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
  padding-top: 0.75em;
  border-bottom: 1px solid #333333;
  background-color: #1a1b26;
}

@media (min-width: 1024px) {
  * {
    font-size: 22px;
  }
}

a:hover {
  color: red;
}
</style>

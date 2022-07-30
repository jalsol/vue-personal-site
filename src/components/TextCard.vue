<template>
  <div class="card">
    <div class="card-body text-justify">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  background-color: #24283b;
  margin-top: 2em;
  margin-bottom: 2em;
}

@media (min-width: 1200px) {
  .card {
    margin-right: 20em;
    margin-left: 20em;
  }
}

@media (min-width: 800px) and (max-width: 1199px) {
  .card {
    margin-right: 8em;
    margin-left: 8em;
  }
}

@media (max-width: 799px) {
  .card {
    margin-right: 3em;
    margin-left: 3em;
  }
}

.text-justify {
  text-align: justify;
}
</style>

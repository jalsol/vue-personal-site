<template>
  <div>
    <div class="d-flex justify-content-center" id="title-margin">
      <picture>
        <source srcset="@/assets/images/wpp.webp" type="image/webp" />
        <source srcset="@/assets/images/wpp.png" type="image/png" />
        <img src="@/assets/images/wpp.png" alt="wpp" id="wpp" />
      </picture>
    </div>

    <h2 class="text-center">
      <span class="red-title-hover">about.</span>
    </h2>

    <TextCard>
      An <span class="red-text">abnormal</span> human being, with an
      <span class="red-text">abnormal</span> identity, mind and soul. Has a
      <span class="red-text">strange</span>
      passion for programming, music and a bit for motorsports. Earned
      <span class="red-text">bizarre</span> prizes, paid
      <span class="red-text">bizarre</span> prices.

      <br />
      <br />

      <b><i> - to shine (even) brighter. - </i></b>
    </TextCard>
  </div>
</template>

<script>
import TextCard from "@/components/TextCard.vue";
export default {
  components: { TextCard },
};
</script>

<style scoped>
#wpp {
  height: 10em;
}

#title-margin {
  margin-top: 2em;
  margin-bottom: 1em;
}

@media (min-width: 1366px) and (min-height: 768px) {
  #wpp {
    height: 20em;
  }
  #title-margin {
    margin-top: 3em;
  }
}
</style>

<template>
  <div>
    <div class="d-flex justify-content-center" id="title-margin">
      <img src="@/assets/images/wpp.png" alt="wpp" id="wpp" />
    </div>

    <h3 class="text-center">
      <span class="red-title-hover">about.</span>
    </h3>

    <TextCard>
      An <span class="red-text">abnormal</span> human being, with an
      <span class="red-text">abnormal</span> identity, mind and soul. Has a
      <span class="red-text">strange</span>
      passion for programming, music and a bit for motorsports. Earned
      <span class="red-text">bizzare</span> prizes, paid
      <span class="red-text">bizzare</span> prices.

      <br />
      <br />

      <b><i> -- to shine (even) brighter. -- </i></b>
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
</style>

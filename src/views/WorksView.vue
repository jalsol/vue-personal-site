<template>
  <div>
    <div class="d-flex justify-content-center" id="title-margin">
      <img src="@/assets/images/works.jpg" alt="works-image" id="works-image" />
    </div>

    <h2 class="text-center">
      <span class="red-title-hover">works.</span>
    </h2>

    <TextCard>
      <img
        src="@/assets/images/works/ViSEF-2022.png"
        alt="ViSEF-2022"
        class="works-image rounded mx-auto d-block"
      />

      <h6>
        <b>Title:</b> Detecting common diseases on coffee trees via images of
        leaves
      </h6>
      <ul>
        <li>
          <b>Tech stack:</b> Python (AI & HTTP server), Flutter (Mobile client)
        </li>
        <li>
          <b>Description:</b> Send a leaf image of an infected coffee tree and
          receive the predicted disease
        </li>
        <li>
          <b>Award:</b> Third Prize in the field of Embedded Systems at ViSEF
          2021 - 2022
        </li>
        <li>
          <b>Source: </b>
          <a href="https://github.com/jalsol/ViSEF-2022" target="_blank"
            >https://github.com/jalsol/ViSEF-2022</a
          >
        </li>
      </ul>
    </TextCard>

    <TextCard>
      <img
        src="@/assets/images/works/ViSEF-2020.png"
        alt="ViSEF-2020"
        class="works-image rounded mx-auto d-block"
      />
      <h6><b>Title:</b> Recommender System based on Emotion Recognition</h6>
      <ul>
        <li>
          <b>Tech stack:</b> Python (AI), PHP (HTTP server), Bootstrap 4 (UI),
          jQuery (asynchronous event handling)
        </li>
        <li>
          <b>Description:</b> Recognize customers' emotions to rate products and
          recommend similar items
        </li>
        <li>
          <b>Award:</b> Participation in the field of Systems Software at ViSEF
          2019 - 2020
        </li>
        <li>
          <b>Source: </b>
          <a href="https://github.com/jalsol/ViSEF-2020" target="_blank"
            >https://github.com/jalsol/ViSEF-2020</a
          >
          (front-end and bridge only)
        </li>
      </ul>
    </TextCard>

    <TextCard>
      <img
        src="@/assets/images/works/web-portfolio.png"
        alt="web-portfolio"
        class="works-image rounded mx-auto d-block"
      />
      <h6><b>Title:</b> Web portfolio in Vue 3</h6>
      <ul>
        <li><b>Tech stack:</b> Vue 3, Bootstrap 5</li>
        <li><b>Description:</b> This website itself</li>
        <li>
          <b>Source: </b>
          <a href="https://github.com/jalsol/vue-personal-site" target="_blank"
            >https://github.com/jalsol/vue-personal-site</a
          >
        </li>
      </ul>
    </TextCard>

    <TextCard>
      <img
        src="@/assets/images/works/colorole-pp.png"
        alt="colorole++"
        class="works-image rounded mx-auto d-block"
      />
      <h6><b>Title:</b> colorole++</h6>
      <ul>
        <li><b>Tech stack:</b> C++</li>
        <li>
          <b>Description:</b> A simple Discord bot to change username's colors
          by replacing their roles
        </li>
        <li>
          <b>Source: </b>
          <a href="https://github.com/jalsol/colorole-pp" target="_blank"
            >https://github.com/jalsol/colorole-pp</a
          >
        </li>
      </ul>
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

.works-image {
  margin-bottom: 1em;
}

@media (min-width: 614px) {
  .works-image {
    height: 17em;
  }
}

@media (min-width: 370px) and (max-width: 613px) {
  .works-image {
    width: 15em;
  }
}

@media (min-width: 338px) and (max-width: 369px) {
  .works-image {
    width: 13em;
  }
}

@media (max-width: 337px) {
  .works-image {
    width: 8em;
  }
}
</style>

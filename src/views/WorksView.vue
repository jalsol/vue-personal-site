<template>
  <div>
    <div class="d-flex justify-content-center" id="title-margin">
      <picture>
        <source srcset="@/assets/images/works.webp" type="image/webp" />
        <source srcset="@/assets/images/works.jpg" type="image/jpg" />
        <img
          src="@/assets/images/works.jpg"
          alt="works-image"
          id="works-image"
        />
      </picture>
    </div>

    <h2 class="text-center">
      <span class="red-title-hover">works.</span>
    </h2>

    <TextCard>
      <picture>
        <source
          srcset="@/assets/images/works/greenpot.webp"
          type="image/webp"
        />
        <source srcset="@/assets/images/works/greenpot.png" type="image/png" />
        <img
          src="@/assets/images/works/greenpot.png"
          alt="GreenPot"
          class="works-image rounded mx-auto d-block"
        />
      </picture>

      <h6>
        <b>Title:</b> GreenPot (as
        <span style="color: #ff9e64">team Hotpot</span>)
      </h6>
      <ul>
        <li>
          <b>Tech stack:</b> ReactJS and Tailwind CSS (front-end), Django and
          SQLite (back-end)
        </li>
        <li>
          <b>Description:</b> An app created in 24 hours by a team of five,
          aiming to change people's awareness and habits for a better natural
          environment by helping you organize your precious time, for your
          precious tree, in your precious space
        </li>
        <li><b>Award:</b> Participation in GameUIT Hackathon 2022</li>
        <li>
          <b>Source: </b>
          <a
            href="https://github.com/GameUITHackathon2022/11-Hotpot"
            target="_blank"
            >https://github.com/GameUITHackathon2022/11-Hotpot</a
          >
        </li>
      </ul>
    </TextCard>

    <TextCard>
      <picture>
        <source
          srcset="@/assets/images/works/mongusweeper.webp"
          type="image/webp"
        />
        <source
          srcset="@/assets/images/works/mongusweeper.png"
          type="image/png"
        />
        <img
          src="@/assets/images/works/mongusweeper.png"
          alt="GreenPot"
          class="works-image rounded mx-auto d-block"
        />
      </picture>

      <h6><b>Title:</b> Mongusweeper</h6>
      <ul>
        <li>
          <b>Tech stack:</b> C++ with Raylib (game engine), yaml-cpp (game
          configuration)
        </li>
        <li>
          <b>Description:</b> An Among-Us-themed clone of Minesweeper as a final
          project for the course CS161 - Introduction to Computer Science
        </li>
        <li>
          <b>Source: </b>
          <a href="https://github.com/jalsol/cs161-minesweeper" target="_blank"
            >https://github.com/jalsol/cs161-minesweeper</a
          >
        </li>
      </ul>
    </TextCard>

    <TextCard>
      <picture>
        <source
          srcset="@/assets/images/works/ViSEF-2022.webp"
          type="image/webp"
        />
        <source
          srcset="@/assets/images/works/ViSEF-2022.png"
          type="image/png"
        />
        <img
          src="@/assets/images/works/ViSEF-2022.png"
          alt="ViSEF-2022"
          class="works-image rounded mx-auto d-block"
        />
      </picture>

      <h6>
        <b>Title:</b> Detecting common diseases on coffee trees via images of
        leaves
      </h6>
      <ul>
        <li>
          <b>Tech stack:</b> Tech stack: Tensorflow, Keras, Flask, Flutter.
        </li>
        <li>
          <b>Description:</b> Send a leaf image of an infected coffee tree and
          receive the predicted disease.
        </li>
        <li>
          <b>Motivation:</b> Support the local people and the local coffee
          industry in Kon Tum.
        </li>
        <li>
          <b>Award:</b> Third Prize in the field of Embedded Systems at ViSEF
          2021 - 2022.
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
      <picture>
        <source
          srcset="@/assets/images/works/ViSEF-2020.webp"
          type="image/webp"
        />
        <source
          srcset="@/assets/images/works/ViSEF-2020.png"
          type="image/png"
        />
        <img
          src="@/assets/images/works/ViSEF-2020.png"
          alt="ViSEF-2020"
          class="works-image rounded mx-auto d-block"
        />
      </picture>
      <h6>
        <b>Title:</b> Recommender System based on Emotion Recognition (in
        collaboration with
        <a href="http://github.com/khangkontum" style="color: #ff9e64"
          >@khangkontum</a
        >)
      </h6>
      <ul>
        <li><b>Tech stack:</b> Tensorflow, PHP, Bootstrap 4, jQuery.</li>
        <li>
          <b>Description:</b> Recognize customers' emotions to rate products and
          recommend similar items.
        </li>
        <li>
          <b>Motivation:</b> Help retail stores improve shopping experience for
          customers.
        </li>
        <li>
          <b>Award:</b> Participation in the field of Systems Software at ViSEF
          2019 - 2020.
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
      <picture>
        <source
          srcset="@/assets/images/works/web-portfolio.webp"
          type="image/webp"
        />
        <source
          srcset="@/assets/images/works/web-portfolio.png"
          type="image/png"
        />
        <img
          src="@/assets/images/works/web-portfolio.png"
          alt="web-portfolio"
          class="works-image rounded mx-auto d-block"
        />
      </picture>
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
      <picture>
        <source
          srcset="@/assets/images/works/colorole-pp.webp"
          type="image/webp"
        />
        <source
          srcset="@/assets/images/works/colorole-pp.png"
          type="image/png"
        />
        <img
          src="@/assets/images/works/colorole-pp.png"
          alt="colorole++"
          class="works-image rounded mx-auto d-block"
        />
      </picture>
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

    <TextCard>
      <picture>
        <source
          srcset="@/assets/images/works/cses-test-downloader.webp"
          type="image/webp"
        />
        <source
          srcset="@/assets/images/works/cses-test-downloader.png"
          type="image/png"
        />
        <img
          src="@/assets/images/works/cses-test-downloader.png"
          alt="cses-test-downloader"
          class="works-image rounded mx-auto d-block"
        />
      </picture>
      <h6><b>Title:</b> CSES Test Downloader</h6>
      <ul>
        <li><b>Tech stack:</b> JavaScript</li>
        <li>
          <b>Description:</b> A simple Chrome extension that fetches test cases
          on the result page of a problem, then downloads them in a zip file
        </li>
        <li>
          <b>Source: </b>
          <a
            href="https://github.com/jalsol/cses-test-downloader"
            target="_blank"
            >https://github.com/jalsol/cses-test-downloader</a
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

<template>
  <div>
    <div class="container" id="avatar-wrapper">
      <div class="row justify-shift">
        <div class="col">
          <picture>
            <source srcset="@/assets/images/pfp.webp" type="image/webp" />
            <source srcset="@/assets/images/pfp.gif" type="image/gif" />
            <img
              src="@/assets/images/pfp.gif"
              alt="avatar"
              class="float-end"
              id="avatar"
            />
          </picture>
        </div>
        <div class="col">
          <div>
            <span class="red-text">j</span>ust<br />
            <span class="red-text">a</span><br />
            <span class="red-text">l</span>ittle<br />
            <span class="red-text">s</span>park<br />
            <span class="red-text">o</span>f<br />
            <span class="red-text">l</span>ight.
          </div>
        </div>
      </div>
      <div class="row">
        <p class="text-center slogan">
          a <span class="red-text">lonely</span> soul, in its own
          <span class="red-text">world</span>...
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#avatar {
  width: 8.25em;
  margin-top: 0.25em;
}

#avatar-wrapper {
  margin-top: 5em;
  margin-bottom: 1em;
}

@media (min-width: 540px) {
  .justify-shift {
    padding-left: 5em;
  }
}

@media (min-width: 300px) and (max-width: 539px) {
  .justify-shift {
    padding-left: 4em;
  }
}

@media (max-width: 299px) {
  .justify-shift {
    padding-left: 1.5em;
  }
}

.slogan {
  padding-top: 2rem;
}

@media (min-width: 1600px) and (min-height: 900px) {
  * {
    font-size: 30px;
  }
}
</style>

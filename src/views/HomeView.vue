<template>
  <div>
    <div class="container" id="avatar-wrapper">
      <div class="row justify-shift">
        <div class="col">
          <img
            src="@/assets/images/pfp.png"
            alt="avatar"
            class="float-end"
            id="avatar"
          />
        </div>
        <div class="col">
          <h3 class="">
            <span class="red-text">j</span>ust<br />
            <span class="red-text">a</span><br />
            <span class="red-text">l</span>ittle<br />
            <span class="red-text">s</span>park<br />
            <span class="red-text">o</span>f<br />
            <span class="red-text">l</span>ight.
          </h3>
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
  width: 175px;
  margin-top: 1em;
  /* border-radius: 100%; */
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

@media (min-width: 412px) and (max-width: 539px) {
  .justify-shift {
    padding-left: 3em;
  }
}

@media (min-width: 376px) and (max-width: 411px) {
  .justify-shift {
    padding-left: 2.5em;
  }
}

@media (min-width: 300px) and (max-width: 375px) {
  .justify-shift {
    padding-left: 1.5em;
  }
}

.slogan {
  padding-top: 2rem;
}
</style>

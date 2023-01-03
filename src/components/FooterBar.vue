<template>
  <footer>
    <div class="footer fixed-bottom">
      <div class="d-flex justify-content-center" id="icons-spread">
        <a href="mailto:nqtruong.1002@gmail.com" target="_blank">
          <font-awesome-icon icon="fa-solid fa-envelope" />
        </a>

        <a href="https://www.linkedin.com/in/nqtr12/" target="_blank">
          <font-awesome-icon icon="fa-brands fa-linkedin" />
        </a>

        <a href="https://github.com/jalsol/" target="_blank">
          <font-awesome-icon icon="fa-brands fa-github" />
        </a>

        <a
          href="https://discordapp.com/users/773302164923351042"
          target="_blank"
        >
          <font-awesome-icon icon="fa-brands fa-discord" />
        </a>
      </div>

      <h6 class="text-center">
        © 2022 - <span class="red-text">present</span> day,
        <span class="red-text">present</span> time
      </h6>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  height: 4em;
  border-top: 1px solid #333333;
  background-color: #1a1b26;
}

#icons-spread > * {
  margin-left: 0.5em;
  margin-right: 0.5em;
}

#icons-spread {
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}
</style>

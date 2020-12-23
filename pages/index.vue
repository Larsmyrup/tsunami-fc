<script>
export default {
  data() {
    return {
      loaded: false,
    }
  },
}
</script>
<template>
  <div class="index">
    <img
        src="/tsunami-fc.svg"
        alt="Tsunami FC logo"
        class="index__logo"
        :class="{'index__logo--loaded': loaded}"
        @load="loaded = true"
    />
    <h1 class="mt-4">
      Verdens Sjoveste Fodboldklub, Måske
    </h1>
    <div
        class="index__some-link-container mt-5"
    >
      <a
          href="https://www.facebook.com/Therealtsunamifc"
          target="_blank"
      >
        <img
            class="index__some-link mr-2"
            src="/facebook-logo.svg"
            alt="Link To Tsunami FC Facebook Page"
        />
      </a>
      <a
          href="https://www.instagram.com/therealtsunamifc/"
          target="_blank"
      >

      <img
          class="index__some-link ml-2"
          src="/instagram-logo.svg"
          alt="Link To Tsunami FC Instagram Page"
      />
      </a>
    </div>

  </div>
</template>

<style lang="scss">
.index {
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @include screen-sm() {
    margin: 100px auto;
  }

  &__some-link-container {
    display: flex;
  }

  &__some-link {
    height: 40px;
    cursor: pointer;
    transition: all, 300ms ease-in-out;

    &:hover {
      filter: brightness(200%);
    }
  }

  &__logo {
    width: 360px;
    height: 360px;
    padding: 0 30px;
    opacity: 0;
    transition: opacity 300ms ease-in-out;

    &--loaded {
      opacity: 1;
    }
  }
}
</style>

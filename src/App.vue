<script>
import ClickSound from './assets/click-sound.mp3'
import ClickSound2 from './assets/click-sound.mp3'
import ClickSound3 from './assets/tsunami-logo.mp3'

const clickSound = new Audio(ClickSound)
const clickSound2 = new Audio(ClickSound2)
const clickSound3 = new Audio(ClickSound3)

export default {
  data() {
    return {
      counter: 1,
    }
  },
  methods: {
    onLogoClick() {
      if (this.counter % 2 === 0 || this.counter % 7 === 0) {
        console.log('lyd 2')
        clickSound.play();
      } else {
        console.log('lyd 1')

        clickSound2.play();
      }
      this.counter++;

      if (this.counter > 10) {
        this.playLoop();
      }
    },
    playLoop() {
      this.playTsunami().then(() => {
        this.playLoop();
      })
    },
    playTsunami() {
      return clickSound3.play();
    },
  },
}
</script>

<template>
  <div id="app" class="app">
    <img
        class="app__logo"
        src="./assets/tsunami.jpg"
        @click="onLogoClick"
    >
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.app {
  &__logo {
    cursor: pointer;

    &:hover {
      filter: brightness(102%);
    }

    &:active {
      filter: brightness(105%);
    }
  }
}
</style>

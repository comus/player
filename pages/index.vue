<template>
  <div class="pc-start">
    <div class="pc-brand">
      <img
        src="~/assets/images/logo.svg"
        alt="">
      <span class="pc-brand__text">{{ title }}</span>
    </div>
    <pc-button
      icon="right"
      label="Start"
      @click="start()" />
  </div>
</template>

<script>
import PcButton from '~/components/button.vue';

export default {
  components: {
    PcButton,
  },

  data() {
    return {
      title: 'Pictionary',
    };
  },
};
</script>

<style lang="scss">
.pc-start {
  align-items: center;
  display: flex;
  flex-direction: column;
}

.pc-brand {
  align-items: center;
  display: flex;
  margin: 50px auto;

  img {
    @include size(48px);
  }

  &__text {
    margin-left: 10px;
  }
}
</style>

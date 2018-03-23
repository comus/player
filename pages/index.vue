<template>
  <div class="pc-start">
    <div class="pc-brand">
      <img
        src="~/assets/images/logo.svg"
        alt="">
      <span class="pc-brand__text">{{ title }}</span>
    </div>
    <pc-drawing-pad v-model="drawing"/>
    <div style="display: flex; flex-direction: row; transform: scale(0.5);">
      <pc-drawing-pad
        v-model="normalizedDrawing"
        :height="255"
        :width="255"
        :read-only="true" />
      <pc-drawing-pad
        v-model="normalizedDrawing"
        :height="255"
        :width="255"
        :read-only="true" />
      <pc-drawing-pad
        v-model="normalizedDrawing"
        :height="255"
        :width="255"
        :read-only="true" />
      <pc-drawing-pad
        v-model="normalizedDrawing"
        :height="255"
        :width="255"
        :read-only="true" />
      <pc-drawing-pad
        v-model="normalizedDrawing"
        :height="255"
        :width="255"
        :read-only="true" />
    </div>
    <h1>{{ word }}</h1>
    <pc-button
      icon="right"
      label="Start"
      @click="start()" />
  </div>
</template>

<script>
import PcButton from '~/components/button.vue';
import PcDrawingPad from '~/components/drawing-pad.vue';
import axios from 'axios';

import { throttle } from 'lodash';

const guess = throttle(async (pad, drawing) => {
  const result = await axios.post('/api/guess', { drawing });
  pad.normalizedDrawing = result.data.normalizedDrawing;
  pad.word = result.data.word;
}, 100);

export default {
  components: {
    PcButton,
    PcDrawingPad,
  },

  data() {
    return {
      title: 'Pictionary',
      drawing: [],
      normalizedDrawing: [[], []],
      word: '',
    };
  },

  watch: {
    drawing(drawing) {
      guess(this, drawing);
    },
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

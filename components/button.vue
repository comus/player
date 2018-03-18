<template>
  <button
    class="pc-button"
    v-on="$listeners">
    <div
      v-if="$slots.icon || icon"
      class="pc-button__icon">
      <slot name="icon">
        <pc-icon :icon="icon" />
      </slot>
    </div>
    <div class="pc-button__label">
      <slot>
        {{ label }}
      </slot>
    </div>
  </button>
</template>

<script>
import PcIcon from '~/components/icon.vue';

export default {
  name: 'PcButton',

  components: {
    PcIcon,
  },

  props: {
    icon: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss">
.pc-button {
  align-items: center;
  background: $blue-500;
  border: none;
  border-radius: 3px;
  color: $white;
  cursor: pointer;
  display: flex;
  height: 32px;
  padding: 0 8px;

  &:hover {
    background-color: $blue-700;
  }

  &__icon {
    margin-right: 10px;
  }

  &__label {
    font-size: 14px;
  }
}
</style>

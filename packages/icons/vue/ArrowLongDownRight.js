import { defineComponent, h } from 'vue';

export const ArrowLongDownRight = defineComponent({
  name: 'ArrowLongDownRight',
  props: {
    class: {
      type: String,
      default: ''
    }
  },
  setup(props, { attrs }) {
    return () => h(
      'svg',
      {
        viewBox: '0 0 20 20',
        width: '12px', height: '12px',
        class: `mynaui-solid ${props.class}`,
        ...attrs
      },
      [
        h('path', {"d": "M4.47 4.47a.75.75 0 0 0 0 1.06l10.625 10.625L12.25 19c0 .414.336.75.75.75h6a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-.75-.75l-2.845 2.845L5.53 4.47a.75.75 0 0 0-1.06 0", "fillRule": "evenodd"})
      ]
    );
  }
});

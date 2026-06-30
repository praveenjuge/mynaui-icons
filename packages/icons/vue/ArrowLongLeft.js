import { defineComponent, h } from 'vue';

export const ArrowLongLeft = defineComponent({
  name: 'ArrowLongLeft',
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
        h('path', {"d": "M6.53 7.47a.75.75 0 0 0-1.06 0l-4 4a.75.75 0 0 0 0 1.06l4 4a.75.75 0 0 0 1.06 0v-3.78H22a.75.75 0 0 0 0-1.5H6.53z", "fillRule": "evenodd"})
      ]
    );
  }
});

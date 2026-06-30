import { defineComponent, h } from 'vue';

export const Leaves = defineComponent({
  name: 'Leaves',
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
        h('path', {"d": "M4.088 3.25a.75.75 0 0 0-.75.643 9 9 0 0 0-.088 1.24c0 4.548 3.524 8.27 8 8.647V20a.75.75 0 0 0 1.5 0v-6.22c4.476-.377 8-4.1 8-8.648q0-.63-.089-1.24a.75.75 0 0 0-.75-.642A8.76 8.76 0 0 0 12 8.407 8.76 8.76 0 0 0 4.088 3.25", "fillRule": "evenodd"})
      ]
    );
  }
});

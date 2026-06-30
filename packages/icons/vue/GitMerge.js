import { defineComponent, h } from 'vue';

export const GitMerge = defineComponent({
  name: 'GitMerge',
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
        h('path', {"d": "M2.25 6a3.75 3.75 0 1 1 4.527 3.67 8.25 8.25 0 0 0 7.554 7.553A3.751 3.751 0 0 1 21.75 18a3.75 3.75 0 0 1-7.43.727 9.75 9.75 0 0 1-7.57-4.529V21a.75.75 0 0 1-1.5 0V9.675A3.75 3.75 0 0 1 2.25 6", "fillRule": "evenodd"})
      ]
    );
  }
});

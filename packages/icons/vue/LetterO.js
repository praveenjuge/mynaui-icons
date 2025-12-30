import { defineComponent, h } from 'vue';

export const LetterO = defineComponent({
  name: 'LetterO',
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
        h('path', {"d": "M10.5 6A3.5 3.5 0 0 0 7 9.5v5a3.5 3.5 0 0 0 3.5 3.5H13a3.5 3.5 0 0 0 3.5-3.5v-5A3.5 3.5 0 0 0 13 6zM9 9.5A1.5 1.5 0 0 1 10.5 8H13a1.5 1.5 0 0 1 1.5 1.5v5A1.5 1.5 0 0 1 13 16h-2.5A1.5 1.5 0 0 1 9 14.5z", "fillRule": "evenodd"})
      ]
    );
  }
});

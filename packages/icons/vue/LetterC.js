import { defineComponent, h } from 'vue';

export const LetterC = defineComponent({
  name: 'LetterC',
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
        h('path', {"d": "M10.5 6A3.5 3.5 0 0 0 7 9.5v5a3.5 3.5 0 0 0 3.5 3.5h2.813a3.19 3.19 0 0 0 3.187-3.187V14.5a1 1 0 1 0-2 0v.313c0 .655-.532 1.187-1.187 1.187H10.5A1.5 1.5 0 0 1 9 14.5v-5A1.5 1.5 0 0 1 10.5 8h2.813c.655 0 1.187.532 1.187 1.188V9.5a1 1 0 1 0 2 0v-.312A3.19 3.19 0 0 0 13.313 6z", "fillRule": "evenodd"})
      ]
    );
  }
});

import { defineComponent, h } from 'vue';

export const LetterU = defineComponent({
  name: 'LetterU',
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
        h('path', {"d": "M8 6a1 1 0 0 0-1 1v7.5a3.5 3.5 0 0 0 3.5 3.5H13a3.5 3.5 0 0 0 3.5-3.5V7a1 1 0 1 0-2 0v7.5A1.5 1.5 0 0 1 13 16h-2.5A1.5 1.5 0 0 1 9 14.5V7a1 1 0 0 0-1-1", "fillRule": "evenodd"})
      ]
    );
  }
});

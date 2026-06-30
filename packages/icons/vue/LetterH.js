import { defineComponent, h } from 'vue';

export const LetterH = defineComponent({
  name: 'LetterH',
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
        h('path', {"d": "M9 6a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0v-4h4.25v4a1 1 0 1 0 2 0V7a1 1 0 1 0-2 0v4H10V7a1 1 0 0 0-1-1", "fillRule": "evenodd"})
      ]
    );
  }
});

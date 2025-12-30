import { defineComponent, h } from 'vue';

export const LetterJ = defineComponent({
  name: 'LetterJ',
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
        h('path', {"d": "M15.25 6a1 1 0 0 0-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5H11.5a1.5 1.5 0 0 1-1.5-1.5 1 1 0 1 0-2 0 3.5 3.5 0 0 0 3.5 3.5h1.25a3.5 3.5 0 0 0 3.5-3.5V7a1 1 0 0 0-1-1", "fillRule": "evenodd"})
      ]
    );
  }
});

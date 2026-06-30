import { defineComponent, h } from 'vue';

export const LetterL = defineComponent({
  name: 'LetterL',
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
        h('path', {"d": "M9 6a1 1 0 0 0-1 1v9.5a1 1 0 0 0 1 1h7a1 1 0 1 0 0-2h-6V7a1 1 0 0 0-1-1", "fillRule": "evenodd"})
      ]
    );
  }
});

import { defineComponent, h } from 'vue';

export const LetterZ = defineComponent({
  name: 'LetterZ',
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
        h('path', {"d": "M8 6a1 1 0 1 0 0 2h5.5l-6.3 8.4A1 1 0 0 0 8 18h7.5a1 1 0 1 0 0-2H10l6.3-8.4a1 1 0 0 0-.8-1.6z", "fillRule": "evenodd"})
      ]
    );
  }
});

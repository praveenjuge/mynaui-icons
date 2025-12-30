import { defineComponent, h } from 'vue';

export const LetterN = defineComponent({
  name: 'LetterN',
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
        h('path', {"d": "M8.8 6.4A1 1 0 0 0 7 7v10a1 1 0 1 0 2 0v-7l5.7 7.6a1 1 0 0 0 1.8-.6V7a1 1 0 1 0-2 0v7z", "fillRule": "evenodd"})
      ]
    );
  }
});

import { defineComponent, h } from 'vue';

export const LetterT = defineComponent({
  name: 'LetterT',
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
        h('path', {"d": "M8 6a1 1 0 0 0 0 2h2.75v9a1 1 0 1 0 2 0V8h2.75a1 1 0 1 0 0-2z", "fillRule": "evenodd"})
      ]
    );
  }
});

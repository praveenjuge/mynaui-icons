import { defineComponent, h } from 'vue';

export const LetterI = defineComponent({
  name: 'LetterI',
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
        h('path', {"d": "M9 6a1 1 0 0 0 0 2h2.125v8H9a1 1 0 1 0 0 2h6.25a1 1 0 1 0 0-2h-2.125V8h2.125a1 1 0 1 0 0-2z", "fillRule": "evenodd"})
      ]
    );
  }
});

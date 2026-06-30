import { defineComponent, h } from 'vue';

export const LetterE = defineComponent({
  name: 'LetterE',
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
        h('path', {"d": "M9 6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6.25a1 1 0 1 0 0-2H10v-3h4a1 1 0 1 0 0-2h-4V8h5.25a1 1 0 1 0 0-2z", "fillRule": "evenodd"})
      ]
    );
  }
});

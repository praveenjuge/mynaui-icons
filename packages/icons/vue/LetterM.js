import { defineComponent, h } from 'vue';

export const LetterM = defineComponent({
  name: 'LetterM',
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
        h('path', {"d": "M8.8 6.4A1 1 0 0 0 7 7v10a1 1 0 1 0 2 0v-7l1.95 2.6a1 1 0 0 0 1.6 0L14.5 10v7a1 1 0 1 0 2 0V7a1 1 0 0 0-1.8-.6l-2.95 3.933z", "fillRule": "evenodd"})
      ]
    );
  }
});

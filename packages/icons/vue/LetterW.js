import { defineComponent, h } from 'vue';

export const LetterW = defineComponent({
  name: 'LetterW',
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
        h('path', {"d": "M8 6a1 1 0 0 0-1 1v10a1 1 0 0 0 1.8.6l2.95-3.933L14.7 17.6a1 1 0 0 0 1.8-.6V7a1 1 0 1 0-2 0v7l-1.95-2.6a1 1 0 0 0-1.6 0L9 14V7a1 1 0 0 0-1-1", "fillRule": "evenodd"})
      ]
    );
  }
});

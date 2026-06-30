import { defineComponent, h } from 'vue';

export const LetterX = defineComponent({
  name: 'LetterX',
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
        h('path', {"d": "M8.8 6.4a1 1 0 1 0-1.6 1.2l3.3 4.4-3.3 4.4a1 1 0 0 0 1.6 1.2l2.95-3.933L14.7 17.6a1 1 0 1 0 1.6-1.2L13 12l3.3-4.4a1 1 0 0 0-1.6-1.2l-2.95 3.933z", "fillRule": "evenodd"})
      ]
    );
  }
});

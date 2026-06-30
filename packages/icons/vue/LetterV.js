import { defineComponent, h } from 'vue';

export const LetterV = defineComponent({
  name: 'LetterV',
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
        h('path', {"d": "M8.936 6.649a1 1 0 0 0-1.872.702l3.75 10a1 1 0 0 0 1.872 0l3.75-10a1 1 0 0 0-1.872-.702l-2.814 7.503z", "fillRule": "evenodd"})
      ]
    );
  }
});

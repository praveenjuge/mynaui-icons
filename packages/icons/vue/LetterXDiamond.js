import { defineComponent, h } from 'vue';

export const LetterXDiamond = defineComponent({
  name: 'LetterXDiamond',
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
        h('path', {"d": "M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685M9.6 7.55a.75.75 0 1 0-1.2.9L11.062 12 8.4 15.55a.75.75 0 0 0 1.2.9l2.4-3.2 2.4 3.2a.75.75 0 0 0 1.2-.9L12.938 12 15.6 8.45a.75.75 0 1 0-1.2-.9l-2.4 3.2z", "fillRule": "evenodd"})
      ]
    );
  }
});

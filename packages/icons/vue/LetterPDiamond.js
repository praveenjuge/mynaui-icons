import { defineComponent, h } from 'vue';

export const LetterPDiamond = defineComponent({
  name: 'LetterPDiamond',
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
        h('path', {"d": "M13.25 11.25H10.5v-2.5h2.75a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-.75.75", "fillRule": "evenodd"}),
        h('path', {"d": "M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685m-.54 5.76A1.25 1.25 0 0 0 9 8.5V16a.75.75 0 0 0 1.5 0v-3.25h2.75a2.25 2.25 0 0 0 2.25-2.25v-1a2.25 2.25 0 0 0-2.25-2.25z", "fillRule": "evenodd"})
      ]
    );
  }
});

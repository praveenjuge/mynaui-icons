import { defineComponent, h } from 'vue';

export const LetterMDiamond = defineComponent({
  name: 'LetterMDiamond',
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
        h('path', {"d": "M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685M9.6 7.55A.75.75 0 0 0 8.25 8v8a.75.75 0 0 0 1.5 0v-5.75l1.65 2.2a.75.75 0 0 0 1.2 0l1.65-2.2V16a.75.75 0 0 0 1.5 0V8a.75.75 0 0 0-1.35-.45l-2.4 3.2z", "fillRule": "evenodd"})
      ]
    );
  }
});

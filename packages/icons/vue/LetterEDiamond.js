import { defineComponent, h } from 'vue';

export const LetterEDiamond = defineComponent({
  name: 'LetterEDiamond',
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
        h('path', {"d": "M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685M9.5 7.25a.75.75 0 0 0-.75.75v8c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-4.25v-2.5h3.25a.75.75 0 0 0 0-1.5h-3.25v-2.5h4.25a.75.75 0 0 0 0-1.5z", "fillRule": "evenodd"})
      ]
    );
  }
});

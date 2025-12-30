import { defineComponent, h } from 'vue';

export const LetterDDiamond = defineComponent({
  name: 'LetterDDiamond',
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
        h('path', {"d": "M12 15.25h-1.75v-6.5H12a2.75 2.75 0 0 1 2.75 2.75v1A2.75 2.75 0 0 1 12 15.25", "fillRule": "evenodd"}),
        h('path', {"d": "M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685M10 7.25c-.69 0-1.25.56-1.25 1.25v7c0 .69.56 1.25 1.25 1.25h2a4.25 4.25 0 0 0 4.25-4.25v-1A4.25 4.25 0 0 0 12 7.25z", "fillRule": "evenodd"})
      ]
    );
  }
});

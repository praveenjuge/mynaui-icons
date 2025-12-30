import { defineComponent, h } from 'vue';

export const LetterK = defineComponent({
  name: 'LetterK',
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
        h('path', {"d": "M15.997 6.336a1 1 0 0 0-1.411-.083L10 10.329V7a1 1 0 0 0-2 0v10a1 1 0 1 0 2 0v-3.329l4.586 4.076a1 1 0 0 0 1.328-1.494L11.13 12l4.784-4.253a1 1 0 0 0 .083-1.411", "fillRule": "evenodd"})
      ]
    );
  }
});

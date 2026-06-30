import { defineComponent, h } from 'vue';

export const LetterOCircle = defineComponent({
  name: 'LetterOCircle',
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
        h('path', {"d": "M9.75 10c0-.69.56-1.25 1.25-1.25h2c.69 0 1.25.56 1.25 1.25v4c0 .69-.56 1.25-1.25 1.25h-2c-.69 0-1.25-.56-1.25-1.25z", "fillRule": "evenodd"}),
        h('path', {"d": "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12M11 7.25A2.75 2.75 0 0 0 8.25 10v4A2.75 2.75 0 0 0 11 16.75h2A2.75 2.75 0 0 0 15.75 14v-4A2.75 2.75 0 0 0 13 7.25z", "fillRule": "evenodd"})
      ]
    );
  }
});

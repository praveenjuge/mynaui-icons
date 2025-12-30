import { defineComponent, h } from 'vue';

export const LetterCCircle = defineComponent({
  name: 'LetterCCircle',
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
        h('path', {"d": "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m7.5-2c0-.69.56-1.25 1.25-1.25h2.25a1 1 0 0 1 1 1V10a.75.75 0 0 0 1.5 0v-.25a2.5 2.5 0 0 0-2.5-2.5H11A2.75 2.75 0 0 0 8.25 10v4A2.75 2.75 0 0 0 11 16.75h2.25a2.5 2.5 0 0 0 2.5-2.5V14a.75.75 0 0 0-1.5 0v.25a1 1 0 0 1-1 1H11c-.69 0-1.25-.56-1.25-1.25z", "fillRule": "evenodd"})
      ]
    );
  }
});

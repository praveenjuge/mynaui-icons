import { defineComponent, h } from 'vue';

export const LetterCHexagon = defineComponent({
  name: 'LetterCHexagon',
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
        h('path', {"d": "M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001 6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zM9.75 10c0-.69.56-1.25 1.25-1.25h2.25a1 1 0 0 1 1 1V10a.75.75 0 0 0 1.5 0v-.25a2.5 2.5 0 0 0-2.5-2.5H11A2.75 2.75 0 0 0 8.25 10v4A2.75 2.75 0 0 0 11 16.75h2.25a2.5 2.5 0 0 0 2.5-2.5V14a.75.75 0 0 0-1.5 0v.25a1 1 0 0 1-1 1H11c-.69 0-1.25-.56-1.25-1.25z", "fillRule": "evenodd"})
      ]
    );
  }
});

import { defineComponent, h } from 'vue';

export const LetterUHexagon = defineComponent({
  name: 'LetterUHexagon',
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
        h('path', {"d": "M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001 6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zM9.75 8a.75.75 0 0 0-1.5 0v6A2.75 2.75 0 0 0 11 16.75h2A2.75 2.75 0 0 0 15.75 14V8a.75.75 0 0 0-1.5 0v6c0 .69-.56 1.25-1.25 1.25h-2c-.69 0-1.25-.56-1.25-1.25z", "fillRule": "evenodd"})
      ]
    );
  }
});

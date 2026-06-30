import { defineComponent, h } from 'vue';

export const LetterNHexagon = defineComponent({
  name: 'LetterNHexagon',
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
        h('path', {"d": "M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001 6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zM9.6 7.55A.75.75 0 0 0 8.25 8v8a.75.75 0 0 0 1.5 0v-5.75l4.65 6.2a.75.75 0 0 0 1.35-.45V8a.75.75 0 0 0-1.5 0v5.75z", "fillRule": "evenodd"})
      ]
    );
  }
});

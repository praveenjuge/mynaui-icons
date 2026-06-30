import { defineComponent, h } from 'vue';

export const LetterJCircle = defineComponent({
  name: 'LetterJCircle',
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
        h('path', {"d": "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12M15 8a.75.75 0 0 0-1.5 0v6c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25a.75.75 0 0 0-1.5 0 2.75 2.75 0 0 0 2.75 2.75h1A2.75 2.75 0 0 0 15 14z", "fillRule": "evenodd"})
      ]
    );
  }
});

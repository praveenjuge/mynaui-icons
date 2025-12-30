import { defineComponent, h } from 'vue';

export const LetterWCircle = defineComponent({
  name: 'LetterWCircle',
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
        h('path', {"d": "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m7.5-4a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.35.45l2.4-3.2 2.4 3.2a.75.75 0 0 0 1.35-.45V8a.75.75 0 0 0-1.5 0v5.75l-1.65-2.2a.75.75 0 0 0-1.2 0l-1.65 2.2z", "fillRule": "evenodd"})
      ]
    );
  }
});

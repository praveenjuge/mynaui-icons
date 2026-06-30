import { defineComponent, h } from 'vue';

export const LetterNCircle = defineComponent({
  name: 'LetterNCircle',
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
        h('path', {"d": "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12M9.6 7.55A.75.75 0 0 0 8.25 8v8a.75.75 0 0 0 1.5 0v-5.75l4.65 6.2a.75.75 0 0 0 1.35-.45V8a.75.75 0 0 0-1.5 0v5.75z", "fillRule": "evenodd"})
      ]
    );
  }
});

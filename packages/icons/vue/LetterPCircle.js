import { defineComponent, h } from 'vue';

export const LetterPCircle = defineComponent({
  name: 'LetterPCircle',
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
        h('path', {"d": "M13.25 11.25H10.5v-2.5h2.75a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-.75.75", "fillRule": "evenodd"}),
        h('path', {"d": "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m8-4.75C9.56 7.25 9 7.81 9 8.5V16a.75.75 0 0 0 1.5 0v-3.25h2.75a2.25 2.25 0 0 0 2.25-2.25v-1a2.25 2.25 0 0 0-2.25-2.25z", "fillRule": "evenodd"})
      ]
    );
  }
});

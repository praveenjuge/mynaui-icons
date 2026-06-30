import { defineComponent, h } from 'vue';

export const LetterZCircle = defineComponent({
  name: 'LetterZCircle',
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
        h('path', {"d": "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12M9 7.25a.75.75 0 0 0 0 1.5h4.5l-5.1 6.8a.75.75 0 0 0 .6 1.2h6a.75.75 0 0 0 0-1.5h-4.5l5.1-6.8a.75.75 0 0 0-.6-1.2z", "fillRule": "evenodd"})
      ]
    );
  }
});

import { defineComponent, h } from 'vue';

export const LetterECircle = defineComponent({
  name: 'LetterECircle',
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
        h('path', {"d": "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12M9.5 7.25a.75.75 0 0 0-.75.75v8c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-4.25v-2.5h3.25a.75.75 0 0 0 0-1.5h-3.25v-2.5h4.25a.75.75 0 0 0 0-1.5z", "fillRule": "evenodd"})
      ]
    );
  }
});

import { defineComponent, h } from 'vue';

export const LetterKCircle = defineComponent({
  name: 'LetterKCircle',
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
        h('path', {"d": "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m12.998-3.44a.75.75 0 0 0-.996-1.12L10.5 10.773V8A.75.75 0 0 0 9 8v8a.75.75 0 0 0 1.5 0v-2.774l3.752 3.335a.75.75 0 0 0 .996-1.122L11.378 12z", "fillRule": "evenodd"})
      ]
    );
  }
});

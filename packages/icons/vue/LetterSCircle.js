import { defineComponent, h } from 'vue';

export const LetterSCircle = defineComponent({
  name: 'LetterSCircle',
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
        h('path', {"d": "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m8.25-4.75A1.75 1.75 0 0 0 8.75 9v.984c0 .92.56 1.748 1.414 2.09l3.114 1.245a.75.75 0 0 1 .472.696V15a.25.25 0 0 1-.25.25h-3a.25.25 0 0 1-.25-.25v-.25a.75.75 0 0 0-1.5 0V15c0 .966.784 1.75 1.75 1.75h3A1.75 1.75 0 0 0 15.25 15v-.985c0-.92-.56-1.747-1.414-2.088l-3.114-1.246a.75.75 0 0 1-.472-.697V9a.25.25 0 0 1 .25-.25h3a.25.25 0 0 1 .25.25v.25a.75.75 0 0 0 1.5 0V9a1.75 1.75 0 0 0-1.75-1.75z", "fillRule": "evenodd"})
      ]
    );
  }
});

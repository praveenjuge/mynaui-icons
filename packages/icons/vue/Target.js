import { defineComponent, h } from 'vue';

export const Target = defineComponent({
  name: 'Target',
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
        h('path', {"d": "M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12M12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9M6 12a6 6 0 1 1 12 0 6 6 0 0 1-12 0m3.75 0a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0", "fillRule": "evenodd"})
      ]
    );
  }
});

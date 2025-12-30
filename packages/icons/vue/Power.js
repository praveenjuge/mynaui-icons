import { defineComponent, h } from 'vue';

export const Power = defineComponent({
  name: 'Power',
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
        h('path', {"d": "M12 2.25a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75", "fillRule": "evenodd"}),
        h('path', {"d": "M6.543 5.812a.75.75 0 1 0-.992-1.124A9.73 9.73 0 0 0 2.25 12c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75a9.73 9.73 0 0 0-3.3-7.312.75.75 0 0 0-.993 1.124 8.25 8.25 0 1 1-10.914 0", "fillRule": "evenodd"})
      ]
    );
  }
});

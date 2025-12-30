import { defineComponent, h } from 'vue';

export const ChartPie = defineComponent({
  name: 'ChartPie',
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
        h('path', {"d": "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75a.75.75 0 0 0-.75-.75h-8.25V3a.75.75 0 0 0-.75-.75", "fillRule": "evenodd"})
      ]
    );
  }
});

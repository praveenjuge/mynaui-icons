import { defineComponent, h } from 'vue';

export const ChartNoAxesColumn = defineComponent({
  name: 'ChartNoAxesColumn',
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
        h('path', {"d": "M5 21v-9a1 1 0 1 1 2 0v9a1 1 0 1 1-2 0m6 0V3a1 1 0 1 1 2 0v18a1 1 0 1 1-2 0m6 0V8a1 1 0 1 1 2 0v13a1 1 0 1 1-2 0", "fillRule": "evenodd"})
      ]
    );
  }
});

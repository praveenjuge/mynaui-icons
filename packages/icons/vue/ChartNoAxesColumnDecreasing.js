import { defineComponent, h } from 'vue';

export const ChartNoAxesColumnDecreasing = defineComponent({
  name: 'ChartNoAxesColumnDecreasing',
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
        h('path', {"d": "M6 21V3a1 1 0 0 1 2 0v18a1 1 0 1 1-2 0m5 0V9a1 1 0 1 1 2 0v12a1 1 0 1 1-2 0m5 0v-5a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0", "fillRule": "evenodd"})
      ]
    );
  }
});

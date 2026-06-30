import { defineComponent, h } from 'vue';

export const Navigation = defineComponent({
  name: 'Navigation',
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
        h('path', {"d": "M13.16 3.064a1.234 1.234 0 0 0-2.32 0L4.34 19.98a1.31 1.31 0 0 0 .288 1.402c.344.346.917.512 1.458.216L12 18.357l5.915 3.24c.54.297 1.113.13 1.457-.215.336-.34.49-.877.288-1.402z", "fillRule": "evenodd"})
      ]
    );
  }
});

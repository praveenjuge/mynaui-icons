import { defineComponent, h } from 'vue';

export const NavigationOne = defineComponent({
  name: 'NavigationOne',
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
        h('path', {"d": "M21.623 4.103c.521-1.1-.626-2.248-1.726-1.726L2.99 10.385c-1.1.52-.94 2.133.24 2.429l6.364 1.59 1.591 6.364c.295 1.18 1.908 1.34 2.43.24z", "fillRule": "evenodd"})
      ]
    );
  }
});

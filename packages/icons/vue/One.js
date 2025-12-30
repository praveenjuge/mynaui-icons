import { defineComponent, h } from 'vue';

export const One = defineComponent({
  name: 'One',
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
        h('path', {"d": "M12.778 6.332a.75.75 0 0 1 .41.668v10a.75.75 0 0 1-1.5 0V8.473L9.44 10.107a.75.75 0 0 1-.882-1.214l3.437-2.5a.75.75 0 0 1 .782-.061", "fillRule": "evenodd"})
      ]
    );
  }
});

import { defineComponent, h } from 'vue';

export const Rhombus = defineComponent({
  name: 'Rhombus',
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
        h('path', {"d": "M13.42 2.964a1.77 1.77 0 0 0-2.84 0L4.62 10.89a1.85 1.85 0 0 0 0 2.222l5.96 7.925a1.77 1.77 0 0 0 2.84 0l5.96-7.925a1.85 1.85 0 0 0 0-2.222z", "fillRule": "evenodd"})
      ]
    );
  }
});

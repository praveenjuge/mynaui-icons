import { defineComponent, h } from 'vue';

export const CornerLeftDown = defineComponent({
  name: 'CornerLeftDown',
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
        h('path', {"d": "M4.483 14.763a.75.75 0 0 1-.026-1.06h4.82V9a4.75 4.75 0 0 1 4.75-4.75H19a.75.75 0 0 1 0 1.5h-4.973A3.25 3.25 0 0 0 10.777 9v4.703h4.821a.75.75 0 0 1-.027 1.06l-5.027 4.78a.75.75 0 0 1-1.034 0z", "fillRule": "evenodd"})
      ]
    );
  }
});

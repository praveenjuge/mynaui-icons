import { defineComponent, h } from 'vue';

export const ArrowDown = defineComponent({
  name: 'ArrowDown',
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
        h('path', {"d": "M5.487 14.422a.75.75 0 0 1-.034-1.06h5.797V4.5a.75.75 0 0 1 1.5 0v8.862h5.797a.75.75 0 0 1-.034 1.06l-6 5.625a.75.75 0 0 1-1.026 0z", "fillRule": "evenodd"})
      ]
    );
  }
});

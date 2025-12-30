import { defineComponent, h } from 'vue';

export const ArrowRight = defineComponent({
  name: 'ArrowRight',
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
        h('path', {"d": "M14.422 5.487a.75.75 0 0 0-1.06-.034v5.797H4.5a.75.75 0 0 0 0 1.5h8.862v5.797a.75.75 0 0 0 1.06-.034l5.625-6a.75.75 0 0 0 0-1.026z", "fillRule": "evenodd"})
      ]
    );
  }
});

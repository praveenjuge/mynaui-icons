import { defineComponent, h } from 'vue';

export const ArrowLeft = defineComponent({
  name: 'ArrowLeft',
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
        h('path', {"d": "M9.578 5.487a.75.75 0 0 1 1.06-.034v5.797H19.5a.75.75 0 0 1 0 1.5h-8.862v5.797a.75.75 0 0 1-1.06-.034l-5.625-6a.75.75 0 0 1 0-1.026z", "fillRule": "evenodd"})
      ]
    );
  }
});

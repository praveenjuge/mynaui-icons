import { defineComponent, h } from 'vue';

export const CartMinus = defineComponent({
  name: 'CartMinus',
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
        h('path', {"d": "m3.72 2.787.55 1.863h14.654c1.84 0 3.245 1.717 2.715 3.51l-1.655 5.6c-.352 1.193-1.471 1.99-2.715 1.99H8.113c-1.244 0-2.362-.797-2.715-1.99L2.281 3.212a.75.75 0 1 1 1.438-.425M10.5 9.25a.75.75 0 0 0 0 1.5h4a.75.75 0 1 0 0-1.5zm-2 8a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5m8 0a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5", "fillRule": "evenodd"})
      ]
    );
  }
});

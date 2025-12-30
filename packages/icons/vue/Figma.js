import { defineComponent, h } from 'vue';

export const Figma = defineComponent({
  name: 'Figma',
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
        h('path', {"d": "M12.75 3.75v4.5H15a2.25 2.25 0 0 0 0-4.5zM17.25 9a3.76 3.76 0 0 1 1.215 1.565A3.751 3.751 0 0 1 12.75 15v3a3.75 3.75 0 1 1-6-3 3.76 3.76 0 0 1-1.5-3 3.75 3.75 0 0 1 1.5-3A3.75 3.75 0 0 1 9 2.25h6A3.75 3.75 0 0 1 17.25 9m-6 .75H9a2.25 2.25 0 1 0 0 4.5h2.25z", "fillRule": "evenodd"})
      ]
    );
  }
});

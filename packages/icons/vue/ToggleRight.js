import { defineComponent, h } from 'vue';

export const ToggleRight = defineComponent({
  name: 'ToggleRight',
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
        h('path', {"d": "M8 6.25a5.75 5.75 0 1 0 0 11.5h8a5.75 5.75 0 0 0 0-11.5zM12.75 12a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0", "fillRule": "evenodd"})
      ]
    );
  }
});

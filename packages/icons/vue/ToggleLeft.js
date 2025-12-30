import { defineComponent, h } from 'vue';

export const ToggleLeft = defineComponent({
  name: 'ToggleLeft',
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
        h('path', {"d": "M2.25 12A5.75 5.75 0 0 1 8 6.25h8a5.75 5.75 0 0 1 0 11.5H8A5.75 5.75 0 0 1 2.25 12m2.5 0a3.25 3.25 0 1 0 6.5 0 3.25 3.25 0 0 0-6.5 0", "fillRule": "evenodd"})
      ]
    );
  }
});

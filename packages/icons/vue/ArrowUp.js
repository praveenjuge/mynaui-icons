import { defineComponent, h } from 'vue';

export const ArrowUp = defineComponent({
  name: 'ArrowUp',
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
        h('path', {"d": "M18.513 9.578a.75.75 0 0 1 .034 1.06H12.75V19.5a.75.75 0 0 1-1.5 0v-8.862H5.453a.75.75 0 0 1 .034-1.06l6-5.625a.75.75 0 0 1 1.026 0z", "fillRule": "evenodd"})
      ]
    );
  }
});

import { defineComponent, h } from 'vue';

export const SearchX = defineComponent({
  name: 'SearchX',
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
        h('path', {"d": "M3.25 11.5a8.25 8.25 0 1 1 14.578 5.294l2.675 2.676a.75.75 0 0 1-1.06 1.06l-2.678-2.678A8.25 8.25 0 0 1 3.25 11.5m7.53-1.78a.75.75 0 0 0-1.06 1.06l.97.97-.97.97a.75.75 0 1 0 1.06 1.06l.97-.97.97.97a.75.75 0 1 0 1.06-1.06l-.97-.97.97-.97a.75.75 0 1 0-1.06-1.06l-.97.97z", "fillRule": "evenodd"})
      ]
    );
  }
});

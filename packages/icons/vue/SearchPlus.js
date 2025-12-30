import { defineComponent, h } from 'vue';

export const SearchPlus = defineComponent({
  name: 'SearchPlus',
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
        h('path', {"d": "M3.25 11.5a8.25 8.25 0 1 1 14.578 5.294l2.675 2.676a.75.75 0 0 1-1.06 1.06l-2.678-2.678A8.25 8.25 0 0 1 3.25 11.5m9-2a.75.75 0 0 0-1.5 0v1.25H9.5a.75.75 0 0 0 0 1.5h1.25v1.25a.75.75 0 0 0 1.5 0v-1.25h1.25a.75.75 0 0 0 0-1.5h-1.25z", "fillRule": "evenodd"})
      ]
    );
  }
});

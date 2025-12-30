import { defineComponent, h } from 'vue';

export const SearchHome = defineComponent({
  name: 'SearchHome',
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
        h('path', {"d": "M10 13v-1.978l1.5-1.094 1.5 1.094V13a.25.25 0 0 1-.25.25h-2.5A.25.25 0 0 1 10 13", "fillRule": "evenodd"}),
        h('path', {"d": "M3.25 11.5a8.25 8.25 0 1 1 14.578 5.294l2.675 2.676a.75.75 0 0 1-1.06 1.06l-2.678-2.678A8.25 8.25 0 0 1 3.25 11.5m10.942-1.466-2.25-1.64a.75.75 0 0 0-.884 0l-2.25 1.64a.75.75 0 0 0-.308.606V13c0 .966.784 1.75 1.75 1.75h2.5A1.75 1.75 0 0 0 14.5 13v-2.36a.75.75 0 0 0-.308-.606", "fillRule": "evenodd"})
      ]
    );
  }
});

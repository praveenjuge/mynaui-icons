import { defineComponent, h } from 'vue';

export const ChevronsRight = defineComponent({
  name: 'ChevronsRight',
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
        h('path', {"d": "M11.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 0 1-1.06 0v-4.939l-4.94 4.94a.75.75 0 0 1-1.06 0V5.47a.75.75 0 0 1 1.06 0l4.94 4.939z", "fillRule": "evenodd"})
      ]
    );
  }
});

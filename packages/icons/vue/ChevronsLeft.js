import { defineComponent, h } from 'vue';

export const ChevronsLeft = defineComponent({
  name: 'ChevronsLeft',
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
        h('path', {"d": "M12.5 5.47a.75.75 0 0 0-1.06 0l-6 6a.75.75 0 0 0 0 1.06l6 6a.75.75 0 0 0 1.06 0v-4.939l4.94 4.94a.75.75 0 0 0 1.06 0V5.47a.75.75 0 0 0-1.06 0l-4.94 4.939z", "fillRule": "evenodd"})
      ]
    );
  }
});

import { defineComponent, h } from 'vue';

export const Kanban = defineComponent({
  name: 'Kanban',
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
        h('path', {"d": "M11 18.5V5a1 1 0 1 1 2 0v13.5a1 1 0 1 1-2 0m6-4.5V5a1 1 0 1 1 2 0v9a1 1 0 1 1-2 0M5 13V5a1 1 0 0 1 2 0v8a1 1 0 1 1-2 0", "fillRule": "evenodd"})
      ]
    );
  }
});

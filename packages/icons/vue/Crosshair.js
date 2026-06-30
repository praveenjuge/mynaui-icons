import { defineComponent, h } from 'vue';

export const Crosshair = defineComponent({
  name: 'Crosshair',
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
        h('path', {"d": "M6 11.25a.75.75 0 0 1 0 1.5H2.278a9.75 9.75 0 0 0 8.972 8.971V18a.75.75 0 0 1 1.5 0v3.721a9.75 9.75 0 0 0 8.971-8.971H18a.75.75 0 1 1 0-1.5h3.721a9.75 9.75 0 0 0-8.971-8.972V6a.75.75 0 0 1-1.5 0V2.278a9.75 9.75 0 0 0-8.972 8.972z", "fillRule": "evenodd"})
      ]
    );
  }
});

import { defineComponent, h } from 'vue';

export const ChartNoAxesGantt = defineComponent({
  name: 'ChartNoAxesGantt',
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
        h('path', {"d": "M18 17a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2zm-2-4a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2zm4-4a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2zm-3-4a1 1 0 1 1 0 2H6a1 1 0 0 1 0-2z", "fillRule": "evenodd"})
      ]
    );
  }
});

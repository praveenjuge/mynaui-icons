import { defineComponent, h } from 'vue';

export const LineChartCircle = defineComponent({
  name: 'LineChartCircle',
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
        h('path', {"d": "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m14.28-1.47a.75.75 0 1 0-1.06-1.06l-2.97 2.97-1.47-1.47a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 1 0 1.06 1.06l1.97-1.97 1.47 1.47a.75.75 0 0 0 1.06 0z", "fillRule": "evenodd"})
      ]
    );
  }
});

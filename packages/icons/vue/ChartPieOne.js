import { defineComponent, h } from 'vue';

export const ChartPieOne = defineComponent({
  name: 'ChartPieOne',
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
        h('path', {"d": "M12.75 3.784v7.466h7.466a8.25 8.25 0 0 0-7.466-7.466m7.466 8.966H12.75v7.466a8.25 8.25 0 0 0 7.466-7.466M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12", "fillRule": "evenodd"})
      ]
    );
  }
});

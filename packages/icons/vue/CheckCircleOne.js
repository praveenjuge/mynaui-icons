import { defineComponent, h } from 'vue';

export const CheckCircleOne = defineComponent({
  name: 'CheckCircleOne',
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
        h('path', {"d": "M21.449 2.399a.75.75 0 0 1 .152 1.05l-7.232 9.69a1.537 1.537 0 0 1-2.364.11l-3.561-3.94a.75.75 0 1 1 1.112-1.006l3.562 3.94.007.004q.006.003.02.003l.017-.004.004-.004 7.233-9.69a.75.75 0 0 1 1.05-.153M12 3.75A8.25 8.25 0 1 0 20.25 12a.75.75 0 0 1 1.5 0c0 5.385-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25a.75.75 0 0 1 0 1.5", "fillRule": "evenodd"})
      ]
    );
  }
});

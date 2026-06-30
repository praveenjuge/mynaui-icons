import { defineComponent, h } from 'vue';

export const CheckCircle = defineComponent({
  name: 'CheckCircle',
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
        h('path', {"d": "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m13.523-3.308a.75.75 0 0 0-1.048.169l-3.597 4.981a.25.25 0 0 1-.391.018l-1.506-1.72a.75.75 0 1 0-1.129.987l1.506 1.721a1.75 1.75 0 0 0 2.736-.128l3.597-4.98a.75.75 0 0 0-.168-1.048", "fillRule": "evenodd"})
      ]
    );
  }
});

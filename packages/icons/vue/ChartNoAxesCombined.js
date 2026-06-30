import { defineComponent, h } from 'vue';

export const ChartNoAxesCombined = defineComponent({
  name: 'ChartNoAxesCombined',
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
        h('path', {"d": "M4 21v-6a1 1 0 1 1 2 0v6a1 1 0 1 1-2 0m5 0v-8a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0m4.5 0v-7a1 1 0 0 1 2 0v7a1 1 0 1 1-2 0m4.5 0V11a1 1 0 0 1 2 0v10a1 1 0 1 1-2 0m2.342-17.253a1 1 0 0 1 1.316 1.506l-5.846 5.114c-.818.716-1.716 1.274-2.754 1.26-.92-.011-1.723-.465-2.467-1.137l-.316-.3-.007-.007c-.654-.655-1.054-.826-1.332-.843-.233-.015-.589.067-1.174.505l-.265.21-3.856 3.214a1 1 0 0 1-1.282-1.537L6.217 8.52l.334-.266c.786-.59 1.61-.967 2.512-.91 1.021.066 1.864.67 2.62 1.426l.006.006.251.239c.556.499.909.61 1.143.614.28.004.7-.141 1.413-.766z", "fillRule": "evenodd"})
      ]
    );
  }
});

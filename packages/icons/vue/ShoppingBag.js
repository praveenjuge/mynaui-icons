import { defineComponent, h } from 'vue';

export const ShoppingBag = defineComponent({
  name: 'ShoppingBag',
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
        h('path', {"d": "M15.815 5v1.25h.412c1.451 0 2.68 1.101 2.786 2.553l.73 10c.117 1.609-1.182 2.947-2.786 2.947H7.043c-1.604 0-2.903-1.338-2.786-2.947l.73-10C5.093 7.35 6.322 6.25 7.773 6.25h.412V5c0-1.534 1.266-2.75 2.794-2.75h2.043c1.527 0 2.793 1.216 2.793 2.75m-6.13 0v1.25h4.63V5c0-.675-.564-1.25-1.293-1.25h-2.043c-.73 0-1.294.575-1.294 1.25", "fillRule": "evenodd"})
      ]
    );
  }
});

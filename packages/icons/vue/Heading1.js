import { defineComponent, h } from 'vue';

export const Heading1 = defineComponent({
  name: 'Heading1',
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
        h('path', {"d": "M3.75 3.75a.75.75 0 0 1 .75.75v6.75h8V4.5a.75.75 0 0 1 1.5 0v15a.75.75 0 0 1-1.5 0v-6.75h-8v6.75a.75.75 0 0 1-1.5 0v-15a.75.75 0 0 1 .75-.75m16.077 5.075a.75.75 0 0 1 .423.675v10a.75.75 0 0 1-1.5 0v-8.45l-1.785 1.413a.75.75 0 1 1-.93-1.176l3-2.375a.75.75 0 0 1 .792-.087", "fillRule": "evenodd"})
      ]
    );
  }
});

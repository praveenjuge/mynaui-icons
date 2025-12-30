import { defineComponent, h } from 'vue';

export const Label = defineComponent({
  name: 'Label',
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
        h('path', {"d": "M2.25 4.025A1.75 1.75 0 0 1 4.025 2.25l7.488.095a2.75 2.75 0 0 1 1.913.807l7.299 7.298c.423.423.798 1.034.952 1.687.156.664.096 1.476-.529 2.1l-6.91 6.911c-.625.625-1.437.685-2.101.529a3.66 3.66 0 0 1-1.687-.952l-7.298-7.299a2.76 2.76 0 0 1-.807-1.913zm5.592 2.29a.75.75 0 0 0-1.06 1.06l.707.708a.75.75 0 0 0 1.06-1.061z", "fillRule": "evenodd"})
      ]
    );
  }
});

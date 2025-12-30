import { defineComponent, h } from 'vue';

export const Ticket = defineComponent({
  name: 'Ticket',
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
        h('path', {"d": "M2.25 7A2.75 2.75 0 0 1 5 4.25h14A2.75 2.75 0 0 1 21.75 7v3a.75.75 0 0 1-.75.75 1.25 1.25 0 1 0 0 2.5.75.75 0 0 1 .75.75v3A2.75 2.75 0 0 1 19 19.75H5A2.75 2.75 0 0 1 2.25 17v-3a.75.75 0 0 1 .75-.75 1.25 1.25 0 1 0 0-2.5.75.75 0 0 1-.75-.75zm10.5 1a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0zm0 3.75a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0zm0 3.75a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0z", "fillRule": "evenodd"})
      ]
    );
  }
});

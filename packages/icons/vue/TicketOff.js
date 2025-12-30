import { defineComponent, h } from 'vue';

export const TicketOff = defineComponent({
  name: 'TicketOff',
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
        h('path', {"d": "M5 4.25A2.75 2.75 0 0 0 2.25 7v3c0 .414.336.75.75.75a1.25 1.25 0 1 1 0 2.5.75.75 0 0 0-.75.75v3c0 1 .534 1.876 1.332 2.357L2.47 20.47a.75.75 0 1 0 1.06 1.06l1.78-1.78H19A2.75 2.75 0 0 0 21.75 17v-3a.75.75 0 0 0-.75-.75 1.25 1.25 0 1 1 0-2.5.75.75 0 0 0 .75-.75V7c0-1-.534-1.876-1.332-2.357L21.53 3.53a.75.75 0 0 0-1.06-1.06l-1.78 1.78zm7 3a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75m0 7.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 .75-.75", "fillRule": "evenodd"})
      ]
    );
  }
});

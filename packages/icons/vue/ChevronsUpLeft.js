import { defineComponent, h } from 'vue';

export const ChevronsUpLeft = defineComponent({
  name: 'ChevronsUpLeft',
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
        h('path', {"d": "M14.745 5.5a.75.75 0 0 1 .75.75l-3.253 3.254h6.507a.75.75 0 0 1 .751.751L10.255 19.5a.75.75 0 0 1-.75-.75v-6.508L6.25 15.496a.75.75 0 0 1-.751-.751V6.251a.75.75 0 0 1 .75-.751z", "fillRule": "evenodd"})
      ]
    );
  }
});

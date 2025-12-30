import { defineComponent, h } from 'vue';

export const Microchip = defineComponent({
  name: 'Microchip',
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
        h('path', {"d": "M5.25 4c0-.966.784-1.75 1.75-1.75h10c.966 0 1.75.784 1.75 1.75v1.25H21a.75.75 0 0 1 0 1.5h-2.25v2.5H21a.75.75 0 0 1 0 1.5h-2.25v2.5H21a.75.75 0 0 1 0 1.5h-2.25v2.5H21a.75.75 0 0 1 0 1.5h-2.25V20A1.75 1.75 0 0 1 17 21.75H7A1.75 1.75 0 0 1 5.25 20v-1.25H3a.75.75 0 0 1 0-1.5h2.25v-2.5H3a.75.75 0 0 1 0-1.5h2.25v-2.5H3a.75.75 0 0 1 0-1.5h2.25v-2.5H3a.75.75 0 0 1 0-1.5h2.25z", "fillRule": "evenodd"})
      ]
    );
  }
});

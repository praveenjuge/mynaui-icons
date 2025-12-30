import { defineComponent, h } from 'vue';

export const Frame = defineComponent({
  name: 'Frame',
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
        h('path', {"d": "M7.35 3a.75.75 0 0 0-1.5 0v2.85H3a.75.75 0 0 0 0 1.5h2.85v9.3H3a.75.75 0 0 0 0 1.5h2.85V21a.75.75 0 0 0 1.5 0v-2.85h9.3V21a.75.75 0 0 0 1.5 0v-2.85H21a.75.75 0 0 0 0-1.5h-2.85v-9.3H21a.75.75 0 0 0 0-1.5h-2.85V3a.75.75 0 0 0-1.5 0v2.85h-9.3z", "fillRule": "evenodd"})
      ]
    );
  }
});

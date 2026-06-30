import { defineComponent, h } from 'vue';

export const MoveHorizontal = defineComponent({
  name: 'MoveHorizontal',
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
        h('path', {"d": "M5.47 7.47a.75.75 0 0 1 1.06 0v3.78h10.94V7.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0v-3.78H6.53v3.78a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06z", "fillRule": "evenodd"})
      ]
    );
  }
});

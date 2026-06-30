import { defineComponent, h } from 'vue';

export const MoveVertical = defineComponent({
  name: 'MoveVertical',
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
        h('path', {"d": "M16.53 5.47a.75.75 0 0 1 0 1.06h-3.78v10.94h3.78a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06h3.78V6.53H7.47a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 0z", "fillRule": "evenodd"})
      ]
    );
  }
});

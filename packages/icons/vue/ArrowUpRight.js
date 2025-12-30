import { defineComponent, h } from 'vue';

export const ArrowUpRight = defineComponent({
  name: 'ArrowUpRight',
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
        h('path', {"d": "M8.5 5.75a.75.75 0 0 0-.75.75l4.345 4.345L5.97 16.97a.75.75 0 1 0 1.06 1.06l6.125-6.125L17.5 16.25a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-.75-.75z", "fillRule": "evenodd"})
      ]
    );
  }
});

import { defineComponent, h } from 'vue';

export const Folder = defineComponent({
  name: 'Folder',
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
        h('path', {"d": "M5 3.25A2.75 2.75 0 0 0 2.25 6v12A2.75 2.75 0 0 0 5 20.75h14A2.75 2.75 0 0 0 21.75 18V9A2.75 2.75 0 0 0 19 6.25h-7.34a1.25 1.25 0 0 1-.826-.312L8.562 3.936a2.75 2.75 0 0 0-1.817-.686z", "fillRule": "evenodd"})
      ]
    );
  }
});

import { defineComponent, h } from 'vue';

export const FolderTwo = defineComponent({
  name: 'FolderTwo',
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
        h('path', {"d": "M5 3.25A2.75 2.75 0 0 0 2.25 6v12A2.75 2.75 0 0 0 5 20.75h14A2.75 2.75 0 0 0 21.75 18V9c0-1.283-.88-2.361-2.068-2.665a3.25 3.25 0 0 0-3.183-2.586H8.325a2.75 2.75 0 0 0-1.58-.499zm11.5 2c.698 0 1.3.408 1.582 1h-6.42a1.25 1.25 0 0 1-.827-.312l-.782-.689z", "fillRule": "evenodd"})
      ]
    );
  }
});

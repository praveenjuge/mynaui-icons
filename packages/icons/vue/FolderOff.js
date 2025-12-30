import { defineComponent, h } from 'vue';

export const FolderOff = defineComponent({
  name: 'FolderOff',
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
        h('path', {"d": "M5 3.25A2.75 2.75 0 0 0 2.25 6v12c0 .744.295 1.419.775 1.914l-.555.556a.75.75 0 1 0 1.06 1.06l.85-.85q.3.07.62.07h14A2.75 2.75 0 0 0 21.75 18V9A2.75 2.75 0 0 0 19 6.25h-.19l2.72-2.72a.75.75 0 0 0-1.06-1.06l-3.78 3.78h-5.03a1.25 1.25 0 0 1-.826-.312L8.562 3.936a2.75 2.75 0 0 0-1.817-.686z", "fillRule": "evenodd"})
      ]
    );
  }
});

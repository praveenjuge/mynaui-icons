import { defineComponent, h } from 'vue';

export const FolderX = defineComponent({
  name: 'FolderX',
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
        h('path', {"d": "M2.25 6v12A2.75 2.75 0 0 0 5 20.75h14A2.75 2.75 0 0 0 21.75 18V9A2.75 2.75 0 0 0 19 6.25h-7.34a1.25 1.25 0 0 1-.826-.312L8.562 3.936a2.75 2.75 0 0 0-1.817-.686H5A2.75 2.75 0 0 0 2.25 6m7.72 5.47a.75.75 0 0 1 1.06 0l.884.884.884-.884a.75.75 0 0 1 1.06 1.06l-.883.884.884.884a.75.75 0 0 1-1.06 1.06l-.885-.883-.884.884a.75.75 0 1 1-1.06-1.06l.884-.885-.884-.884a.75.75 0 0 1 0-1.06", "fillRule": "evenodd"})
      ]
    );
  }
});

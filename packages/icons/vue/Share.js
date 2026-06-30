import { defineComponent, h } from 'vue';

export const Share = defineComponent({
  name: 'Share',
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
        h('path', {"d": "M7 8.75a3.25 3.25 0 1 0 2.002 5.81l.068.054 4.73 3.312a3.25 3.25 0 1 0 .617-1.4l-4.479-3.135c.2-.421.312-.893.312-1.391s-.112-.97-.312-1.391l4.48-3.136a3.25 3.25 0 1 0-.617-1.4L9.07 9.387l-.068.053A3.24 3.24 0 0 0 7 8.75", "fillRule": "evenodd"})
      ]
    );
  }
});

import { defineComponent, h } from 'vue';

export const Train = defineComponent({
  name: 'Train',
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
        h('path', {"d": "M4.25 6A3.75 3.75 0 0 1 8 2.25h8A3.75 3.75 0 0 1 19.75 6v9c0 1.63-1.04 3.017-2.493 3.534l1.367 2.05a.75.75 0 1 1-1.248.832l-1.777-2.666H8.4l-1.777 2.666a.75.75 0 1 1-1.248-.832l1.367-2.05A3.75 3.75 0 0 1 4.25 15zm14 .75h-5.5v3.5h5.5zm-12.5 3.5h5.5v-3.5h-5.5zm3 3.75a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0zm7.25-.75a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-.75-.75", "fillRule": "evenodd"})
      ]
    );
  }
});

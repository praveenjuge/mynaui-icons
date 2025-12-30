import { defineComponent, h } from 'vue';

export const Alt = defineComponent({
  name: 'Alt',
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
        h('path', {"d": "M3 4.25a1 1 0 0 0 0 2h5.007l6.474 12.947a1 1 0 0 0 .894.553H21a1 1 0 1 0 0-2h-5.007L9.519 4.803a1 1 0 0 0-.894-.553zm11.25 0a1 1 0 1 0 0 2H21a1 1 0 1 0 0-2z", "fillRule": "evenodd"})
      ]
    );
  }
});

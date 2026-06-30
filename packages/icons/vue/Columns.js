import { defineComponent, h } from 'vue';

export const Columns = defineComponent({
  name: 'Columns',
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
        h('path', {"d": "M14.5 2.25A1.75 1.75 0 0 0 12.75 4v16c0 .966.784 1.75 1.75 1.75h3A1.75 1.75 0 0 0 19.25 20V4a1.75 1.75 0 0 0-1.75-1.75zm-8 0A1.75 1.75 0 0 0 4.75 4v16c0 .966.784 1.75 1.75 1.75h3A1.75 1.75 0 0 0 11.25 20V4A1.75 1.75 0 0 0 9.5 2.25z", "fillRule": "evenodd"})
      ]
    );
  }
});

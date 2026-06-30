import { defineComponent, h } from 'vue';

export const Record = defineComponent({
  name: 'Record',
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
        h('path', {"d": "M10.75 12.5a4.23 4.23 0 0 1-1.01 2.75h4.52a4.25 4.25 0 1 1 3.24 1.5h-11a4.25 4.25 0 1 1 4.25-4.25", "fillRule": "evenodd"})
      ]
    );
  }
});

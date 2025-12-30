import { defineComponent, h } from 'vue';

export const ChevronsUpDown = defineComponent({
  name: 'ChevronsUpDown',
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
        h('path', {"d": "M12.53 3.47a.75.75 0 0 0-1.06 0l-4 4a.75.75 0 0 0 0 1.06h9.06a.75.75 0 0 0 0-1.06zm4 13.06a.75.75 0 0 0 0-1.06H7.47a.75.75 0 0 0 0 1.06l4 4a.75.75 0 0 0 1.06 0z", "fillRule": "evenodd"})
      ]
    );
  }
});

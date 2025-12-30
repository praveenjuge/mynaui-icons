import { defineComponent, h } from 'vue';

export const TypeItalic = defineComponent({
  name: 'TypeItalic',
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
        h('path', {"d": "M14.483 2.25H9a.75.75 0 0 0 0 1.5h4.54l-4.126 16.5H5a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5h-4.04l4.126-16.5H19a.75.75 0 0 0 0-1.5z", "fillRule": "evenodd"})
      ]
    );
  }
});

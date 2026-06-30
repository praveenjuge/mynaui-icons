import { defineComponent, h } from 'vue';

export const Anchor = defineComponent({
  name: 'Anchor',
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
        h('path', {"d": "M12 2.25a2.75 2.75 0 0 0-.75 5.396v12.57a8.25 8.25 0 0 1-7.466-7.466H5a.75.75 0 0 0 0-1.5H3a.75.75 0 0 0-.75.75c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75a.75.75 0 0 0-.75-.75h-2a.75.75 0 0 0 0 1.5h1.216a8.25 8.25 0 0 1-7.466 7.466V7.646A2.751 2.751 0 0 0 12 2.25", "fillRule": "evenodd"})
      ]
    );
  }
});

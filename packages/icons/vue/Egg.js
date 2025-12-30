import { defineComponent, h } from 'vue';

export const Egg = defineComponent({
  name: 'Egg',
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
        h('path', {"d": "M12 2.25c-1.223 0-2.337.521-3.294 1.295-.955.773-1.79 1.827-2.477 2.98C4.864 8.817 4 11.65 4 13.8c0 4.395 3.587 7.95 8 7.95s8-3.555 8-7.95c0-2.151-.864-4.983-2.23-7.275-.686-1.153-1.52-2.207-2.476-2.98C14.337 2.771 13.222 2.25 12 2.25", "fillRule": "evenodd"})
      ]
    );
  }
});

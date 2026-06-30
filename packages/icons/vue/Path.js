import { defineComponent, h } from 'vue';

export const Path = defineComponent({
  name: 'Path',
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
        h('path', {"d": "M18 9.75a3.74 3.74 0 0 1-2.068-.621l-6.803 6.803a3.75 3.75 0 1 1-1.06-1.06l6.802-6.804A3.75 3.75 0 1 1 18 9.75", "fillRule": "evenodd"})
      ]
    );
  }
});

import { defineComponent, h } from 'vue';

export const Hash = defineComponent({
  name: 'Hash',
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
        h('path', {"d": "M10.436 4.131a.75.75 0 0 0-1.477-.262l-.74 4.162H3a.75.75 0 0 0 0 1.5h4.953L6.9 15.47H3a.75.75 0 1 0 0 1.5h3.632l-.692 3.9a.75.75 0 0 0 1.477.262l.739-4.162h5.833l-.692 3.9a.75.75 0 1 0 1.476.262l.74-4.162H21a.75.75 0 0 0 0-1.5h-5.221l1.054-5.938H21a.75.75 0 0 0 0-1.5h-3.9l.692-3.9a.75.75 0 0 0-1.477-.262l-.739 4.162H9.743z", "fillRule": "evenodd"})
      ]
    );
  }
});

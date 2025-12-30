import { defineComponent, h } from 'vue';

export const Six = defineComponent({
  name: 'Six',
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
        h('path', {"d": "M8 10.75a4.5 4.5 0 0 1 4.5-4.5h1.25a.75.75 0 0 1 0 1.5H12.5a3 3 0 0 0-3 3v.442c.69-.402 1.53-.567 2.375-.567.96 0 1.915.213 2.65.745.766.555 1.225 1.41 1.225 2.505a3.875 3.875 0 0 1-7.75 0zm1.5 3.125a2.375 2.375 0 1 0 4.75 0c0-.63-.24-1.026-.605-1.29-.396-.286-1.005-.46-1.77-.46s-1.374.174-1.77.46c-.364.264-.605.66-.605 1.29", "fillRule": "evenodd"})
      ]
    );
  }
});

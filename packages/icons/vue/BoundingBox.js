import { defineComponent, h } from 'vue';

export const BoundingBox = defineComponent({
  name: 'BoundingBox',
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
        h('path', {"d": "M5 2.25a2.75 2.75 0 0 0-.75 5.396v8.708a2.751 2.751 0 1 0 3.396 3.396h8.708a2.751 2.751 0 1 0 3.396-3.396V7.646a2.751 2.751 0 1 0-3.396-3.396H7.646A2.75 2.75 0 0 0 5 2.25m.75 14.104V7.646A2.76 2.76 0 0 0 7.646 5.75h8.708c.259.916.98 1.637 1.896 1.896v8.708a2.76 2.76 0 0 0-1.896 1.896H7.646a2.76 2.76 0 0 0-1.896-1.896", "fillRule": "evenodd"})
      ]
    );
  }
});

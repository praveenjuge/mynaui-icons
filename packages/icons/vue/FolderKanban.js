import { defineComponent, h } from 'vue';

export const FolderKanban = defineComponent({
  name: 'FolderKanban',
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
        h('path', {"d": "M6.745 3.25c.67 0 1.315.244 1.818.687l2.272 2.001.089.07c.213.157.471.242.737.242H19A2.75 2.75 0 0 1 21.75 9v9A2.75 2.75 0 0 1 19 20.75H5A2.75 2.75 0 0 1 2.25 18V6A2.75 2.75 0 0 1 5 3.25zM12 9.5a1 1 0 0 0-1 1V16a1 1 0 1 0 2 0v-5.5a1 1 0 0 0-1-1m-5 0a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1m10 0a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1", "fillRule": "evenodd"})
      ]
    );
  }
});

import { defineComponent, h } from 'vue';

export const Login = defineComponent({
  name: 'Login',
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
        h('path', {"d": "M6.5 3.75c-.526 0-1.25.63-1.25 1.821V18.43c0 1.192.724 1.821 1.25 1.821h6.996a.75.75 0 1 1 0 1.5H6.5c-1.683 0-2.75-1.673-2.75-3.321V5.57c0-1.648 1.067-3.321 2.75-3.321h7a.75.75 0 0 1 0 1.5z", "fillRule": "evenodd"}),
        h('path', {"d": "M20.25 11.996a.75.75 0 0 0-.75-.75h-5.97V7.97a.75.75 0 0 0-1.06 0l-3.451 3.45a.75.75 0 0 0-.269.576v.002c0 .193.073.385.22.532l3.5 3.5a.75.75 0 0 0 1.06 0v-3.284h5.97a.75.75 0 0 0 .75-.75", "fillRule": "evenodd"})
      ]
    );
  }
});

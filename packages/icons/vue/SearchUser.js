import { defineComponent, h } from 'vue';

export const SearchUser = defineComponent({
  name: 'SearchUser',
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
        h('path', {"d": "M10.25 10a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0", "fillRule": "evenodd"}),
        h('path', {"d": "M3.25 11.5a8.25 8.25 0 1 1 14.578 5.294l2.675 2.676a.75.75 0 0 1-1.06 1.06l-2.678-2.678A8.25 8.25 0 0 1 3.25 11.5m8.25-4.25a2.75 2.75 0 0 0-2.01 4.627q-.286.164-.54.382c-.734.629-1.2 1.563-1.2 2.741a.75.75 0 0 0 1.5 0c0-.752.284-1.266.676-1.603.408-.35.977-.543 1.574-.543s1.166.193 1.574.543c.392.337.676.85.676 1.603a.75.75 0 0 0 1.5 0c0-1.178-.466-2.112-1.2-2.741a3.6 3.6 0 0 0-.54-.382A2.75 2.75 0 0 0 11.5 7.25", "fillRule": "evenodd"})
      ]
    );
  }
});

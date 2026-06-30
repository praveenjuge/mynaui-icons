import { defineComponent, h } from 'vue';

export const Servers = defineComponent({
  name: 'Servers',
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
        h('path', {"d": "M2.25 5.7c0-.943.661-1.95 1.75-1.95h16c1.089 0 1.75 1.007 1.75 1.95v3.6c0 .943-.661 1.95-1.75 1.95H4c-1.089 0-1.75-1.007-1.75-1.95zM6 6.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5zM2.25 14.7c0-.943.661-1.95 1.75-1.95h16c1.089 0 1.75 1.007 1.75 1.95v3.6c0 .943-.661 1.95-1.75 1.95H4c-1.089 0-1.75-1.007-1.75-1.95zM6 15.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z", "fillRule": "evenodd"})
      ]
    );
  }
});

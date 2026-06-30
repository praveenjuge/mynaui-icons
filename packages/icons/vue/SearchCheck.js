import { defineComponent, h } from 'vue';

export const SearchCheck = defineComponent({
  name: 'SearchCheck',
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
        h('path', {"d": "M3.25 11.5a8.25 8.25 0 1 1 14.578 5.294l2.675 2.676a.75.75 0 0 1-1.06 1.06l-2.678-2.678A8.25 8.25 0 0 1 3.25 11.5m10.607-1.06a.75.75 0 0 0-1.214-.88l-1.724 2.376-.606-.69a.75.75 0 0 0-1.126.991l1.039 1.182a.976.976 0 0 0 1.522-.071z", "fillRule": "evenodd"})
      ]
    );
  }
});

import { defineComponent, h } from 'vue';

export const GitBranch = defineComponent({
  name: 'GitBranch',
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
        h('path', {"d": "M6.75 3a.75.75 0 0 0-1.5 0v11.325a3.751 3.751 0 1 0 4.43 4.402 9.75 9.75 0 0 0 9.047-9.047 3.751 3.751 0 1 0-1.504-.01 8.25 8.25 0 0 1-7.554 7.553 3.76 3.76 0 0 0-2.919-2.898z", "fillRule": "evenodd"})
      ]
    );
  }
});

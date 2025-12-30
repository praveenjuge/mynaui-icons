import { defineComponent, h } from 'vue';

export const GitCommit = defineComponent({
  name: 'GitCommit',
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
        h('path', {"d": "M12 8.25a3.75 3.75 0 0 0-3.675 3H3a.75.75 0 0 0 0 1.5h5.325a3.751 3.751 0 0 0 7.35 0H21a.75.75 0 0 0 0-1.5h-5.325a3.75 3.75 0 0 0-3.675-3", "fillRule": "evenodd"})
      ]
    );
  }
});

import { defineComponent, h } from 'vue';

export const Moon = defineComponent({
  name: 'Moon',
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
        h('path', {"d": "M11.712 3.45a.75.75 0 0 0-.668-1.197c-5.414.494-8.436 4.752-8.764 9.105-.328 4.361 2.037 8.975 7.451 10.166 5.686 1.25 11.472-2.837 12.016-8.646a.75.75 0 0 0-1.189-.676c-2.837 2.069-6.08 1.316-8.136-.724-2.054-2.039-2.8-5.239-.71-8.028", "fillRule": "evenodd"})
      ]
    );
  }
});

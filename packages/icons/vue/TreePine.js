import { defineComponent, h } from 'vue';

export const TreePine = defineComponent({
  name: 'TreePine',
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
        h('path', {"d": "M11.25 21v-3.25H5a.75.75 0 0 1-.53-1.28l3.22-3.22H6.5a.75.75 0 0 1-.562-1.246l3.648-4.136 1.702-5.105.047-.11a.75.75 0 0 1 1.377.11l1.701 5.105 3.65 4.136.066.087a.75.75 0 0 1-.629 1.159h-1.19l3.22 3.22a.75.75 0 0 1-.53 1.28h-6.25V21a.75.75 0 0 1-1.5 0", "fillRule": "evenodd"})
      ]
    );
  }
});

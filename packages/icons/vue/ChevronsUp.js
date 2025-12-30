import { defineComponent, h } from 'vue';

export const ChevronsUp = defineComponent({
  name: 'ChevronsUp',
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
        h('path', {"d": "M18.53 12.53a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.06 0l-6 6a.75.75 0 0 0 0 1.06h4.939l-4.94 4.94a.75.75 0 0 0 0 1.06H18.53a.75.75 0 0 0 0-1.06l-4.939-4.94z", "fillRule": "evenodd"})
      ]
    );
  }
});

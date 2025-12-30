import { defineComponent, h } from 'vue';

export const Divide = defineComponent({
  name: 'Divide',
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
        h('path', {"d": "M2.25 12a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75M12 4.25a.75.75 0 0 1 .75.75v.744a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75m0 13.256a.75.75 0 0 1 .75.75V19a.75.75 0 0 1-1.5 0v-.744a.75.75 0 0 1 .75-.75", "fillRule": "evenodd"})
      ]
    );
  }
});

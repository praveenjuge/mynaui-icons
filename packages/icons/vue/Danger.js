import { defineComponent, h } from 'vue';

export const Danger = defineComponent({
  name: 'Danger',
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
        h('path', {"d": "M12 4.25a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75m0 13.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 .75-.75", "fillRule": "evenodd"})
      ]
    );
  }
});

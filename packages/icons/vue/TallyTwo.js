import { defineComponent, h } from 'vue';

export const TallyTwo = defineComponent({
  name: 'TallyTwo',
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
        h('path', {"d": "M4 3.25a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-1.5 0V4A.75.75 0 0 1 4 3.25m5.333 0a.75.75 0 0 1 .75.75v16a.75.75 0 1 1-1.5 0V4a.75.75 0 0 1 .75-.75", "fillRule": "evenodd"})
      ]
    );
  }
});

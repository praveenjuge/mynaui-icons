import { defineComponent, h } from 'vue';

export const Info = defineComponent({
  name: 'Info',
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
        h('path', {"d": "M12 4.25a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75M10.75 9.5a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 .75.75v9.293a.75.75 0 0 1-.25 1.457h-1a.75.75 0 0 1-.25-1.457v-8.586a.75.75 0 0 1-.5-.707", "fillRule": "evenodd"})
      ]
    );
  }
});

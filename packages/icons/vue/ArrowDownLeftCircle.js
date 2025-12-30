import { defineComponent, h } from 'vue';

export const ArrowDownLeftCircle = defineComponent({
  name: 'ArrowDownLeftCircle',
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
        h('path', {"d": "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m13.462-3.712a.75.75 0 0 0-1.06 0L9.568 13.37v-3.139a.75.75 0 0 0-1.5 0v4.95a.75.75 0 0 0 .75.75h4.95a.75.75 0 0 0 0-1.5h-3.14l5.084-5.084a.75.75 0 0 0 0-1.06", "fillRule": "evenodd"})
      ]
    );
  }
});

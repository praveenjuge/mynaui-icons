import { defineComponent, h } from 'vue';

export const OneCircle = defineComponent({
  name: 'OneCircle',
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
        h('path', {"d": "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12M13.5 8a.75.75 0 0 0-1.191-.607l-2.75 2a.75.75 0 1 0 .882 1.214l1.56-1.134V16a.75.75 0 1 0 1.5 0z", "fillRule": "evenodd"})
      ]
    );
  }
});

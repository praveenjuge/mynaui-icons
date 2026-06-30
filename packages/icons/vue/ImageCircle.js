import { defineComponent, h } from 'vue';

export const ImageCircle = defineComponent({
  name: 'ImageCircle',
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
        h('path', {"d": "M7.75 9a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0", "fillRule": "evenodd"}),
        h('path', {"d": "M20.16 10.78c-5.667-.42-10.375 3.7-10.41 9.16.715.202 1.47.31 2.25.31a8.25 8.25 0 0 0 8.16-9.47M8.268 19.36c.06-1.046.268-2.043.603-2.974-1.082-1.593-2.886-2.639-4.935-2.636a8.26 8.26 0 0 0 4.332 5.61M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m4-3a2.75 2.75 0 1 0 5.5 0 2.75 2.75 0 0 0-5.5 0m1.5 0a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0", "fillRule": "evenodd"})
      ]
    );
  }
});

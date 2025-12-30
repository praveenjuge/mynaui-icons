import { defineComponent, h } from 'vue';

export const Tag = defineComponent({
  name: 'Tag',
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
        h('path', {"d": "M4.472 4.75c-.597 0-1.293.166-1.862.519-.58.358-1.11.974-1.11 1.856v9.75c0 .882.53 1.497 1.11 1.856.57.353 1.265.519 1.862.519H14.77a2.75 2.75 0 0 0 1.92-.781l5.35-5.216a1.75 1.75 0 0 0 0-2.506l-5.35-5.216a2.75 2.75 0 0 0-1.92-.781z", "fillRule": "evenodd"})
      ]
    );
  }
});

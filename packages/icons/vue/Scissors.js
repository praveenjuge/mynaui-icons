import { defineComponent, h } from 'vue';

export const Scissors = defineComponent({
  name: 'Scissors',
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
        h('path', {"d": "M8.75 6.92c0 .675-.215 1.297-.579 1.807l3.619 2.376 8.798-5.778a.75.75 0 0 1 .824 1.254l-9.196 6.038-.029.019-4.016 2.637c.364.51.579 1.132.579 1.808 0 1.773-1.478 3.169-3.25 3.169s-3.25-1.396-3.25-3.17c0-1.773 1.478-3.169 3.25-3.169.53 0 1.035.126 1.482.349L10.423 12 6.982 9.74a3.3 3.3 0 0 1-1.482.349c-1.772 0-3.25-1.396-3.25-3.17 0-1.773 1.478-3.169 3.25-3.169s3.25 1.396 3.25 3.17m6.596 6.518a.75.75 0 1 0-.824 1.254l6.066 3.983a.75.75 0 1 0 .824-1.253z", "fillRule": "evenodd"})
      ]
    );
  }
});

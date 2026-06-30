import { defineComponent, h } from 'vue';

export const ArrowBigDownLeft = defineComponent({
  name: 'ArrowBigDownLeft',
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
        h('path', {"d": "M14.618 3.629c.474-.474 1.274-.53 1.785-.018l3.986 3.986c.512.511.456 1.311-.018 1.785l-6.51 6.51 2.601 2.54c.498.498.342 1.165.167 1.505-.181.355-.591.798-1.198.813H5.633c-.267 0-.511 0-.715-.017a1.8 1.8 0 0 1-.692-.178 1.8 1.8 0 0 1-.781-.781 1.8 1.8 0 0 1-.178-.692c-.017-.204-.017-.448-.017-.716V8.57c.015-.607.458-1.017.813-1.198.34-.175 1.007-.33 1.505.167l.006.006 2.534 2.594z", "fillRule": "evenodd"})
      ]
    );
  }
});

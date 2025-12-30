import { defineComponent, h } from 'vue';

export const MapPinned = defineComponent({
  name: 'MapPinned',
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
        h('path', {"d": "M17.127 16.255a.834.834 0 0 1 1.118.372l2 4a.835.835 0 0 1-.745 1.206h-15a.833.833 0 0 1-.745-1.206l2-4a.834.834 0 0 1 1.49.746L5.85 20.167h12.3l-1.396-2.794-.034-.078a.833.833 0 0 1 .406-1.04", "fillRule": "evenodd"}),
        h('path', {"d": "M12 1.167c1.848 0 3.602.806 4.883 2.21 2.348 2.577 2.32 5.652 1.253 8.375-1.056 2.693-3.154 5.144-5.17 6.742a1.54 1.54 0 0 1-1.932 0c-2.016-1.598-4.113-4.049-5.17-6.742C4.796 9.029 4.77 5.954 7.117 3.378 8.397 1.973 10.152 1.167 12 1.167m0 10.666a2.833 2.833 0 1 0 0-5.666 2.833 2.833 0 0 0 0 5.666", "fillRule": "evenodd"}),
        h('path', {"d": "M13.167 9a1.167 1.167 0 1 0-2.335 0 1.167 1.167 0 0 0 2.335 0", "fillRule": "evenodd"})
      ]
    );
  }
});

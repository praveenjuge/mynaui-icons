import { defineComponent, h } from 'vue';

export const Eclipse = defineComponent({
  name: 'Eclipse',
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
        h('path', {"d": "M10.833 3.832c-.737 5.292 4.105 10.058 9.335 9.335q.081-.57.082-1.167a8.25 8.25 0 0 0-9.417-8.168m-.8-1.383A9.8 9.8 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12q-.001 1.011-.199 1.967c-.91 4.442-4.84 7.783-9.551 7.783A9.75 9.75 0 0 1 2.25 12c0-4.711 3.341-8.64 7.783-9.551", "fillRule": "evenodd"})
      ]
    );
  }
});

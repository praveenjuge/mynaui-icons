import { defineComponent, h } from 'vue';

export const Shield = defineComponent({
  name: 'Shield',
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
        h('path', {"d": "M12.775 2.49a1.37 1.37 0 0 0-1.55 0l-.61.417a11.3 11.3 0 0 1-5.234 1.92 1.264 1.264 0 0 0-1.131 1.26v4.93c0 2.541 1.335 4.853 2.79 6.63 1.466 1.793 3.136 3.142 3.977 3.773a1.63 1.63 0 0 0 1.966 0c.841-.63 2.511-1.98 3.977-3.772 1.455-1.778 2.79-4.09 2.79-6.63V6.086c0-.64-.478-1.194-1.131-1.26a11.3 11.3 0 0 1-5.234-1.92z", "fillRule": "evenodd"})
      ]
    );
  }
});

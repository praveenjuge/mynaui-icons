import { defineComponent, h } from 'vue';

export const Pyramid = defineComponent({
  name: 'Pyramid',
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
        h('path', {"d": "M11.707 2.043c.421-.128.877.035 1.122.4l8.418 12.562c.489.73.243 1.7-.502 2.128l-8.249 4.734a1 1 0 0 1-.996 0l-8.245-4.734a1.493 1.493 0 0 1-.502-2.128l8.414-12.56a1 1 0 0 1 .54-.402", "fillRule": "evenodd"})
      ]
    );
  }
});

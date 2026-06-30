import { defineComponent, h } from 'vue';

export const Caravan = defineComponent({
  name: 'Caravan',
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
        h('path', {"d": "M11 16.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m2.18-8.5h3.848v-3.5H13.18zM22.75 15A3.75 3.75 0 0 1 19 18.75h-5.356a2.749 2.749 0 0 1-5.288 0H3A1.75 1.75 0 0 1 1.25 17v-1a.75.75 0 0 1 1.5 0v1c0 .138.112.25.25.25h1.75v-5.853c0-4.53 3.067-8.147 7.68-8.147H19A3.75 3.75 0 0 1 22.75 7z", "fillRule": "evenodd"})
      ]
    );
  }
});

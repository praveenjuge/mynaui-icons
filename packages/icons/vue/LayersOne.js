import { defineComponent, h } from 'vue';

export const LayersOne = defineComponent({
  name: 'LayersOne',
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
        h('path', {"d": "M12.305 7.315a.75.75 0 0 0-.61 0l-9 4a.75.75 0 0 0 0 1.37l9 4a.75.75 0 0 0 .61 0l9-4a.75.75 0 0 0 0-1.37z", "fillRule": "evenodd"})
      ]
    );
  }
});

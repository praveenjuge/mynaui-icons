import { defineComponent, h } from 'vue';

export const LayersThree = defineComponent({
  name: 'LayersThree',
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
        h('path', {"d": "M12.305 3.315a.75.75 0 0 0-.61 0l-9 4a.75.75 0 0 0 0 1.37l9 4a.75.75 0 0 0 .61 0l9-4a.75.75 0 0 0 0-1.37z", "fillRule": "evenodd"}),
        h('path', {"d": "M3.305 11.315a.75.75 0 0 0-.61 1.37l9 4a.75.75 0 0 0 .61 0l9-4a.75.75 0 0 0-.61-1.37L12 15.179z", "fillRule": "evenodd"}),
        h('path', {"d": "M3.305 15.315a.75.75 0 0 0-.61 1.37l9 4a.75.75 0 0 0 .61 0l9-4a.75.75 0 0 0-.61-1.37L12 19.179z", "fillRule": "evenodd"})
      ]
    );
  }
});

import { defineComponent, h } from 'vue';

export const Mountain = defineComponent({
  name: 'Mountain',
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
        h('path', {"d": "m12.674 4.705 2.654 6.025a2.39 2.39 0 0 1 3.587.94l2.596 5.542c.75 1.603-.36 3.538-2.177 3.538H4.665c-1.81 0-2.922-1.924-2.181-3.527l5.808-12.56c.88-1.905 3.537-1.877 4.382.042", "fillRule": "evenodd"})
      ]
    );
  }
});

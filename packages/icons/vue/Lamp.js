import { defineComponent, h } from 'vue';

export const Lamp = defineComponent({
  name: 'Lamp',
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
        h('path', {"d": "M10.386 2.25A2.75 2.75 0 0 0 7.8 4.065l-2.513 7.702A.75.75 0 0 0 6 12.75h5.25v7.5H9a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-2.25v-7.5H18a.75.75 0 0 0 .713-.983L16.2 4.065l-.011-.03a2.75 2.75 0 0 0-2.575-1.785z", "fillRule": "evenodd"})
      ]
    );
  }
});

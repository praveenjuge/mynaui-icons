import { defineComponent, h } from 'vue';

export const MapPinMinusInside = defineComponent({
  name: 'MapPinMinusInside',
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
        h('path', {"d": "M12 1.167c2.363 0 4.623.965 6.286 2.676 3.06 3.147 3.04 6.919 1.63 10.288-1.393 3.33-4.163 6.363-6.822 8.339a1.83 1.83 0 0 1-2.188 0c-2.66-1.976-5.43-5.01-6.822-8.34-1.41-3.368-1.43-7.14 1.63-10.287A8.77 8.77 0 0 1 12 1.167M15.25 10a.75.75 0 0 0-.75-.75h-5a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 .75-.75", "fillRule": "evenodd"})
      ]
    );
  }
});

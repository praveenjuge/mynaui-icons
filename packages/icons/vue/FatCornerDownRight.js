import { defineComponent, h } from 'vue';

export const FatCornerDownRight = defineComponent({
  name: 'FatCornerDownRight',
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
        h('path', {"d": "M14.309 3.504A.75.75 0 0 0 12.997 4v4.382c-1.255.138-2.576.057-3.969-.252-1.434-.318-3.25-1.722-5.438-4.515a.75.75 0 0 0-1.336.535c.32 3.311 1.536 6.112 3.661 8.365 1.963 2.08 4.334 3.228 7.082 3.422V20a.75.75 0 0 0 1.299.511l7.253-7.786a.75.75 0 0 0 .013-1.008z", "fillRule": "evenodd"})
      ]
    );
  }
});

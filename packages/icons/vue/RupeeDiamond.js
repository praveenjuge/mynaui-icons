import { defineComponent, h } from 'vue';

export const RupeeDiamond = defineComponent({
  name: 'RupeeDiamond',
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
        h('path', {"d": "M10.79 1.49a3.2 3.2 0 0 0-1.025.686L2.177 9.765a3.16 3.16 0 0 0 0 4.47l7.588 7.588a3.16 3.16 0 0 0 4.47 0l7.588-7.588a3.16 3.16 0 0 0 0-4.47l-7.588-7.588a3.16 3.16 0 0 0-3.445-.686M8.25 7.5A.75.75 0 0 1 9 6.75h6a.75.75 0 0 1 0 1.5h-1.794c.238.393.395.83.476 1.278H15a.75.75 0 0 1 0 1.5h-1.318a3.65 3.65 0 0 1-.721 1.628 3.03 3.03 0 0 1-2.214 1.141l3.045 3.185a.75.75 0 0 1-1.084 1.036l-4.25-4.444A.75.75 0 0 1 9 12.306h1.5c.6 0 1.012-.24 1.29-.587a2 2 0 0 0 .352-.691H9a.75.75 0 0 1 0-1.5h3.142a2 2 0 0 0-.352-.691c-.278-.347-.69-.587-1.29-.587H9a.75.75 0 0 1-.75-.75", "fillRule": "evenodd"})
      ]
    );
  }
});

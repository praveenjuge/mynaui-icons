import { defineComponent, h } from 'vue';

export const XTwitter = defineComponent({
  name: 'XTwitter',
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
        h('path', {"d": "M19.57 4.488a.75.75 0 0 0-1.14-.976l-5.368 6.274-5.224-5.938a1.8 1.8 0 0 0-1.357-.598H5.007c-.68 0-1.264.352-1.56.885a1.55 1.55 0 0 0 .204 1.795l6.286 7.147-5.507 6.435a.75.75 0 1 0 1.14.976l5.368-6.274 5.224 5.938c.345.392.85.598 1.357.598h1.474c.681 0 1.264-.352 1.56-.885a1.55 1.55 0 0 0-.203-1.795l-6.287-7.146z", "fillRule": "evenodd"})
      ]
    );
  }
});

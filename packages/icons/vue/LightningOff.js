import { defineComponent, h } from 'vue';

export const LightningOff = defineComponent({
  name: 'LightningOff',
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
        h('path', {"d": "M16.637 3.813c.192-.765-.371-1.563-1.212-1.563h-4.518a1.25 1.25 0 0 0-1.151.768L5.85 12.146l-.005.011c-.311.76.18 1.62.989 1.725l.166.01.076-.003a.747.747 0 0 0 .263-1.412l3.736-8.727h3.987l-.224.574a.75.75 0 0 0 1.398.545l.352-.903zm3.889-1.395a.75.75 0 0 1 1.056 1.056l-.052.056-5.82 5.82H17c.985 0 1.532 1.054 1.1 1.854l-.1.156-7.47 10.047c-.54.725-1.621.224-1.527-.605l.607-5.353-6.08 6.081a.75.75 0 1 1-1.06-1.06l18-18z", "fillRule": "evenodd"})
      ]
    );
  }
});

import { defineComponent, h } from 'vue';

export const Crop = defineComponent({
  name: 'Crop',
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
        h('path', {"d": "M7.35 3a.75.75 0 0 0-1.5 0v2.85H3a.75.75 0 1 0 0 1.5h2.85v5.282c0 .813 0 1.469.043 2 .045.546.14 1.026.366 1.47a3.75 3.75 0 0 0 1.639 1.64c.444.226.924.32 1.47.365.531.043 1.187.043 2 .043h5.282V21a.75.75 0 1 0 1.5 0v-2.85H21a.75.75 0 1 0 0-1.5h-2.85v-5.282c0-.813 0-1.469-.043-2-.045-.546-.14-1.026-.366-1.47a3.75 3.75 0 0 0-1.639-1.64c-.444-.226-.924-.32-1.47-.365-.531-.043-1.187-.043-2-.043H7.35z", "fillRule": "evenodd"})
      ]
    );
  }
});

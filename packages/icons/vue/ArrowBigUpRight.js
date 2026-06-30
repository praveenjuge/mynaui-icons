import { defineComponent, h } from 'vue';

export const ArrowBigUpRight = defineComponent({
  name: 'ArrowBigUpRight',
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
        h('path', {"d": "M19.083 3.267a1.8 1.8 0 0 1 .691.178c.336.171.61.445.781.781.12.234.16.472.178.692.017.203.017.448.017.716v9.797c-.015.607-.458 1.017-.812 1.198-.341.175-1.008.33-1.506-.167l-.006-.006-2.534-2.594-6.51 6.51c-.473.473-1.273.529-1.785.017L3.61 16.404c-.511-.512-.456-1.312.018-1.786l6.51-6.51-2.601-2.54c-.498-.498-.342-1.165-.167-1.505.181-.355.591-.798 1.198-.813h9.798c.267 0 .512 0 .715.017", "fillRule": "evenodd"})
      ]
    );
  }
});

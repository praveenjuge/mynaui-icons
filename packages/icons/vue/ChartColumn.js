import { defineComponent, h } from 'vue';

export const ChartColumn = defineComponent({
  name: 'ChartColumn',
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
        h('path', {"d": "M2 14.6V3a1 1 0 0 1 2 0v11.6c0 1.136 0 1.929.05 2.545.05.606.143.954.277 1.217l.115.206c.289.47.702.853 1.196 1.105l.103.049c.251.108.584.184 1.113.227C7.471 20 8.264 20 9.4 20H21l.102.005a1 1 0 0 1 0 1.99L21 22H9.4c-1.103 0-1.991.001-2.709-.058-.637-.052-1.208-.154-1.737-.381l-.224-.106a5 5 0 0 1-2.092-2.01l-.093-.175c-.302-.593-.428-1.233-.487-1.961C1.999 16.59 2 15.703 2 14.599M6.5 17v-7a1 1 0 0 1 2 0v7a1 1 0 1 1-2 0m4.5 0V7a1 1 0 1 1 2 0v10a1 1 0 1 1-2 0m4.5 0v-5a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0", "fillRule": "evenodd"})
      ]
    );
  }
});

import { defineComponent, h } from 'vue';

export const VideoOff = defineComponent({
  name: 'VideoOff',
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
        h('path', {"d": "M5 5.5a2.75 2.75 0 0 0-2.75 2.75v7.5a2.75 2.75 0 0 0 2.237 2.702L2.47 20.47a.75.75 0 1 0 1.06 1.06l3.03-3.03h6.94a2.75 2.75 0 0 0 2.75-2.75v-1.594l3.419 3.045c.805.717 2.081.145 2.081-.934V7.365c0-1.08-1.276-1.651-2.081-.934L16.25 9.476V8.81l5.28-5.28a.75.75 0 0 0-1.06-1.061l-4.523 4.523A2.75 2.75 0 0 0 13.5 5.5z", "fillRule": "evenodd"})
      ]
    );
  }
});

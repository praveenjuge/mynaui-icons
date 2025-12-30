import { defineComponent, h } from 'vue';

export const Video = defineComponent({
  name: 'Video',
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
        h('path', {"d": "M5 5.5a2.75 2.75 0 0 0-2.75 2.75v7.5A2.75 2.75 0 0 0 5 18.5h8.5a2.75 2.75 0 0 0 2.75-2.75v-1.594l3.419 3.045c.805.717 2.081.145 2.081-.934V7.365c0-1.08-1.276-1.651-2.081-.934L16.25 9.476V8.25A2.75 2.75 0 0 0 13.5 5.5z", "fillRule": "evenodd"})
      ]
    );
  }
});

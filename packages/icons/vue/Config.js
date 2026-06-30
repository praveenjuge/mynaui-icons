import { defineComponent, h } from 'vue';

export const Config = defineComponent({
  name: 'Config',
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
        h('path', {"d": "M13.75 2.25a.75.75 0 0 1 .75.75v4A.75.75 0 0 1 13 7V5.75H3a.75.75 0 0 1 0-1.5h10V3a.75.75 0 0 1 .75-.75M17.25 5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75m-6.5 4.25a.75.75 0 0 1 .75.75v1.25H21a.75.75 0 0 1 0 1.5h-9.5V14a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75M2.25 12a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m11.5 4.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-1.25H3a.75.75 0 0 1 0-1.5h10V17a.75.75 0 0 1 .75-.75m3.5 2.75a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75", "fillRule": "evenodd"})
      ]
    );
  }
});

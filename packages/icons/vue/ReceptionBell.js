import { defineComponent, h } from 'vue';

export const ReceptionBell = defineComponent({
  name: 'ReceptionBell',
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
        h('path', {"d": "M22.25 19.5a.75.75 0 0 0-.75-.75h-19a.75.75 0 0 0 0 1.5h19a.75.75 0 0 0 .75-.75m-2.111-3.214a.75.75 0 0 1-.75.75H4.61a.75.75 0 0 1-.75-.75v-3.215c0-3.362 2.688-6.107 6.028-6.107h1.361V5.25h-1.36a.75.75 0 0 1 0-1.5h4.222l.076.004a.75.75 0 0 1 0 1.492l-.076.004H12.75v1.714h1.361c3.34 0 6.028 2.745 6.028 6.107z", "fillRule": "evenodd"})
      ]
    );
  }
});

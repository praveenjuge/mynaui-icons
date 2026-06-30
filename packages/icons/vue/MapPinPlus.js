import { defineComponent, h } from 'vue';

export const MapPinPlus = defineComponent({
  name: 'MapPinPlus',
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
        h('path', {"d": "M18.406 3.727A8.94 8.94 0 0 0 12 1a8.94 8.94 0 0 0-6.406 2.727c-3.12 3.208-3.09 7.056-1.663 10.468 1.407 3.365 4.2 6.42 6.876 8.409a1.995 1.995 0 0 0 2.386 0q.739-.55 1.468-1.19a1 1 0 1 0-1.322-1.5c-.444.39-.895.754-1.34 1.084-2.474-1.838-4.991-4.629-6.224-7.575-1.212-2.899-1.154-5.826 1.253-8.302A6.93 6.93 0 0 1 12 3c1.86 0 3.648.76 4.972 2.121 1.97 2.027 2.35 4.326 1.797 6.648a1 1 0 0 0 1.947.462c.688-2.893.201-5.922-2.31-8.504M16.5 17.5V19a1 1 0 1 0 2 0v-1.5H20a1 1 0 0 0 0-2h-1.5V14a1 1 0 0 0-2 0v1.5H15a1 1 0 1 0 0 2z", "fillRule": "evenodd"}),
        h('path', {"d": "M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6", "fillRule": "evenodd"})
      ]
    );
  }
});

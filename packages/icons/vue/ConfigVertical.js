import { defineComponent, h } from 'vue';

export const ConfigVertical = defineComponent({
  name: 'ConfigVertical',
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
        h('path', {"d": "M19 2.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75m-7 0a.75.75 0 0 1 .75.75v9.5H14a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5h1.25V3a.75.75 0 0 1 .75-.75m-7 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V3A.75.75 0 0 1 5 2.25m-2.75 8A.75.75 0 0 1 3 9.5h4A.75.75 0 0 1 7 11H5.75v10a.75.75 0 0 1-1.5 0V11H3a.75.75 0 0 1-.75-.75m14 0A.75.75 0 0 1 17 9.5h4a.75.75 0 0 1 0 1.5h-1.25v10a.75.75 0 0 1-1.5 0V11H17a.75.75 0 0 1-.75-.75m-4.25 6a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75", "fillRule": "evenodd"})
      ]
    );
  }
});

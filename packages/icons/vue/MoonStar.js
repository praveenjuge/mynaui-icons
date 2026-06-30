import { defineComponent, h } from 'vue';

export const MoonStar = defineComponent({
  name: 'MoonStar',
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
        h('path', {"d": "M18.5 3.25a.75.75 0 0 1 .75.75v.75H20a.75.75 0 0 1 0 1.5h-.75V7a.75.75 0 0 1-1.5 0v-.75H17a.75.75 0 0 1 0-1.5h.75V4a.75.75 0 0 1 .75-.75m-6.788.2a.75.75 0 0 0-.668-1.197c-5.414.494-8.436 4.752-8.764 9.105-.328 4.361 2.037 8.975 7.451 10.166 5.686 1.25 11.472-2.837 12.016-8.646a.75.75 0 0 0-1.189-.676c-2.837 2.069-6.08 1.316-8.136-.724-2.054-2.039-2.8-5.239-.71-8.028", "fillRule": "evenodd"})
      ]
    );
  }
});

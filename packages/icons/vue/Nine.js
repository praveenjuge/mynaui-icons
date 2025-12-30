import { defineComponent, h } from 'vue';

export const Nine = defineComponent({
  name: 'Nine',
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
        h('path', {"d": "M11.875 7.75a2.375 2.375 0 0 1 2.375 2.375c0 .63-.24 1.026-.605 1.29-.396.286-1.005.46-1.77.46s-1.374-.174-1.77-.46c-.364-.264-.605-.66-.605-1.29a2.375 2.375 0 0 1 2.375-2.375m2.375 5.058v.442a3 3 0 0 1-3 3H10a.75.75 0 0 0 0 1.5h1.25a4.5 4.5 0 0 0 4.5-4.5v-3.125a3.875 3.875 0 0 0-7.75 0c0 1.095.459 1.95 1.226 2.505.734.532 1.688.745 2.649.745.845 0 1.685-.165 2.375-.567", "fillRule": "evenodd"})
      ]
    );
  }
});

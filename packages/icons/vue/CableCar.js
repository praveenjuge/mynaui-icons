import { defineComponent, h } from 'vue';

export const CableCar = defineComponent({
  name: 'CableCar',
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
        h('path', {"d": "M17.313 21.25a3.937 3.937 0 0 0 3.937-3.937v-4.25a3.937 3.937 0 0 0-3.937-3.938H13.15l1.444-3.268 5.844.474a.75.75 0 0 0 .122-1.495l-6.341-.514L3.61 2.758l-.077-.007a.75.75 0 0 0-.218 1.476l.076.015 9.65 1.423-1.53 3.46H6.689a3.94 3.94 0 0 0-3.938 3.938v4.25a3.94 3.94 0 0 0 3.938 3.937zM8.5 19.75v-3.812h7v3.812zm8.5-3.812h2.75v1.374a2.437 2.437 0 0 1-2.437 2.438H17zM4.25 17.312v-1.375H7v3.813h-.312a2.437 2.437 0 0 1-2.438-2.437", "fillRule": "evenodd"})
      ]
    );
  }
});

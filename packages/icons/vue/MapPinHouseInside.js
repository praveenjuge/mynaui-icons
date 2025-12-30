import { defineComponent, h } from 'vue';

export const MapPinHouseInside = defineComponent({
  name: 'MapPinHouseInside',
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
        h('path', {"d": "M13.417 9.063V11a.167.167 0 0 1-.167.167h-2.5a.167.167 0 0 1-.167-.167V9.063L12 8.031z", "fillRule": "evenodd"}),
        h('path', {"d": "M18.286 3.843A8.77 8.77 0 0 0 12 1.167a8.77 8.77 0 0 0-6.286 2.676c-3.06 3.147-3.04 6.919-1.63 10.288 1.393 3.33 4.163 6.363 6.822 8.339a1.83 1.83 0 0 0 2.188 0c2.66-1.976 5.43-5.01 6.822-8.34 1.41-3.368 1.43-7.14-1.63-10.287m-5.036 8.99h-2.5A1.833 1.833 0 0 1 8.917 11V8.64c0-.266.127-.516.342-.673l2.25-1.64a.83.83 0 0 1 .982 0l2.25 1.64a.83.83 0 0 1 .342.674V11c0 1.012-.82 1.833-1.833 1.833", "fillRule": "evenodd"})
      ]
    );
  }
});

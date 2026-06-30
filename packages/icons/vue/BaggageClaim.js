import { defineComponent, h } from 'vue';

export const BaggageClaim = defineComponent({
  name: 'BaggageClaim',
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
        h('path', {"d": "M17 14.25a1.75 1.75 0 0 0 1.75-1.75v-5A1.75 1.75 0 0 0 17 5.75h-2.31c-.127-.785-.457-1.436-.936-1.924a3.15 3.15 0 0 0-2.254-.94 3.16 3.16 0 0 0-2.254.941c-.478.487-.807 1.139-.935 1.923H6A1.75 1.75 0 0 0 4.25 7.5v5c0 .966.784 1.75 1.75 1.75zm-5.5-9.863c.435 0 .864.165 1.184.49.2.204.375.49.475.873H9.842c.1-.382.274-.667.474-.871.32-.326.749-.492 1.184-.492", "fillRule": "evenodd"}),
        h('path', {"d": "M16 21.25a2.75 2.75 0 0 0 2.447-4H19a2.75 2.75 0 0 0 2.75-2.75v-11a.75.75 0 0 0-1.5 0v11A1.25 1.25 0 0 1 19 15.75H3a.75.75 0 0 0 0 1.5h1.553a2.75 2.75 0 1 0 4.895 0h4.105a2.75 2.75 0 0 0 2.447 4", "fillRule": "evenodd"})
      ]
    );
  }
});

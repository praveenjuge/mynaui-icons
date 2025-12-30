import { defineComponent, h } from 'vue';

export const TrendingDown = defineComponent({
  name: 'TrendingDown',
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
        h('path', {"d": "M20.75 10a.75.75 0 0 0-1.28-.53l-2.939 2.938-1.842-1.872-.002-.002c-.666-.672-1.41-.857-2.144-.749-.652.096-1.286.427-1.768.667-.543.27-.942.454-1.303.491-.283.03-.573-.025-.928-.397l-.009-.009-4-4.063a.75.75 0 0 0-1.07 1.052l4.002 4.063c.666.694 1.408.925 2.161.846.678-.07 1.321-.394 1.816-.64.553-.276.952-.472 1.317-.525.283-.042.544 0 .86.32l1.85 1.879-3.001 3A.75.75 0 0 0 13 17.75h7l.077-.004A.75.75 0 0 0 20.75 17z", "fillRule": "evenodd"})
      ]
    );
  }
});

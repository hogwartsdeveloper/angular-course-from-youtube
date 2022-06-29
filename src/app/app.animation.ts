import {animate, group, keyframes, state, style, transition, trigger} from "@angular/animations";

export const divTrigger = trigger('divTrigger', [
  // void => *
  transition(':enter', [
    style({
      width: '*',
      height: '*'
    }),
    group([
      animate(3000, style({
        width: '200px',
        height: '200px'
      })),
      animate(6000, keyframes([
        style({backgroundColor: 'red'}),
        style({backgroundColor: 'yellow'}),
        style({backgroundColor: 'pink'}),
      ]))
    ]),
    animate(1000)
  ]),

  // * => void
  transition(':leave', animate(500,
    style({opacity: 0})
  ))
])

export const changeWidthTrigger = trigger('changeWidth', [
  transition('* => *', [
    animate(1000, style({
      width: '10px',
      height: '100px'
    })),
    animate(1000, style({
      width: '*',
      height: '*'
    }))
  ])
])

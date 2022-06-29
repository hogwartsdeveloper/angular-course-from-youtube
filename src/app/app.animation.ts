import {animate, state, style, transition, trigger} from "@angular/animations";

export const divTrigger = trigger('divTrigger', [
  state('show', style({
  })),
  transition('void => show', [
    style({
      opacity: 0
    }),
    animate(500, style({opacity: 1}))
  ]),
  transition('show => void', animate(500,
    style({opacity: 0})
  ))
])

import { style } from '@angular/animations';

export const slideOutRight = [
  style({ transform: 'translate3d(0,0,0)', offset: 0 }),
  style({
    visibility: 'hidden',
    transform: 'translate3d(100%, 0, 0)',
    offset: 1,
  }),
];
export const slideOutLeft = [
  style({ transform: 'translate3d(0,0,0)', offset: 0 }),
  style({ transform: 'translate3d(-100%, 0, 0)', offset: 1 }),
];

export const slideOutUp = [
  style({ transform: 'translate3d(0,0,0)', offset: 0 }),
  style({
    visibility: 'hidden',
    transform: 'translate3d(0,-100%, 0)',
    offset: 1,
  }),
];

export const slideOutDown = [
  style({ transform: 'translate3d(0,0,0)', offset: 0 }),
  style({
    visibility: 'hidden',
    transform: 'translate3d(0,100%, 0)',
    offset: 1,
  }),
];

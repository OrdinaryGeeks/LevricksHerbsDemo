import {animation,
  trigger,
  state,
  style,
  animate,
  transition,
  } from '@angular/animations';

export class Animations {








}
export const transitionAnimation = animation([
  style({
    height: '{{ height }}',
    width: '{{width}}',
    color: '{{color}}'
  }),
  animate('{{ time }}')
]);
export const selectionAnimation = animation([
  style({
    height: '{{ height }}',
    width: '{{width}}',
    color: '{{color}}',
    backgroundColor: '{{backgroundColor}}'
  }),
  animate('{{ time }}')
]);
export const spinAnimation = animation([
  style({
    transform: 'rotate{{degrees}}'


  }),
  animate('{{time}}')
]);

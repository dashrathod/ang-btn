import { trigger, style, state, transition, animate } from '@angular/animations';

export let downToUpAnimation = trigger('downToUpAnimation', [
    state('default', style({})),
    state('up', style({ width: '200px', marginBottom: '60px' })),
    transition('default=>up', animate('1000ms ease-in-out'))
]);

export let hideToShowAnimation = trigger('hideToShowAnimation', [
    state('default', style({ height: '0' })),
    state('up', style({})),
    transition('default => up', animate('1000ms ease-in-out'))
]);

export let hideToShowAnimation1 = trigger('hideToShowAnimation1', [
    state('default', style({ opacity: 0 })),
    state('up', style({ opacity: 1 })),
    transition('default => up', animate('500ms 900ms ease-in'))
]);
export let sideNavDrawer = trigger('sideNavDrawer', [
    state('initial', style({
        width: '0',
        padding: '0',
        margin: '0',
        whiteSpace: 'nowrap',
    })),
    state('final', style({
        minWidth: '180px',
        whiteSpace: 'nowrap',
    })),
    transition('initial=>final', animate('150ms')),
    transition('final=>initial', animate('150ms'))
]);
export let sideNavContent = trigger('sideNavContent', [
    state('initial', style({
        marginLeft: '50px',
    })),
    state('final', style({
        marginLeft: '230px',
    })),
    transition('initial=>final', animate('150ms')),
    transition('final=>initial', animate('150ms'))
]);
export const fadeInOut = trigger('fadeInOut', [
    state('void', style({ opacity: 0 })),
    transition(':enter', [
        style({ opacity: 0 }),
        animate('{{ speed }} {{ delay }} ease-in', style({ opacity: 1 }))
    ], { params: { speed: '500ms', delay: '0ms' } }),
    transition(':leave', [
        // style({ transform: 'translateX(0%)' }),
        animate('{{ speed }} ease-out', style({ opacity: 0 }))
    ], { params: { speed: '500ms', delay: '0ms' } })
]);
export const fadeIn = trigger('fadeInAnimation', [
    state('in', style({ opacity: 1 })),
    // fade in when created. this could also be written as transition('void => *')
    transition(':enter', [
        style({ opacity: 0 }),
        animate(600)
    ]),
    // fade out when destroyed. this could also be written as transition('void => *')
    transition(':leave',
        animate(600, style({ opacity: 0 })))
]);
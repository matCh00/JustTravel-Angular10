# Just Travel - Angular 10

## old Angular structure and best practices

---------------------
<style>
x { color: orange }
g { color: gold }
</style>

### Angular features

* **features**:
    * general:
        * state: <x>BehaviorSubject</x> - <x>asObservable()</x> - <x>| async</x>
        * async: <x> Observable | async </x>
        * async detection: <x> Observable.subscribe() </x>
        * destroy: <x> ngOnDestroy </x>
        * defer: <x> pDefer </x>
        * dialog: template <x> p-dialog </x>
        * routing: <x> routing.module </x>
        * resolver: <x> Resolve </x>
        * route params: <x> activatedRoute.paramMap </x>
        * form: <x> Template Driven </x>
        * extract form: <x> viewProviders </x>: <x>ControlContainer + NgForm</x>
        * ElementRef: <x> @ViewChild() </x>
    * template flow:
        * <x> *ngIf </x>, <x> *ngIf + ng-container </x>
        * <x> *ngFor </x>
        * <x> [ngSwitch] </x>
    * component:
        * <x> basic variable </x>
        * <x> @Input() </x>
        * <x> @Output() </x>
        * two-way: <x> @Input() + @Output() </x>
        * injectable: <x> constructor() </x>
    * animations:
        * class binding: <x> [class.animate] </x>


* **PrimeNg components**:
    * p-toolbar
    * p-sidebar
    * p-carousel
    * p-progressSpinner
    * p-table
    * pButton
    * p-calendar


* **other**:
    * <x>@angular/google-maps</x>
    * <x>dynamic scss variables</x> - _app.component.ts_
    * <x>theme</x> - _styles.scss_
    * <x>lazy loading</x> - _app-routing.module.ts_

------------------

### Structure

* **[core](app/src/app/core)** - _module with layout components_
    * footer
    * header
    * sidebar


* **[feature](app/src/app/feature)** - _folder with feature modules_
    * [explore](app/src/app/feature/explore)
        * places-carousel
        * _component, routing_
    * [home](app/src/app/feature/home)
        * hero
        * instruction
        * _component, routing_
    * [travel](app/src/app/feature/travel)
        * trip-details-form
        * _component, routing, resolver_
    * [travels](app/src/app/feature/travels)
        * trip-dialog-form
        * trip-list
        * _component, routing_


* **[shared](app/src/app/shared)** - _module with shared elements_
    * components
        * google-maps
        * google-maps-game
        * nav-buttons
    * models
        * location.model
        * place.model
        * trip.model
    * services
        * api.service
        * scroll.service
        * trip.service

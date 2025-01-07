# Just Travel - Angular 10

## old Angular structure and best practices

---------------------
<style>
x { color: orange }
g { color: gold }
</style>

### Angular features

* **project features**:
    * animations:
        * <x>class binding + @keyframes</x>
    * related flow
        * <x>@Input()</x>
        * <x>@Output()</x>
        * two-way: <x>@Input() + @Output()</x>
    * component flow:
        * <x>basic variables</x>
        * async: <x>Observable + async Pipe</x>
        * destroy: <x>OnDestroy</x>
    * injectable:
        * <x>constructor()</x>
    * html flow:
        * <x>ng-container + *ngIf</x>
        * defer: <x>pDefer</x>


* **other features**:
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
        * map
        * places-carousel
        * _component_
    * [home](app/src/app/feature/home)
        * hero
        * instruction
        * nav-buttons
        * _component_
    * [travel](app/src/app/feature/travel)
        * map
        * _component, routes_
    * [travels](app/src/app/feature/travels)
        * trip-dialog
        * trip-list
        * _component, routes_


* **[shared](app/src/app/shared)** - _module with shared elements_
    * components
        * google-map
    * models
        * place.model
        * trip.model
    * services
        * api.service

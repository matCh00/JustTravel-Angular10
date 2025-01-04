# Just Travel - Angular 10

## old Angular structure and best practices

---------------------
<style>
x { color: orange }
g { color: gold }
</style>

<br>

* **[core](app/src/app/core)** - _module with layout components_
  * footer
  * header
    * <x>@Output()</x>
    * <x>animation: class binding + @keyframes</x>
  * sidebar
    * <x>two-way: @Input() + @Output()</x>

<br>

* **[feature](app/src/app/feature)** - _folder with feature modules_
  * [admin-panel](app/src/app/feature/admin-panel)
    * dashboard
    * users-list
    * _component, module, routing module_
      * <x>not lazy</x>
      * <x>defer: pDefer</x>
  * [map](app/src/app/feature/map)
    * _component, module, routing module_
      * <x>not lazy</x>
  * [review](app/src/app/feature/review)
    * review-form
    * review-list
    * _component, module, routing module_
      * <x>not lazy</x>
  * [travel](app/src/app/feature/travel)
    * travel-carousel
      * <x>basic variables</x>
      * <x>OnDestroy</x>
      * <x>constructor()</x>
      * <x>ng-container + *ngIf</x>
    * travel-details
    * travel-list
    * _component, module, routing module_
      * <x>not lazy</x>  
      * <x>defer: pDefer</x>

<br>

* **[shared](app/src/app/shared)** - _module with shared elements_
  * models
  * services
    * file.service
      * <x>constructor()</x>

<br>

* other features:
  * <x>dynamic scss variables</x> - _app.component.ts_
  * <x>theme</x> - _styles.scss_   
  * <x>lazy loading</x> - _app-routing.module.ts_   

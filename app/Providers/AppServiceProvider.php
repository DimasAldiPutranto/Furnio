<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Pagination\Paginator;
use Livewire\Livewire;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Paginator::useBootstrapFive();
        Livewire::component('admin.sidebar', \App\Http\Livewire\Admin\Sidebar::class);
        Livewire::component('admin.header', \App\Http\Livewire\Admin\Header::class);
        Livewire::component('admin.footer', \App\Http\Livewire\Admin\Footer::class);
    }
}

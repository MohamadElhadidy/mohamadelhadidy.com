<?php

use App\Livewire\Frontend\ContactPage;
use App\Livewire\Frontend\Home\HomePage;
use App\Livewire\Frontend\ProjectPage;
use App\Livewire\Frontend\ServicePage;
use Illuminate\Support\Facades\Route;


// Frontend
Route::get('/', HomePage::class)->name('home');
Route::get('/services/{service}', ServicePage::class)->name('service');
Route::get('/projects/{project}', ProjectPage::class)->name('project');
Route::get('/contact', ContactPage::class)->name('contact');



Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');
});

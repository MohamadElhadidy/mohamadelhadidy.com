<?php

use App\Livewire\Frontend\ContactPage;
use App\Livewire\Frontend\Home\HomePage;
use App\Livewire\Frontend\ProjectPage;
use App\Livewire\Frontend\ServicePage;
use Illuminate\Support\Facades\Route;

Route::get('/', HomePage::class)->name('home');
Route::get('/services/{service}', ServicePage::class)->name('services');
Route::get('/projects/{project}', ProjectPage::class)->name('projects');
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

<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\HomeController;
use App\Http\Controllers\EdukasiController;
use App\Http\Controllers\KonektivitasController;
use App\Http\Controllers\TelemedicineController;
use App\Http\Controllers\umkmController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/HomePage', function () {
    return Inertia::render('HomePage');
})->name('homepage');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Other routes for authenticated users
    Route::get('/HomePage', [HomeController::class, 'index'])->name('home');
    Route::get('/edukasi', [EdukasiController::class, 'index'])->name('edukasi');
    Route::get('/konektivitas', [KonektivitasController::class, 'index'])->name('konektivitas');
    Route::get('/pelatihan', [UmkmController::class, 'index'])->name('pelatihan');
    Route::get('/telemedicine', [TelemedicineController::class, 'index'])->name('telemedicine');
});

require __DIR__.'/auth.php';

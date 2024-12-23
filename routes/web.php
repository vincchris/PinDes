<?php

use App\Http\Controllers\ChatBotController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\EdukasiController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\KonektivitasController;
use App\Http\Controllers\LayananController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TelemedicineController;
use App\Http\Controllers\umkmController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/HomePage', [HomeController::class, 'index'])->name('home');

// Route::get('/Chatbot', [ChatBotController::class, 'index'])->name('chatbot');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Other routes for authenticated users
    Route::get('/Chatbot', [ChatBotController::class, 'index'])->name('chatbot');
    Route::get('/Contactus', [ContactController::class, 'index'])->name('contact');
    Route::get('/Layanan', [LayananController::class, 'index'])->name('layanan');


    Route::get('/EdukasiPage', [EdukasiController::class, 'index'])->name('edukasi');
    Route::get('/VillagePage', [KonektivitasController::class, 'index'])->name('konektivitas');
    Route::get('/UmkmPage', [UmkmController::class, 'index'])->name('pelatihan');
    Route::get('/TelemedicinePage', [TelemedicineController::class, 'index'])->name('telemedicine');

});

require __DIR__ . '/auth.php';

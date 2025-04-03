<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\SuperAdminController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Middleware\RoleMiddleware;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::middleware(['auth', 'verified', 'role:admin,superadmin',])->group(function () {
    Route::get('/admin/users', [AdminController::class, 'index'])->name('admin.index');
});

Route::middleware(['auth', 'verified', 'role:superadmin'])->group(function() {
    Route::get('/superadmin/system-controls', [SuperAdminController::class, 'index'])->name('superadmin.index');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\SuperAdminController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Middleware\RoleMiddleware;

Route::get('/', function () {
    return Inertia::render('auth/login');
})->name('home');

Route::middleware(['auth', 'verified', 'role:user,admin,superadmin'])->group(function () {
    Route::get('/dashboard', [UserController::class, 'index'])->name('dashboard');
    Route::get('/violations', [UserController::class, 'violations']);
});

Route::middleware(['auth', 'verified', 'role:admin,superadmin',])->group(function () {
    Route::get('/admin/users', [AdminController::class, 'index'])->name('admin.index');
});

Route::middleware(['auth', 'verified', 'role:superadmin'])->group(function() {
    Route::get('/superadmin/system-controls', [SuperAdminController::class, 'index'])->name('superadmin.index');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

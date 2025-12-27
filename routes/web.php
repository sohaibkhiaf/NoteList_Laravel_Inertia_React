<?php

use App\Http\Controllers\PublicationController;
use Illuminate\Support\Facades\Route;

Route::get('/', [PublicationController::class,'index'])->name('publications');
Route::get('/publications/{publication}/show', [PublicationController::class,'show'])->name('publications.show');

Route::middleware('auth')->group(function () {
    Route::get('/publications/{publication}/edit', [PublicationController::class,'edit'])->name('publications.edit');
    Route::get('/publications/create', [PublicationController::class,'create'])->name('publications.create');
    Route::post('/publications/store', [PublicationController::class,'store'])->name('publications.store');
    Route::post('/publications/{publication}/update', [PublicationController::class,'update'])->name('publications.update');
    Route::post('/publications/{publication}/destroy', [PublicationController::class,'destroy'])->name('publications.destroy');
});


require __DIR__.'/auth.php';

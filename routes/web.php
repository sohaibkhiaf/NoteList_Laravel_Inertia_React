<?php

use App\Http\Controllers\NoteController;
use Illuminate\Support\Facades\Route;

Route::get('/', [NoteController::class,'index'])->name('notes');
Route::get('/notes/{note}/show', [NoteController::class,'show'])->name('notes.show');

Route::middleware('auth')->group(function () {
    Route::get('/notes/{note}/edit', [NoteController::class,'edit'])->name('notes.edit');
    Route::get('/notes/create', [NoteController::class,'create'])->name('notes.create');
    Route::post('/notes/store', [NoteController::class,'store'])->name('notes.store');
    Route::post('/notes/{note}/update', [NoteController::class,'update'])->name('notes.update');
    Route::post('/notes/{note}/destroy', [NoteController::class,'destroy'])->name('notes.destroy');
});


require __DIR__.'/auth.php';

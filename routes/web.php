<?php

use App\Http\Controllers\NoteController;
use Illuminate\Support\Facades\Route;


Route::get('/', [NoteController::class,'index'])->name('notes');
Route::get('/notes/create', [NoteController::class,'create'])->name('notes.create');
Route::get('/notes/${note}', [NoteController::class,'show'])->name('notes.show');
Route::get('/notes/${note}/edit', [NoteController::class,'edit'])->name('notes.edit');

Route::post('/notes', [NoteController::class,'store'])->name('notes.store');
Route::post('/notes/${note}/update', [NoteController::class,'update'])->name('notes.update');
Route::post('/notes/${note}/destroy', [NoteController::class,'destroy'])->name('notes.destroy');




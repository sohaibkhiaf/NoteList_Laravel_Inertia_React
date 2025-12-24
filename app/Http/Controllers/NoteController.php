<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NoteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $notes = Note::latest()->paginate(6);
        return Inertia::render("Home", ["notes"=> $notes]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $fields = $request->validate([
            "title"=> "required",
            "body" => "required",
        ]);

        Note::create($fields);

        return redirect()->route("notes")
            ->with("normal","Note was created successfully.");
    }

    /**
     * Display the specified resource.
     */
    public function show(Note $note)
    {
        return Inertia::render("Show", ["note" => $note]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Note $note)
    {
        return Inertia::render("Edit", ["note" => $note]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Note $note)
    {
        $fields = $request->validate([
            'title' => 'required',
            'body' => 'required',
        ]);

        $note->update($fields);

        return redirect()->route('notes')
            ->with('normal' , "Note was updated successfully.");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Note $note)
    {
        $note->delete();
        return redirect()->route("notes")
            ->with("warning","The Post was deleted!");
    }
}

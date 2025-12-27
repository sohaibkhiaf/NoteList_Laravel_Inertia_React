<?php

namespace App\Http\Controllers;

use App\Models\Publication;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PublicationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $publications = Publication::with('user')->latest()->paginate(6);
        return Inertia::render("Home", ["publications"=> $publications]);
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

        $user = $request->user();

        Publication::create([...$fields, "user_id" => $user->id]);

        return redirect()->route("publications")
            ->with("normal","Publication was created successfully");
    }

    /**
     * Display the specified resource.
     */
    public function show(Publication $publication)
    {
        return Inertia::render("Show", [
            "publication" => $publication,
            "user" => $publication->user,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Publication $publication)
    {
        if (auth()->user()->id === $publication->user->id) {
            return Inertia::render("Edit", ["publication" => $publication]);
        }else {
            return redirect()->route('publications')
                ->with( 'warning' , "Unauthorized Access");
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Publication $publication)
    {
        $fields = $request->validate([
            'title' => 'required',
            'body' => 'required',
        ]);

        if ($request->user()->id === $publication->user->id) {
            $publication->update($fields);

            return redirect()->route('publications')
                ->with('normal' , "Publication was updated successfully");
        }else {
            return redirect()->route('publications')
                ->with( 'warning' , "Unauthorized Access");
        }

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Publication $publication)
    {
        if (auth()->user()->id === $publication->user->id) {
            $publication->delete();
            return redirect()->route("publications")
                ->with("normal","The Post was deleted");
        }else {
            return redirect()->route('publications')
                ->with( 'warning' , "Unauthorized Access");
        }
    }
}

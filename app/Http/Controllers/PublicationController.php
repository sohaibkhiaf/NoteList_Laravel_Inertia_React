<?php

namespace App\Http\Controllers;

use App\Http\Requests\PublicationRequest;
use App\Http\Resources\PublicationResource;
use App\Models\Publication;
use Inertia\Inertia;

class PublicationController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $publications = Publication::with('user')->latest()->paginate(6);
        return Inertia::render("Home", [
            "publications"=>  PublicationResource::collection($publications),
        ]);
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
    public function store(PublicationRequest $request)
    {
        $fields = $request->validated();
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
            "publication" => new PublicationResource($publication),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Publication $publication)
    {
        $this->authorize("update", $publication);

        return Inertia::render("Edit", [
            "publication" => new PublicationResource($publication),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(PublicationRequest $request, Publication $publication)
    {
        $this->authorize("update", $publication);

        $fields = $request->validated();
        $publication->update($fields);

        return redirect()->route('publications')
            ->with('normal' , "Publication was updated successfully");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Publication $publication)
    {
        $this->authorize("delete", $publication);

        $publication->delete();
        return redirect()->route("publications")
            ->with("normal","Publication was deleted successfully");
    }
}

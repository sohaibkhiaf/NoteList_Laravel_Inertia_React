<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Publication;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::create([
            "id"=> 1,
            "name"=> "Sohaib",
            "email"=> "sohaib@email.com",
            "password"=> bcrypt("password"),
        ]);

        User::create([
            "id"=> 2,
            "name"=> "Rayan",
            "email"=> "rayan@email.com",
            "password"=> bcrypt("password"),
        ]);

        Publication::factory(count: 100)->create();
    }
}

<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class TelemedicineController extends Controller
{
    public function index()
    {
        return Inertia::render('TelemedicinePage', [
            
        ]);
    }
}

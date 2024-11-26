<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class TelemedicineController extends Controller
{
    public function index()
    {
        return Inertia::render('TelemedicinePage', [
            'title' => 'Pintar Desa',
            'hero_image' => asset('assets/images/Logo PinDes.png'),
        ]);
    }
}

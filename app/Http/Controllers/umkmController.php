<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class umkmController extends Controller
{
    public function index()
    {
        return Inertia::render('PelatihanPage', [
            'title' => 'Pintar Desa',
            'hero_image' => asset('assets/images/Logo PinDes.png'),
        ]);
    }
}

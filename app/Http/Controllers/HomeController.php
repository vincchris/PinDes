<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('HomePage', [
            'title' => 'Pintar Desa',
            'hero_image' => asset('assets/images/Logo PinDes.png'),
        ]);
    }
}

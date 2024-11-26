<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class KonektivitasController extends Controller
{
    public function index()
    {
        return Inertia::render('KonektivitasPage', [
            'title' => 'Pintar Desa',
            'hero_image' => asset('assets/images/Logo PinDes.png'),
        ]);
    }
}

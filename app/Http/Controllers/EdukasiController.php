<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class EdukasiController extends Controller
{
    public function index()
    {
        return Inertia::render('EdukasiPage', [
            'title' => 'Pintar Desa',
            'hero_image' => asset('assets/images/Logo PinDes.png'),
        ]);
    }
}

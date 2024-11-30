<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class ChatBotController extends Controller
{
    public function index()
    {
        // Kirim data jika diperlukan
        return Inertia::render('ChatBot', [
        ]);
    }
}

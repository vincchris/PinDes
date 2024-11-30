<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class ChatBotController extends Controller
{
    public function index()
    {
        return Inertia::render('ChatBot', [
        ]);
    }
}

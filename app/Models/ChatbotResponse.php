<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChatbotResponse extends Model
{
    use HasFactory;

    protected $fillable = [
        'keyword',
        'response_text',
        'used_in_log',
    ];

    public function chatbotLog()
    {
        return $this->belongsTo(ChatbotLog::class, 'used_in_log');
    }
}

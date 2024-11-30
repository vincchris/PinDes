<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChatbotMessage extends Model
{
    use HasFactory;

    protected $fillable = [
        'session_id',
        'sender',
        'message_content',
    ];

    public function session()
    {
        return $this->belongsTo(ChatbotSession::class, 'session_id');
    }
}

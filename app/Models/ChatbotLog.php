<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChatbotLog extends Model
{
    use HasFactory;

    protected $fillable = [
        'session_id',
        'event_type',
        'log_details',
    ];

    public function session()
    {
        return $this->belongsTo(ChatbotSession::class, 'session_id');
    }
}

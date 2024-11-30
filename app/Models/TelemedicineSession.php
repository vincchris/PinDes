<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TelemedicineSession extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'appointment_time',
        'status',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

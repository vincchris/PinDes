<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AuditLog extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'table_name',
        'action',
        'old_data',
        'new_data',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

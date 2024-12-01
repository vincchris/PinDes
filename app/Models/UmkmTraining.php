<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UmkmTraining extends Model
{
    use HasFactory;

    // Kolom yang dapat diisi secara mass-assignment
    protected $fillable = [
        'title',
        'description',
        'content',
        'date',
        'created_by',
        'image', 
    ];

    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
}

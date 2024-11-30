<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VillageConnection extends Model
{
    use HasFactory;

    protected $fillable = [
        'village_name',
        'region',
        'contact_person',
        'contact_number',
        'program_details',
        'created_by',
    ];

    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
}

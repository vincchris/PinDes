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
        'image', 
        'created_by',
        
    ];

    protected static function booted()
    {
        static::saved(function ($umkmTraining) {
            // Menetapkan created_by setelah record disimpan
            if (!$umkmTraining->created_by) {
                $umkmTraining->update([
                    'created_by' => auth()->id(),
                ]);
            }
        });
    }

    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
}

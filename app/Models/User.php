<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    public function educationMaterials()
    {
        return $this->hasMany(EducationMaterial::class, 'created_by');
    }

    public function umkmTrainings()
    {
        return $this->hasMany(UmkmTraining::class, 'created_by');
    }

    public function telemedicineSessions()
    {
        return $this->hasMany(TelemedicineSession::class);
    }

    public function villageConnections()
    {
        return $this->hasMany(VillageConnection::class, 'created_by');
    }

    public function feedbacks()
    {
        return $this->hasMany(Feedback::class);
    }

    public function notifications()
    {
        return $this->hasMany(Notification::class);
    }

    public function auditLogs()
    {
        return $this->hasMany(AuditLog::class);
    }
}

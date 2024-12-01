<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTelemedicineSessionsTable extends Migration
{
    public function up()
    {
        Schema::create('telemedicine_sessions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->timestamp('appointment_time');
            $table->enum('status', ['scheduled', 'completed', 'canceled', 'no-show']);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('telemedicine_sessions');
    }
}
